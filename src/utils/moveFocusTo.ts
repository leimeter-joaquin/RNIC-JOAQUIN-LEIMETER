import {TextInput} from 'react-native/types';

const moveFocusTo = (targetInput: React.RefObject<TextInput>) => {
  targetInput.current?.focus();
};

export default moveFocusTo;
