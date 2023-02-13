import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';
import SafeKeyboardAvoidingWrapper from './src/components/SafeKeyboardAvoidingWrapper';
import Navigation from './src/navigation';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 600});
  }, []);
  return (
    <Provider store={store}>
      {/* This was installed to change the background color of the icon container in the Material bottom tab navigation component, don't judge */}
      <PaperProvider
        theme={{
          colors: {secondaryContainer: `${myTheme.colors.buttonHighlight}`},
        }}>
        <ThemeProvider theme={myTheme}>
          <SafeKeyboardAvoidingWrapper>
            <Navigation />
          </SafeKeyboardAvoidingWrapper>
        </ThemeProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
