import { initStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
// import { colors } from '../colors';
// import { fetchPublishableKey } from '../helpers';


const PaymentScreen= ({
  paymentMethod,
  children,
  onInit,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
         initStripe({
          publishableKey:"pk_test_51LIQo7ImE3PIl9xOLzYWEO4rBAO0381GC3BKBVB09G4yyDm9QaxANkluIhrg3PWk9nOZFGu3N6kJfpAFNqeoD5Rt00j8fMMxmd",
          merchantIdentifier: 'merchant.com.stripe.react.native',
          urlScheme: 'stripe-example',
          setReturnUrlSchemeOnAndroid: true,
        });
        setLoading(false);
        onInit();
    
  }, []);

  return loading ? (
    <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
  ) : (
    <ScrollView
      accessibilityLabel="payment-screen"
      style={styles.container}
      keyboardShouldPersistTaps="always"
    >
      {children}
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Text style={{ opacity: 0 }}>appium fix</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});

export default PaymentScreen;
