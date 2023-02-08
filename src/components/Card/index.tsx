import React from 'react';
import {Task} from '../../types/tasks';
import {CardWrapper} from './styles';
// import {useColorScheme} from 'react-native';

interface CardProps {
  task: Task;
  setTaskStatus: (id: string) => void;
}

const Card = ({task, setTaskStatus}: CardProps) => {
  // const colorScheme = useColorScheme();
  return (
    <CardWrapper
      done={task.done}
      onPress={() => {
        setTaskStatus(task.id);
      }}>
      {/* {task.image.src ? (
        <Image source={{uri: task.image.src}} alt={task.image.alt} />
      ) : (
        <Text>asd</Text>
      )}
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      /> */}
      {/* <TitleTaskContainer>
        <Text style={styles.title}>{task.title}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {task.description}
        </Text>
      </TitleTaskContainer> */}
      {/* <CloseButton /> */}
    </CardWrapper>
  );
};

export default Card;
