import styled from 'styled-components/native';

// TODO: Fix a TS issue in the implementation of this FletList.
export const CardList = styled.FlatList`
  background-color: ${({theme}) => theme.colors.background};
  padding: 12px;
`;
