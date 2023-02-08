import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  AppState,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import styles, {ListJoaco} from './styles';
import tasksArray from '../../constants/mock';
import {Task} from '../../types/tasks';
import Card from '../Card';
import moveFocusTo from '../../utils/moveFocusTo';
import SafeKeyboardAvoidingWrapper from '../SafeKeyboardAvoidingWrapper';

const EmptyList = () => <Text>EmptyList</Text>;

function HomeScreen(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

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

  const addTask = () => {
    setTasks(prevState => {
      const newTasks: Task[] = [
        ...prevState,
        {
          id: Date.now().toString(),
          title: newTitle,
          description: newDescription,
          done: false,
          image: {
            src: '',
            alt: '',
          },
        },
      ];

      setNewTitle('');
      setNewDescription('');

      Keyboard.dismiss();

      return newTasks;
    });
  };

  const secondInput = useRef<TextInput>(null);

  return (
    <SafeKeyboardAvoidingWrapper>
      <ListJoaco
        data={tasks}
        renderItem={({item}) => (
          <Card task={item as Task} setTaskStatus={setTaskStatus} />
        )}
        ListEmptyComponent={EmptyList}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* I had to wrap the inputs and button on a view because this component wouldn't let me have multiple children nodes. */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={newTitle}
            onChangeText={setNewTitle}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => moveFocusTo(secondInput)}
          />
          <TextInput
            ref={secondInput}
            style={styles.input}
            value={newDescription}
            returnKeyType="next"
            onChangeText={setNewDescription}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={addTask}
            disabled={!newTitle || !newDescription}>
            <Text style={styles.buttonText}>Press</Text>
          </TouchableHighlight>
        </View>
      </TouchableWithoutFeedback>
    </SafeKeyboardAvoidingWrapper>
  );
}

export default HomeScreen;
