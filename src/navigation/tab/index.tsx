import React from 'react';
import ListScreen from '../../screens/ListScreen';
import AddTaskScreen from '../../screens/AddTaskScreen';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {PlusIcon, ListIcon} from './styles';
import {myTheme} from '../../constants/theme';

const Tab = createMaterialBottomTabNavigator<ScreensParamsList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{}}
      shifting={false}
      activeColor={`${myTheme.colors.navigationIconStroke}`}
      inactiveColor={`${myTheme.colors.navigationIconStroke}`}
      sceneAnimationEnabled={true}
      sceneAnimationType={'shifting'}
      barStyle={{
        backgroundColor: `${myTheme.colors.navigationBackground}`,
      }}>
      <Tab.Screen
        name={Routes.TASK_LIST}
        component={ListScreen}
        options={{
          title: 'Tasks',
          tabBarIcon: ({color}) => <ListIcon color={color} />,
        }}
      />
      <Tab.Screen
        name={Routes.ADD_TASK}
        component={AddTaskScreen}
        options={{
          title: 'Add',
          tabBarIcon: ({color}) => <PlusIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
