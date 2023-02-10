import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';
import Form from '../../components/Form';

type AddTaskScreenProps = BottomTabScreenProps<
  ScreensParamsList,
  Routes.ADD_TASK
>;

const AddTaskScreen = ({navigation}: AddTaskScreenProps) => {
  return (
    <View>
      <View>
        <TouchableHighlight
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>GoBack</Text>
        </TouchableHighlight>
        <Text>addTaskScreen</Text>
        <Form />
      </View>
    </View>
  );
};

export default AddTaskScreen;
