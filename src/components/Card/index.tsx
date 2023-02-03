import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Task} from '../../types/tasks';

interface CardProps {
  task: Task;
  setTaskStatus: (id: string) => void;
}

const Card = ({task, setTaskStatus}: CardProps) => {
  return (
    <View>
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>{task.done.toString()}</Text>
      <TouchableOpacity
        onPress={() => {
          setTaskStatus(task.id);
        }}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
