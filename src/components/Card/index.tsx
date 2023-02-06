import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Task} from '../../types/tasks';
import styles from './styles';
// import {useColorScheme} from 'react-native';

interface CardProps {
  task: Task;
  setTaskStatus: (id: string) => void;
}

const Card = ({task, setTaskStatus}: CardProps) => {
  // const colorScheme = useColorScheme();
  return (
    <View>
      <TouchableOpacity
        style={[styles.cardContainer, task.done && styles.done]}
        onPress={() => {
          setTaskStatus(task.id);
        }}>
        <Text style={styles.title}>{task.title}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {task.description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
