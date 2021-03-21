import React from "react";

import * as Styled from "./AllElements.styled";

const Label = (props) => {
  // const id = props.properties ? props.properties.id : undefined;
  const isSelected = props.selectedElementId
    ? props.selectedElementId === props.id
    : null;

  return (
    <Styled.Label
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
          : "Label"
        : "Label"}
    </Styled.Label>
  );
};

export default Label;
