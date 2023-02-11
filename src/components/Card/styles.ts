import styled from 'styled-components/native';

export const CardWrapper = styled.View<{done: boolean}>`
  margin: 8px;
  position: relative;
  background-color: ${({theme}) => theme.colors.accent100};
  opacity: ${({done}) => (done ? 0.2 : 1)};
  border-radius: 12px;
`;

export const TaskImage = styled.Image`
  height: 50px;
  width: 50px;
`;

export const TitleTaskContainer = styled.View``;

export const TitleText = styled.Text`
  font-family: 'Lato-Bold';
  color: ${({theme}) => theme.colors.background};
`;

export const DescriptionText = styled.Text`
  font-family: 'Lato-Regular';
  color: ${({theme}) => theme.colors.background};
`;

export const ControlsContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
  gap: 14px;
  margin: 0 0 0 10px;
`;

export const ControlButton = styled.TouchableHighlight`
  background-color: ${({theme}) => theme.colors.buttonHighlight};
  padding: 4px 12px;
  border-radius: 4px;
`;
