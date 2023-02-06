// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Platform, StyleSheet} from 'react-native';
const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isAndroid ? '#F8FBF7' : '#26547C',
  },
  cardsContainer: {
    backgroundColor: isAndroid ? '#F8FBF7' : '#26547C',
    padding: 8,
    gap: 24,
  },
  form: {
    padding: 20,
    backgroundColor: '#ddfff7',
    gap: 16,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: isAndroid ? '#FFD166' : '#93E1FF',
    color: isAndroid ? '#26547C' : '#93E1FF',
    borderRadius: 5,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: isAndroid ? '#93E1D8' : '#93E1D8',
    alignSelf: 'center',
  },
  buttonText: {
    color: isAndroid ? '#26547C' : '#861657',
  },
});

export default styles;
