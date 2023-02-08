import {Platform, StyleSheet} from 'react-native';
const isAndroid = Platform.OS === 'android';

import styled from 'styled-components/native';

export const CardWrapper = styled.TouchableOpacity<{done: boolean}>`
  background-color: ${({done}) => (done ? 'red' : 'green')};
  margin: 10px 0;
  padding: 10px;
  flex-direction: row;
`;

export const TitleTaskContainer = styled.View`
  background-color: red;
`;

const styles = StyleSheet.create({
  cardContainerShadowProps: {
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: isAndroid ? '#26547C' : '#26547C',
  },
  description: {
    color: isAndroid ? '#26547C' : '#26547C',
  },
  done: {
    opacity: 0.2,
  },
});

export default styles;
