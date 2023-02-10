import React, {useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import moveFocusTo from '../../utils/moveFocusTo';
import {
  FormContainer,
  FormInput,
  FormButton,
  FormButtonText,
  PlusIcon,
} from './styles';

type FormProps = {
  addTask: () => void;
  editTask: (id: string, title: string, description: string) => void;
  title?: string;
  desciption?: string;
};

const Form = ({addTask, editTask, titleProp, desciptionProp}: FormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (titleProp && desciptionProp) {
    setTitle(titleProp);
    setDescription(desciptionProp);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* I had to wrap the inputs and button on a view because this component wouldn't let me have multiple children nodes. */}
      <FormContainer>
        <FormInput
          value={newTitle}
          onChangeText={setNewTitle}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => moveFocusTo(secondInput)}
        />
        <FormInput
          ref={secondInput}
          value={newDescription}
          returnKeyType="next"
          onChangeText={setNewDescription}
        />
        <FormButton onPress={addTask} disabled={!newTitle || !newDescription}>
          <FormButtonText>Add</FormButtonText>
          <PlusIcon color="black" />
        </FormButton>
      </FormContainer>
    </TouchableWithoutFeedback>
  );
};

export default Form;
