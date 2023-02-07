import {Platform, StyleSheet} from 'react-native';
const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    gap: 4,
    padding: 16,
    minHeight: 70,
    borderWidth: isAndroid ? 1 : 0,
    borderColor: isAndroid ? '#FFD166' : '#FFFCF9',
    borderRadius: 8,
  },
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
