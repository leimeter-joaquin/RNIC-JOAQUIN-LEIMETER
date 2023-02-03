import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StatusBar, Text, StyleSheet} from 'react-native';

function HomeScreen(): JSX.Element {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(raw => {
        return raw.json();
      })
      .then(response => {
        console.log(response.height);
        setData(response);
      });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
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

export default HomeScreen;
