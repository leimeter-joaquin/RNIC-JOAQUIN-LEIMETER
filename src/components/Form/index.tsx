import React, {useEffect, useRef, useState} from 'react';
import {TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native';
import moveFocusTo from '../../utils/moveFocusTo';
import {
  FormContainer,
  FormInput,
  FormButton,
  FormButtonText,
  PlusIcon,
} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {add, edit} from '../../store/tasks/tasksSlice';
import {RootState} from '../../store';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';
import {useNavigation} from '@react-navigation/native';

type FormProps = {
  id?: string;
};

const Form = ({id}: FormProps) => {
  const task = useSelector((state: RootState) =>
    state.tasks.find(t => {
      return t.id === id;
    }),
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  type ProfileScreenNavigationProp = NativeStackNavigationProp<
    ScreensParamsList,
    Routes.EDIT_TASK
  >;

  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id && task) {
      setTitle(task?.title);
      setDescription(task?.description);
      console.log('something', id);
    }
  }, [id, task]);

  const secondInput = useRef<TextInput>(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* I had to wrap the inputs and button on a view because this component wouldn't let me have multiple children nodes. */}
      <FormContainer>
        <FormInput
          value={title}
          onChangeText={setTitle}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => moveFocusTo(secondInput)}
        />
        <FormInput
          ref={secondInput}
          value={description}
          returnKeyType="next"
          onChangeText={setDescription}
        />
        {/* TODO: Change button depending on task prop. for now it's the add button*/}
        {id ? (
          <FormButton
            onPress={() => {
              dispatch(edit({id, title, description}));
              navigation.navigate(Routes.TAB_NAVIGATOR);
            }}
            disabled={!title || !description}>
            <FormButtonText>Edit</FormButtonText>
            <PlusIcon color="black" />
          </FormButton>
        ) : (
          <FormButton
            onPress={() => {
              dispatch(add({title, description}));
              setTitle('');
              setDescription('');
              navigation.canGoBack() && navigation.goBack();
            }}
            disabled={!title || !description}>
            <FormButtonText>Add</FormButtonText>
            <PlusIcon color="black" />
          </FormButton>
        )}
      </FormContainer>
    </TouchableWithoutFeedback>
  );
};

export default Form;
