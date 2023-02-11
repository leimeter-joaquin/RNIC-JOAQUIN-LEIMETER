import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof myTheme.colors;
  }
}

export const myTheme = {
  colors: {
    background: '#25232A',
    cardBackground: '#1C1B1F',
    navigationBackground: '#2a2831',
    inputBackground: '#49454F',
    accent100: '#D0BCFF',
    accent900: '#381E72',
    buttonHighlight: '#4A4458',
    navigationIconStroke: '#E8DEF8',
    primaryText: '#E6E1E5',
    secondaryText: '#CAC4D0',
    black: '#000',
    white: '#FFF',
    transparent: 'transparent',
  },
};
