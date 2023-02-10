import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, TouchableHighlight} from 'react-native';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';

type EditTaskScreenProps = NativeStackScreenProps<
  ScreensParamsList,
  Routes.EDIT_TASK
>;

const EditTaskScreen = ({navigation}: EditTaskScreenProps) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>GoBack</Text>
      </TouchableHighlight>
      <Text>EditTaskScreen</Text>
    </View>
  );
};

export default EditTaskScreen;
