import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/stack';
import SafeKeyboardAvoidingWrapper from './src/components/SafeKeyboardAvoidingWrapper';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 600});
  }, []);
  return (
    <NavigationContainer>
      <ThemeProvider theme={myTheme}>
        <SafeKeyboardAvoidingWrapper>
          <StackNavigator />
        </SafeKeyboardAvoidingWrapper>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
