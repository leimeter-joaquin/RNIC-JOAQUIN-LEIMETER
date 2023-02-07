import React, {ReactNode} from 'react';
import * as reactNative from 'react-native';
import {AvoidKeyboard, Wrapper} from './styles';

interface KeyboardAvoidingWrapperProps {
  children: ReactNode;
}

const KeyboardAvoidingWrapper = ({children}: KeyboardAvoidingWrapperProps) => {
  return (
    <Wrapper>
      <AvoidKeyboard
        behavior={reactNative.Platform.OS === 'ios' ? 'padding' : undefined}>
        {children}
      </AvoidKeyboard>
    </Wrapper>
  );
};

export default KeyboardAvoidingWrapper;
