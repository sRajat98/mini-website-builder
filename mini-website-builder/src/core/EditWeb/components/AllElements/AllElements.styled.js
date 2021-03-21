import styled from "styled-components";
import variables from "../../../../app/styles/variables";

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
  border: ${(props) => (props.isSelected ? "1px solid red" : "none")};
`;

export const Input = styled.input`
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
  border: ${(props) => (props.isSelected ? "1px solid red" : "none")};
  padding: 1rem;
`;

export const Button = styled.button`
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
  border: ${(props) => (props.isSelected ? "1px solid red" : "none")};
  padding: 1rem 2rem;
  background-color: ${variables.colorBlue};
  color: ${variables.colorWhite};
`;
