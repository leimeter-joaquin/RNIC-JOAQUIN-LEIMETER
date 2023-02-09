import React from 'react';
import {Task} from '../../types/tasks';
import Check from '../icons/Check';
import Edit from '../icons/Edit';
import X from '../icons/X';
import {
  CardWrapper,
  CloseButton,
  ControlButton,
  ControlsContainer,
  DescriptionText,
  TaskImage,
  TitleTaskContainer,
  TitleText,
} from './styles';

interface CardProps {
  task: Task;
  setTaskStatus: (id: string) => void;
  removeTask: (id: string) => void;
}

const Card = ({task, setTaskStatus, removeTask}: CardProps) => {
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
        <ControlButton>
          <Edit color="black" />
        </ControlButton>
        <ControlButton
          onPress={() => {
            setTaskStatus(task.id);
          }}>
          <Check color="black" />
        </ControlButton>
      </ControlsContainer>
      <CloseButton
        onPress={() => {
          removeTask(task.id);
        }}>
        <X color="black" />
      </CloseButton>
    </CardWrapper>
  );
};

export default Card;
