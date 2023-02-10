import React from 'react';
import {View, Text} from 'react-native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';

type AddTaskScreenProps = BottomTabScreenProps<
  ScreensParamsList,
  Routes.ADD_TASK
>;

const AddTaskScreen = ({}: AddTaskScreenProps) => {
  return (
    <View>
      <Text>AddTaskScreen</Text>
    </View>
  );
};

export default AddTaskScreen;
