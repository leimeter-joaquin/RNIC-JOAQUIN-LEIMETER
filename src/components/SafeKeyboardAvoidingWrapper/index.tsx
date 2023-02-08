import React, {ReactNode} from 'react';
import {Platform} from 'react-native';
import {AvoidKeyboard, Wrapper} from './styles';

interface SafeKeyboardAvoidingWrapperProps {
  children: ReactNode;
}

const SafeKeyboardAvoidingWrapper = ({
  children,
}: SafeKeyboardAvoidingWrapperProps) => {
  return (
    <Wrapper>
      <AvoidKeyboard behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {children}
      </AvoidKeyboard>
    </Wrapper>
  );
};

export default SafeKeyboardAvoidingWrapper;
