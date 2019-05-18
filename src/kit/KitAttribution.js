import styled from "styled-components";

export const KitAttribution = styled.div`
  text-align: center;
  background-color: ${props => props.theme.accent1};
  color: ${props => props.theme.text2};
  border-radius: 7px 25px;
  border-color: ${props => props.theme.accent3};
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 0 1px 2px #fdb813, 0 0 3px 4px #f8986d;
  font-family: "Alegreya Sans SC", sans-serif;
  padding: 5px;

  > a {
    color: ${props => props.theme.text2};
    font-family: "Nunito", sans-serif;
  }
  > a:hover {
    color: ${props => props.theme.background};
    text-decoration-color: ${props => props.theme.accent3};
  }
`;
