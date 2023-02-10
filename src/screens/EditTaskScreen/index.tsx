import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, TouchableHighlight} from 'react-native';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';
import Form from '../../components/Form';

type EditTaskScreenProps = NativeStackScreenProps<
  ScreensParamsList,
  Routes.EDIT_TASK
>;

const EditTaskScreen = ({navigation, route}: EditTaskScreenProps) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>GoBack</Text>
      </TouchableHighlight>
      <Text>EditTaskScreen</Text>
      <Form id={route.params.id} />
    </View>
  );
};

export default EditTaskScreen;
