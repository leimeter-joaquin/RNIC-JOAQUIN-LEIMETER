import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from '../../screens/ListScreen';
import EditTaskScreen from '../../screens/EditTaskScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* put tab naigator here */}
      <Stack.Screen name="LIST" component={ListScreen} options={{}} />
      <Stack.Screen name="EDIT_TASK" component={EditTaskScreen} options={{}} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
