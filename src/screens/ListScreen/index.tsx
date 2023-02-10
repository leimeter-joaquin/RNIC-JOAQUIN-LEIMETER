import React, {useEffect, useState} from 'react';
import {Text, AppState} from 'react-native';
import {CardList} from './styles';
import tasksArray from '../../constants/mock';
import {Task} from '../../types/tasks';
import Card from '../../components/Card';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';

const EmptyList = () => <Text>EmptyList</Text>;

type ListScreenProps = BottomTabScreenProps<
  ScreensParamsList,
  Routes.TASK_LIST
>;

const ListScreen = ({}: ListScreenProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  // const [newTitle, setNewTitle] = useState('');
  // const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    if (tasksArray) {
      setTasks(tasksArray);
    }

    const appStateSubscription = AppState.addEventListener(
      'change',
      nextAppState => {
        if (nextAppState !== 'active') {
          setTasks(tasksArray);
        }
      },
    );

    return () => {
      appStateSubscription.remove();
    };
  }, []);

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

  // const addTask = () => {
  //   setTasks(prevState => {
  //     const newTasks: Task[] = [
  //       ...prevState,
  //       {
  //         id: Date.now().toString(),
  //         title: newTitle,
  //         description: newDescription,
  //         done: false,
  //         image: {
  //           src: '',
  //           alt: '',
  //         },
  //       },
  //     ];

  //     setNewTitle('');
  //     setNewDescription('');

  //     Keyboard.dismiss();

  //     return newTasks;
  //   });
  // };

  const removeTask = (id: string) => {
    setTasks(prevState => {
      return prevState.filter(task => task.id !== id);
    });
  };

  // const secondInput = useRef<TextInput>(null);

  return (
    <CardList
      data={tasks}
      renderItem={({item}) => (
        <Card
          task={item as Task}
          setTaskStatus={setTaskStatus}
          removeTask={removeTask}
        />
      )}
      // ItemSeparatorComponent={() => <View style={{height: 10}} />}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default ListScreen;
