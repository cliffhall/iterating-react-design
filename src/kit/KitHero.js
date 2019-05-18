import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";

export const KitHero = styled(Jumbotron)`
  background-color: ${props => props.theme.accent1};
  color: ${props => props.theme.text2};
  border-radius: 7px 25px;
  border-color: ${props => props.theme.accent3};
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 0 1px 2px #fdb813, 0 0 3px 4px #f8986d;
  font-family: "Nunito", sans-serif;
  margin-bottom: 20px;
`;
