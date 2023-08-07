import {styled} from "styled-components";
import {font} from "../../styles/Comman";

const Header = styled.header`
  ${font({Fmax: 30, Fmin: 20})}
  background-color: #0F1624;
  padding: 44px 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`
export const S = {
    Header
};