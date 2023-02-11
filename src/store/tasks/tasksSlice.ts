import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../types/tasks';
import tasks from '../../constants/mock';

export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{title: string; description: string}>,
    ) => {
      const newTask: Task = {
        id: new Date().getTime().toString(),
        title: action.payload.title,
        description: action.payload.description,
        done: false,
        image: {
          src: '',
          alt: '',
        },
      };
      state.tasks.push(newTask);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.tasks.map(task => {
        if (task.id === action.payload) {
          task.done = !task.done;
        }
        return task;
      });
    },
    clear: state => {
      state.tasks = [];
    },
    edit: (
      state,
      action: PayloadAction<{id: string; title: string; description: string}>,
    ) => {
      let index: number;

      index = state.tasks.findIndex(task => task.id === action.payload.id);

      console.log(index);
      console.log(action.payload);

      state.tasks[index] = {
        ...state.tasks[index],
        title: action.payload.title,
        description: action.payload.description,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {add, remove, setStatus, clear, edit} = tasksSlice.actions;

export default tasksSlice.reducer;
