import React from 'react';
import TaskList from '../../components/TaskList';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Routes, ScreensParamsList} from '../../types/interfaces/navigation';

type ListScreenProps = BottomTabScreenProps<
  ScreensParamsList,
  Routes.TASK_LIST
>;

const ListScreen = ({}: ListScreenProps) => {
  return <TaskList />;
};

export default ListScreen;
