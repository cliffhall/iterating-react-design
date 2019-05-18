import React, { useState } from "react";
import { Component } from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

const StyledBootstrapDropdownToggle = styled(Dropdown.Toggle)`
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

export class KitDropdownToggle extends Component {
  render() {
    const { showMenu, alignRight, ...rest } = this.props;

    return (
      <StyledBootstrapDropdownToggle
        {...rest}
        className={showMenu ? "dropdown-toggle show" : "dropdown-toggle"}
      />
    );
  }
}

export const StyledBootstrapDropdownMenu = styled(Dropdown.Menu)``;

export class KitDropdownMenu extends Component {
  render() {
    const { showMenu, alignRight, ...rest } = this.props;
    return (
      <StyledBootstrapDropdownMenu
        {...rest}
        className={`dropdown-menu ${alignRight ? "dropdown-menu-right" : ""} ${
          showMenu ? "show" : ""
        }`}
      />
    );
  }
}

export const StyledBootstrapDropdownItem = styled(Dropdown.Item)`
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  color: ${props => props.theme.text2};

  &:hover {
    background-color: ${props => props.theme.accent1};
    text-decoration: none;
    color: ${props => props.theme.text2};
  }

  &:active {
    background-color: ${props => props.theme.foreground};
    color: ${props => props.theme.background};
  }
`;

export class KitDropdownItem extends Component {
  render() {
    const { showMenu, alignRight, onSelect, ...rest } = this.props;
    return <StyledBootstrapDropdownItem {...rest} onClick={() => onSelect()} />;
  }
}

export const StyledBootstrapDropdown = styled(Dropdown)``;

export function KitDropdown(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledBootstrapDropdown
      {...props}
      className={showMenu ? "show dropdown" : "dropdown"}
    >
      <KitDropdownToggle
        {...props}
        showMenu={showMenu}
        onClick={() => setShowMenu(!showMenu)}
      >
        {props.label}
      </KitDropdownToggle>
      <KitDropdownMenu
        {...props}
        onClick={() => setShowMenu(!showMenu)}
        showMenu={showMenu}
      >
        {props.items}
      </KitDropdownMenu>
    </StyledBootstrapDropdown>
  );
}
