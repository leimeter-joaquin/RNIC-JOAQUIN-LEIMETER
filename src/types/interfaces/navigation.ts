export enum Routes {
  TAB_NAVIGATOR = 'TAB_NAVIGATOR',
  EDIT_TASK = 'EDIT_TASK',
  TASK_LIST = 'TASK_LIST',
  ADD_TASK = 'ADD_TASK',
}

export type ScreensParamsList = {
  [Routes.TAB_NAVIGATOR]: undefined;
  [Routes.EDIT_TASK]: {
    id: string;
  };
  [Routes.TASK_LIST]: undefined;
  [Routes.ADD_TASK]: undefined;
};
