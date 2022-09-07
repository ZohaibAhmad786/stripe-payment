import React, { useEffect, useState } from 'react';
import {
  GooglePayButton,
  useGooglePay,
  AddToWalletButton,
  Constants,
  canAddCardToWallet,
  GooglePayCardToken,
} from '@stripe/stripe-react-native';
import PaymentScreen from '../components/PaymentScreen';
import { API_URL } from './../utils/Config';
import { Alert, StyleSheet, View, Image } from 'react-native';
// @ts-ignore
// import AddToGooglePayPNG from '../assets/Add-to-Google-Pay-Button-dark-no-shadow.png';

const LIVE_CARD_ID = 'price_1LexnRImE3PIl9xOXL6tvx9z';

export default function GooglePayScreen() {
  const {
    isGooglePaySupported,
    initGooglePay,
    presentGooglePay,
    loading,
    createGooglePayPaymentMethod,
  } = useGooglePay();
  const [initialized, setInitialized] = useState(false);




  const fetchPaymentIntentClientSecret = async () => {
    console.log(`${API_URL}/create-payment-intent`)
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
        items: ['id-1'],
        force3dSecure: true,
      }),
    });
    const { clientSecret } = await response.json();

    return clientSecret;
  };

  const pay = async () => {
    // 2. Fetch payment intent client secret
    const clientSecret = await fetchPaymentIntentClientSecret();

    // 3. Open Google Pay sheet and proceed a payment
    const { error } = await presentGooglePay({
      clientSecret,
      forSetupIntent: false,
    });

    if (error) {
      Alert.alert(error.code, error.message);
      return;
    }
    Alert.alert('Success', 'The payment was confirmed successfully.');
    setInitialized(false);
  };

  /*
    As an alternative you can only create a paymentMethod instead of confirming the payment.
  */
  const createPaymentMethod = async () => {
    const { error, paymentMethod } = await createGooglePayPaymentMethod({
      amount: 12,
      currencyCode: 'USD',
    });

    if (error) {
      Alert.alert(error.code, error.message);
      return;
    } else if (paymentMethod) {
      Alert.alert(
        'Success',
        `The payment method was created successfully. paymentMethodId: ${paymentMethod.id}`
      );
    }
    setInitialized(false);
  };

  // 1. Initialize Google Pay
  const initialize = async () => {
    if (!(await isGooglePaySupported({ testEnv: true }))) {
      Alert.alert('Google Pay is not supported.');
      return;
    }

    const { error } = await initGooglePay({
      testEnv: true,
      merchantName: 'Test',
      countryCode: 'US',
      billingAddressConfig: {
        format: 'FULL',
        isPhoneNumberRequired: true,
        isRequired: false,
      },
      existingPaymentMethodRequired: false,
      isEmailRequired: true,
    });

    if (error) {
      Alert.alert(error.code, error.message);
      return;
    }
    setInitialized(true);
  };



  return (
    <PaymentScreen onInit={initialize}>
      <GooglePayButton
        disabled={!initialized || loading}
        style={styles.payButton}
        type="pay"
        onPress={pay}
      />

      <View style={styles.row}>
        <GooglePayButton
          disabled={!initialized || loading}
          style={styles.standardButton}
          type="standard"
          onPress={createPaymentMethod}
        />
      </View>

    </PaymentScreen>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 30,
  },
  payButton: {
    marginTop: 30,
    width: 152,
    height: 40,
  },
  standardButton: {
    width: 90,
    height: 40,
  },
});
