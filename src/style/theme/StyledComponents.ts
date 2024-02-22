import styled from 'styled-components';

import { Colors } from '.';

interface Header {
    backgroundColor?: string,
    height ?: number,

}

export const Header = styled.header<Header>`
  background-color: ${(props: any) => (props.backgroundColor ? props.backgroundColor : Colors?.brandSecondaryBackgroundColor)};
  height : ${(props: any) => (props.height ? `${props.height}px` : '20px')}
  `;