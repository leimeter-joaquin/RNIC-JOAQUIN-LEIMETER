import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  useColorScheme,
  Text,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [data, setData] = useState<any>([]);

  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(raw => {
      return raw.json();
    })
    .then(response => {
      console.log(response);
      setData(response);
    });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text style={styles.greetings}>Hello</Text>
      </View>

      <View>
        <Text style={styles.greetings}>{JSON.stringify(data)}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  greetings: {
    fontSize: 30,
    color: '#59c3dd',
  },
});

export default App;
