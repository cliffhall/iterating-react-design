import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

export const KitList = styled(ListGroup)`
  background-color: ${props => props.theme.accent1};
  color: ${props => props.theme.text2};
  border-color: ${props => props.theme.accent3};
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
`;

export const KitListItem = styled(ListGroup.Item)``;
