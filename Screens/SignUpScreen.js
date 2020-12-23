import React from 'react';
import {View, Text, Alert} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export default function SignUpScreen({navigation}) {
  const handleSignUp = () => {
    alert('Loading...');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
      }}>
      <Text>Signup Screen</Text>
      <TouchableOpacity
        style={{borderWidth: 1, padding: 10, margin: 10}}
        onPress={handleSignUp}>
        <Text>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderWidth: 1, padding: 10, margin: 10}}
        onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
