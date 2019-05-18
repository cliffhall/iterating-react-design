import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const StyledBootstrapButton = styled(Button)`
  &&& {
    color: ${props =>
      props.disabled ? props.theme.text2 : props.theme.background};
    background-color: ${props => props.theme.accent1};
    border-color: ${props => props.theme.accent2};
    background-image: linear-gradient(
      to bottom,
      #fff,
      ${props => props.theme.accent1}
    );
    font-family: "Alegreya Sans SC", sans-serif;
  }

  &&&&&:hover {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    border-color: ${props =>
      props.disabled ? undefined : props.theme.foreground};
    color: ${props =>
      props.disabled ? props.theme.text2 : props.theme.background};
  }

  &&&&&:active {
    background-image: ${props => (props.disabled ? undefined : "unset")};
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
    border-color: ${props => props.theme.accent1};
    background-color: ${props => props.theme.accent1};
    color: ${props =>
      props.disabled ? props.theme.text2 : props.theme.background};
  }
  &&&&:focus {
    outline: 0;
    box-shadow: none;
  }
`;

export class KitButton extends Component {
  render() {
    const { ...props } = this.props;
    return <StyledBootstrapButton {...props} />;
  }
}

const StyledBootstrapToggleButton = styled(ToggleButton)`
  &&& {
    color: ${props =>
      props.disabled ? props.theme.text1 : props.theme.background};
    background-color: ${props => props.theme.accent1};
    border-color: ${props => props.theme.accent2};
    background-image: linear-gradient(
      to bottom,
      #fff,
      ${props => props.theme.accent1}
    );
    font-family: "Alegreya Sans SC", sans-serif;
  }
`;

export class KitToggleButton extends Component {
  render() {
    const { ...props } = this.props;
    return <StyledBootstrapToggleButton {...props} />;
  }
}

export const KitToggleButtonGroup = styled(ToggleButtonGroup)`
  &&&& :active {
    background-image: unset;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
    border-color: ${props => props.theme.accent2};
    background-color: ${props => props.theme.accent1};
    color: ${props =>
      props.disabled ? props.theme.text2 : props.theme.background};
  }

  &&&& .active {
    background-image: unset;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
    border-color: ${props => props.theme.accent2};
    background-color: ${props => props.theme.accent1};
    color: ${props =>
      props.disabled ? props.theme.text2 : props.theme.background};
  }

  &&&& :focus {
    outline: 0;
    background-image: unset;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.75);
    border-color: ${props => props.theme.accent2};
    background-color: ${props => props.theme.accent1};
    color: ${props =>
      props.disabled ? props.theme.text2 : props.theme.background};
  }

  &&& :hover {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    border-color: ${props => props.theme.accent3};
    color: ${props =>
      props.disabled ? props.theme.text2 : props.theme.background};
  }
`;
