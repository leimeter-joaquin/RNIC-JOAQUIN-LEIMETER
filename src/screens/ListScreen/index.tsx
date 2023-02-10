import React, {useEffect} from 'react';
import {Text, AppState} from 'react-native';
import {CardList} from './styles';
import {Task} from '../../types/tasks';
import Card from '../../components/Card';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';
import {RootState} from '../../store';

const EmptyList = () => <Text>EmptyList</Text>;

type ListScreenProps = BottomTabScreenProps<
  ScreensParamsList,
  Routes.TASK_LIST
>;

const ListScreen = ({}: ListScreenProps) => {
  const tasks = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    const appStateSubscription = AppState.addEventListener(
      'change',
      nextAppState => {
        if (nextAppState !== 'active') {
          // dispatch(clear()); ?? maybe not do this
        }
      },
    );

    return () => {
      appStateSubscription.remove();
    };
  }, []);

  return (
    <CardList
      data={tasks}
      renderItem={({item}) => <Card task={item as Task} />}
      // ItemSeparatorComponent={() => <View style={{height: 10}} />}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default ListScreen;
