import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditTaskScreen from '../../screens/EditTaskScreen';
import TabNavigator from '../tab';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';

const Stack = createNativeStackNavigator<ScreensParamsList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{}}
      />
      <Stack.Screen
        name={Routes.EDIT_TASK}
        component={EditTaskScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
