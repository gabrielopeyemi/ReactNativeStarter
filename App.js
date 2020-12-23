/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './Components/DrawerNavigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </>
  );
};
export default App;
