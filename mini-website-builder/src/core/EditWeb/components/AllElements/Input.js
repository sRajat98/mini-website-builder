import React from "react";

import * as Styled from "./AllElements.styled";

const Input = (props) => {
  // const id = props.properties ? props.properties.id : undefined;
  const isSelected = props.selectedElementId
    ? props.selectedElementId === props.id
    : null;

  return (
    <Styled.Input
      properties={props.properties}
      isSelected={isSelected}
      onClick={() =>
        props.selectedElementId === props.id
          ? props.onElementClick(props.id)
          : props.selectElementClick(props.id)
      }
      onKeyDown={props.deleteElement}
      value={
        props.properties
          ? props.properties.properties.textValue
            ? props.properties.properties.textValue
            : ""
          : ""
      }
    />
  );
};

export default Input;
