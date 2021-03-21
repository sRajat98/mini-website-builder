import React from "react";

import * as Styled from "./AllElements.styled";

const Button = (props) => {
  const isSelected = props.selectedElementId
    ? props.selectedElementId === props.id
    : null;

  return (
    <Styled.Button
      properties={props.properties}
      isSelected={isSelected}
      onClick={() =>
        props.selectedElementId === props.id
          ? props.onElementClick(props.id)
          : props.selectElementClick(props.id)
      }
      onKeyDown={props.deleteElement}
    >
      {props.properties
        ? props.properties.properties.textValue
          ? props.properties.properties.textValue
          : "Button"
        : "Button"}
    </Styled.Button>
  );
};

export default Button;
