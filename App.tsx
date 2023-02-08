import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import HomeScreen from './src/components/HomeScreen';
import {myTheme} from './src/constants/theme';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 600});
  }, []);
  return (
    <ThemeProvider theme={myTheme}>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
