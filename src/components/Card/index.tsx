import React from 'react';
import {Task} from '../../types/tasks';
import Check from '../../assets/icons/Check';
import Edit from '../../assets/icons/Edit';
import {
  CardWrapper,
  ControlButton,
  ControlsContainer,
  DescriptionText,
  TaskImage,
  TitleTaskContainer,
  TitleText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';

import {useDispatch} from 'react-redux';
import {setStatus} from '../../store/tasks/tasksSlice';

interface CardProps {
  task: Task;
}

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  ScreensParamsList,
  Routes.TASK_LIST
>;

const Card = ({task}: CardProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const dispatch = useDispatch();
  console.log('rendered Card', task.id);
  return (
    <CardWrapper done={task.done}>
      {task.image.src ? (
        <TaskImage source={{uri: task.image.src}} resizeMode={'center'} />
      ) : null}
      <TitleTaskContainer>
        <TitleText>{task.title}</TitleText>
        <DescriptionText numberOfLines={3}>{task.description}</DescriptionText>
      </TitleTaskContainer>
      <ControlsContainer>
        <ControlButton
          onPress={() =>
            navigation.navigate(Routes.EDIT_TASK, {
              id: task.id,
            })
          }>
          <Edit color="black" />
        </ControlButton>
        <ControlButton
          onPress={() => {
            dispatch(setStatus(task.id));
          }}>
          <Check color="black" />
        </ControlButton>
      </ControlsContainer>
    </CardWrapper>
  );
};

export default Card;
