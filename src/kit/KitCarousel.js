import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const KitCarousel = styled(Carousel)`
  border-color: ${props => props.theme.accent3};
  border-style: solid;
  border-width: 1px;
`;

export const KitCarouselItem = styled(Carousel.Item)``;
