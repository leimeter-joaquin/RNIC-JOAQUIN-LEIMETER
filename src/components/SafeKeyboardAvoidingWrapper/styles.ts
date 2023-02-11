import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const AvoidKeyboard = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.transparent};
`;
