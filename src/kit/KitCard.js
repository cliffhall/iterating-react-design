import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const StyledBootstrapCard = styled(Card)`
  background-color: ${props => props.theme.accent1};
  color: ${props => props.theme.text2};
  box-shadow: 0 0 1px 2px #fdb813, 0 0 3px 4px #f8986d;
  border-radius: 7px 25px;
  border-color: ${props => props.theme.accent3};
  border-style: solid;
  border-width: 1px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 20px;
`;

export class KitCard extends Component {
  render() {
    const { ...props } = this.props;
    return <StyledBootstrapCard {...props} />;
  }
}

const StyledBootstrapCardSubtitle = styled(Card.Subtitle)`
  border-bottom: dotted 1px;
  border-color: ${props => props.theme.accent3};
  margin-bottom: 10px;
`;

export class KitCardSubtitle extends Component {
  render() {
    const { ...props } = this.props;
    return <StyledBootstrapCardSubtitle {...props} />;
  }
}

export const KitCardBody = styled(Card.Body)``;
export const KitCardTitle = styled(Card.Title)``;
export const KitCardFooter = styled(Card.Footer)``;
