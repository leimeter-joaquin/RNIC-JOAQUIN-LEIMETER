import styled from 'styled-components/native';

export const CardWrapper = styled.View<{done: boolean}>`
  position: relative;
  background-color: ${({theme}) => theme.colors.primary50};
  opacity: ${({done}) => (done ? 0.2 : 1)};
  margin: 10px 0;
  padding: 10px;
  flex-direction: row;
  min-height: 90px;
  border-radius: 4px;
`;

export const TaskImage = styled.Image`
  align-self: center;
  margin: 0 10px 0 0;
  min-height: 50px;
  width: 50px;
`;

export const TitleTaskContainer = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  /* font-family: ; */
  font-weight: 700;
  color: ${({theme}) => theme.colors.background};
`;

export const ControlsContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
  gap: 14px;
  margin: 0 0 0 10px;
`;

export const ControlButton = styled.TouchableHighlight`
  background-color: ${({theme}) => theme.colors.accent200};
  padding: 4px 12px;
  border-radius: 4px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 3px;
  right: 3px;
`;
