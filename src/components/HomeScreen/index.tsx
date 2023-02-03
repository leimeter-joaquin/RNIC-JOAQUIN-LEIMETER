import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StatusBar, Text, FlatList} from 'react-native';
import styles from './styles';
import tasksArray from '../../constants/mock';
import {Task} from '../../types/tasks';
import Card from '../Card';

function HomeScreen(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (tasksArray) {
      setTasks(tasksArray);
    }
  }, []);

  /**
   *
   * @param id id of the task to modify
   */
  const setTaskStatus = (id: string) => {
    setTasks(prevState => {
      const newTasks = prevState.map(task => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      });

      return newTasks;
    });
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#61dafb" />

      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <Card task={item} setTaskStatus={setTaskStatus} />
        )}
      />

      <View>
        <Text style={styles.greetings}>Hello</Text>
      </View>

      <View>
        <Text>{JSON.stringify(tasks, null, 2)}</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
