import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';
import SafeKeyboardAvoidingWrapper from './src/components/SafeKeyboardAvoidingWrapper';
import Navigation from './src/navigation';
import {store} from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 600});
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        <SafeKeyboardAvoidingWrapper>
          <Navigation />
        </SafeKeyboardAvoidingWrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
