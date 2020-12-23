import React from 'react';
import {View, Text} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
      }}>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        style={{borderWidth: 1, padding: 10, margin: 10}}
        onPress={() => navigation.navigate('Home')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderWidth: 1, padding: 10, margin: 10}}
        onPress={() => navigation.navigate('SignUp')}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
