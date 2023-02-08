import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof myTheme.colors;
  }
}

export const myTheme = {
  colors: {
    background: '#00241B',
    primary: '#F76F8E',
    accent: '#58FCEC',
    black: '#000',
    white: '#FFF',
  },
};
