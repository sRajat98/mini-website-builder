import styled from "styled-components";

export const Label = styled.label`
  position: ${(props) =>
    `${
      props.properties
        ? props.properties.properties.Xcood || props.properties.properties.Ycood
          ? "absolute"
          : "relative"
        : null
    }`};
  left: ${(props) =>
    `${props.properties ? `${props.properties.properties.Xcood}px` : null}`};
  top: ${(props) =>
    `${props.properties ? `${props.properties.properties.Ycood}px` : null}`};
  font-size: ${(props) =>
    `${props.properties ? `${props.properties.properties.fontSize}px` : null}`};
  font-weight: ${(props) =>
    `${props.properties ? `${props.properties.properties.fontWeight}` : null}`};
  padding: 1rem;
`;
