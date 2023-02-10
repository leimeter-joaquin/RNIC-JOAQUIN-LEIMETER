import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';
import SafeKeyboardAvoidingWrapper from './src/components/SafeKeyboardAvoidingWrapper';
import Navigation from './src/navigation';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 600});
  }, []);
  return (
    <ThemeProvider theme={myTheme}>
      <SafeKeyboardAvoidingWrapper>
        <Navigation />
      </SafeKeyboardAvoidingWrapper>
    </ThemeProvider>
  );
};

export default App;
