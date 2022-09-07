/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import stripe from '@stripe/stripe-react-native'

// stripe.setOptions({
//   publishableKey: 'pk_test_51LIQo7ImE3PIl9xOLzYWEO4rBAO0381GC3BKBVB09G4yyDm9QaxANkluIhrg3PWk9nOZFGu3N6kJfpAFNqeoD5Rt00j8fMMxmd',
//   merchantId: 'MERCHANT_ID', // Optional
//   androidPayMode: 'test', // Android only
// })

AppRegistry.registerComponent(appName, () => App);
