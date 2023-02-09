import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof myTheme.colors;
  }
}

export const myTheme = {
  colors: {
    background: '#00241B',
    primary50: '#fdd7e0',
    primary100: '#faa4b8',
    pimary200: '#f87f9b',
    primary300: '#F76F8E',
    accent100: '#d3fefa',
    accent200: '#58FCEC',
    accent300: '#04ddc8',
    black: '#000',
    white: '#FFF',
  },
};
