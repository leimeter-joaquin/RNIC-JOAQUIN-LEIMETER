// import styled from 'styled-components/native';
import styled from 'styled-components/native';
import Plus from '../../assets/icons/Plus';

export const FormContainer = styled.View`
  padding: 20px;
  gap: 16px;
  background-color: ${({theme}) => theme.colors.accent100};
  border-radius: 4px;
`;

export const FormInput = styled.TextInput`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.inputBackground};
  color: ${({theme}) => theme.colors.background};
  border: 1px;
  border-color: ${({theme}) => theme.colors.cardBackground};
`;

export const FormButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.accent100};
  align-self: center;
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

export const FormButtonText = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: ${({theme}) => theme.colors.background};
`;

export const PlusIcon = styled(Plus)`
  color: ${({theme}) => theme.colors.background};
`;
