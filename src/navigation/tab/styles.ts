import Plus from '../../assets/icons/Plus';
import List from '../../assets/icons/List';
import styled from 'styled-components/native';

export const ListIcon = styled(List)<{color: string}>`
  color: ${({color}) => color};
`;

export const PlusIcon = styled(Plus)<{color: string}>`
  color: ${({color}) => color};
  margin: auto;
`;
