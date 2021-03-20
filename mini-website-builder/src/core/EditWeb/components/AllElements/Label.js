import React, { useEffect, useState } from "react";

import * as Styled from "./AllElements.styled";

const Label = (props) => {
  // const [id, setId] = useState(null);
  const id = props.properties ? props.properties.id : null;

  return (
    <Styled.Label
      properties={props.properties}
      onClick={() =>
        props.selectedElementId === id
          ? props.onElementClick(props.properties ? props.properties.id : null)
          : props.selectElementClick(
              props.properties ? props.properties.id : null
            )
      }
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
