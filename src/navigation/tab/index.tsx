import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from '../../screens/ListScreen';
import AddTaskScreen from '../../screens/AddTaskScreen';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';

const Tab = createBottomTabNavigator<ScreensParamsList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarVisibilityAnimationConfig: {
          show: {
            animation: 'spring',
            config: {
              bounciness: 2,
            },
          },
        },
      }}>
      <Tab.Screen name={Routes.TASK_LIST} component={ListScreen} />
      <Tab.Screen name={Routes.ADD_TASK} component={AddTaskScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
