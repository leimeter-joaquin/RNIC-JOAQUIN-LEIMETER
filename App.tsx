import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import HomeScreen from './src/components/HomeScreen';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 600});
  }, []);
  return <HomeScreen />;
};

export default App;
