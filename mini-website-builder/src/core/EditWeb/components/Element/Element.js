import React from "react";

import Label from "../AllElements/Label";

const Element = ({
  type,
  properties,
  onElementClick,
  selectElementClick,
  selectedElementId,
}) => {
  if (type === "label")
    return (
      <Label
        properties={properties[0]}
        onElementClick={onElementClick}
        selectElementClick={selectElementClick}
        selectedElementId={selectedElementId}
      />
    );
  if (type === "input") return <input />;
  if (type === "button") return <button>Button</button>;

  return null;
};

export default Element;
