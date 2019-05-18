import React, { Component } from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";

const StyledBootstrapNavbar = styled(Navbar)`
  background-color: ${props => props.theme.background};
  box-shadow: 0 0 1px 2px #fdb813, 0 0 3px 4px #f8986d;
  display: flex;
  flex-direction: horizontal;
  justify-content: space-between;
  font-family: "Nunito", sans-serif;
`;

export class KitNavbar extends Component {
  render() {
    const { ...props } = this.props;
    return <StyledBootstrapNavbar fixed="top" {...props} />;
  }
}

export const KitNavbarBrand = styled(Navbar.Brand)`
  &&& {
    display: flex;
    flex-direction: horizontal;
    justify-content: space-between;
    color: ${props => props.theme.foreground};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
    font-family: "Orbitron", sans-serif;
    font-size: 20px;
    padding-left: 10px;
  }
`;

export const KitLogo = styled.div`
  margin-top: 8px;
  margin-right: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ffff00;
  box-shadow: 0 0 10px 5px #fdb813, 0 0 15px 20px #f8986d;
`;
