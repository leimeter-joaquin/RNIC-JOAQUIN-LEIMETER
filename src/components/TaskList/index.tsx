import React from 'react';
import {Text} from 'react-native';
import {RootState} from '../../store';
import {Task} from '../../types/tasks';
import Card from '../Card';
import {CardList} from './styles';
import {useSelector} from 'react-redux';

const EmptyList = () => <Text>EmptyList</Text>;

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <CardList
      data={tasks}
      renderItem={({item}) => <Card task={item as Task} />}
      keyExtractor={item => (item as Task).id}
      // ItemSeparatorComponent={() => <View style={{height: 10}} />}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default TaskList;
