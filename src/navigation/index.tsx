import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack';

// TODO:
// 1. use header back button to navigate back
const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
