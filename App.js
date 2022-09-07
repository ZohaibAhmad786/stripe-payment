// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid
} from "react-native";
// import MapView, {
//   Marker,
//   AnimatedRegion,
//   Polyline,
//   PROVIDER_GOOGLE
// } from "react-native-maps";
// import haversine from "haversine";
// import navigator from '@react-native-community/geolocation';
// import { NativeModules } from 'react-native';


// // const LATITUDE = 29.95539;
// // const LONGITUDE = 78.07513;
// const LATITUDE_DELTA = 0.009;
// const LONGITUDE_DELTA = 0.009;
// const LATITUDE = 33.6532127;
// const LONGITUDE = 73.1543343;

// const { CalendarModule } =  NativeModules
// const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants()
// console.log(DEFAULT_EVENT_NAME)

// class AnimatedMarkers extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//       routeCoordinates: [],
//       distanceTravelled: 0,
//       prevLatLng: {},
//       coordinate: new AnimatedRegion({
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: 0,
//         longitudeDelta: 0
//       })
//     };
//   }

//    requestLocationPermission = async () => {
//     if (Platform.OS === 'ios') {
//       // getOneTimeLocation();
//       // this.subscribeLocationLocation();
//     } else {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Access Required',
//             message: 'This App needs to Access your location',
//           },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           //To Check, If Permission is granted
//           // getOneTimeLocation();
//           // this.subscribeLocationLocation();
//         } else {
//           setLocationStatus('Permission Denied');
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     }
//   };
  



//    componentDidMount() {
//     CalendarModule.createCalendarEvent('testName', 'testLocation');
//     // console.log(Permissions);
//      this.requestLocationPermission().then(()=>{
//       const { coordinate } = this.state;
//       navigator.setRNConfiguration({authorizationLevel:'auto'})
//         this.watchID = navigator.watchPosition(
//           position => {
//             const { routeCoordinates, distanceTravelled } = this.state;
//             const { latitude, longitude } = position.coords;
  
//             const newCoordinate = {
//               latitude,
//               longitude
//             };
  
//             console.log(newCoordinate);
//             if (Platform.OS === "android") {
//               if (this.marker) {
//                 this.marker.animateMarkerToCoordinate(
//                   newCoordinate,
//                   500
//                 );
//               }
//             } else {
//               coordinate.timing(newCoordinate).start();
//             }
  
//             this.setState({
//               latitude,
//               longitude,
//               routeCoordinates: routeCoordinates.concat([newCoordinate]),
//               distanceTravelled:
//                 distanceTravelled + this.calcDistance(newCoordinate),
//               prevLatLng: newCoordinate
//             });
//           },
//           error => console.log(error),
//           {
//             enableHighAccuracy: true,
//             timeout: 20000,
//             maximumAge: 1000,
//             distanceFilter: 10
//           }
//         );
//      })
   

//   }

//   componentWillUnmount() {
//     navigator.clearWatch(this.watchID);
//   }

//   getMapRegion = () => ({
//     latitude: this.state.latitude,
//     longitude: this.state.longitude,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA
//   });

//   calcDistance = newLatLng => {
//     const { prevLatLng } = this.state;
//     return haversine(prevLatLng, newLatLng) || 0;
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           provider={PROVIDER_GOOGLE}
//           showUserLocation
//           followUserLocation
//           loadingEnabled
//           region={this.getMapRegion()}
//         >
//           <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
//           <Marker.Animated
//             ref={marker => {
//               this.marker = marker;
//             }}
//             coordinate={this.state.coordinate}
//           />
//         </MapView>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={[styles.bubble, styles.button]}>
//             <Text style={styles.bottomBarContent}>
//               {parseFloat(this.state.distanceTravelled).toFixed(2)} km
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject
//   },
//   bubble: {
//     flex: 1,
//     backgroundColor: "rgba(255,255,255,0.7)",
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20
//   },
//   latlng: {
//     width: 200,
//     alignItems: "stretch"
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: "center",
//     marginHorizontal: 10
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginVertical: 20,
//     backgroundColor: "transparent"
//   }
// });

// export default AnimatedMarkers;


// App.ts
import { StripeProvider } from '@stripe/stripe-react-native';

function App() {
  return (
    <StripeProvider
      publishableKey={"pk_test_51LIQo7ImE3PIl9xOLzYWEO4rBAO0381GC3BKBVB09G4yyDm9QaxANkluIhrg3PWk9nOZFGu3N6kJfpAFNqeoD5Rt00j8fMMxmd"}
      //merchantIdentifier="merchant.identifier" // required for Apple Pay
     // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PaymentScreen />
    </StripeProvider>
  );
}

export default App

// PaymentScreen.ts
import { CardField, useStripe } from '@stripe/stripe-react-native';

function PaymentScreen() {
  const { confirmPayment } = useStripe();

  // ...

  const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails = {
      email: 'jenny.rosen@example.com',
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      alert('Payment confirmation error', error);
    } else if (paymentIntent) {
      alert('Success from promise', paymentIntent);
    }
  };

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`http://localhost:3000/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
      }),
    });
    const {secret} = await response.json();
alert(secret)
    return secret;
  };


  return (
    <View>
    <CardField
      postalCodeEnabled={true}
      placeholders={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        console.log('cardDetails', cardDetails);
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
    <Button onPress={handlePayPress} title="Pay"  />
    
    </View>
  );
}