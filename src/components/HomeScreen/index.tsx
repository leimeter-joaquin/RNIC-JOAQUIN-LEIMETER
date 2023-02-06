import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TouchableHighlight,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  AppState,
} from 'react-native';
import styles from './styles';
import tasksArray from '../../constants/mock';
import {Task} from '../../types/tasks';
import Card from '../Card';
import moveFocusTo from '../../utils/moveFocusTo';

const EmptyList = () => <Text>EmptyList</Text>;

function HomeScreen(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const isAndroid = Platform.OS === 'android';

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
    if (newTitle || newDescription) {
      return;
    }

    setTasks(prevState => {
      const newTasks: Task[] = [
        ...prevState,
        {
          id: Date.now().toString(),
          title: newTitle,
          description: newDescription,
          done: false,
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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <StatusBar barStyle={isAndroid ? 'light-content' : 'dark-content'} />
        <FlatList
          contentContainerStyle={styles.cardsContainer}
          data={tasks}
          renderItem={({item}) => (
            <Card task={item} setTaskStatus={setTaskStatus} />
          )}
          ListEmptyComponent={() => EmptyList()}
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
            <TouchableHighlight style={styles.button} onPress={addTask}>
              <Text style={styles.buttonText}>Press</Text>
            </TouchableHighlight>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default HomeScreen;
