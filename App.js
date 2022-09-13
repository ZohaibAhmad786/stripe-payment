// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  // firstName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  // lastName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  email: Yup
    .string()
    .email('Invalid email')
    .required('Required'),
  password: Yup
    .string()
    .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});
const App = props => (
  <View style={{ flex: 1, padding: 20 }}>
    <Formik
      initialValues={{ email: '', password: '', }}
      onSubmit={values => console.log(values)}
      validationSchema={SignupSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValidating }) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email Address"
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 20,
              paddingVertical: 6,
              marginVertical: 10
            }}
          />
          {errors.email && touched.email && <Text>{errors.email}</Text>}

          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            secureTextEntry
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 20,
              paddingVertical: 6,
              marginVertical: 10
            }}
          />
          {errors.password && touched.password && <Text>{errors.password}</Text>}

          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  </View>
);

export default App;