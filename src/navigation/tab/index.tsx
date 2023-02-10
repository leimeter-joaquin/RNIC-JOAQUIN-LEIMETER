import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from '../../screens/ListScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
