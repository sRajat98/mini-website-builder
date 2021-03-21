import React from "react";

import Label from "../AllElements/Label";
import Input from "../AllElements/Input";
import Button from "../AllElements/Button";

const Element = ({
  type,
  id,
  properties,
  onElementClick,
  selectElementClick,
  selectedElementId,
  deleteElement,
}) => {
  if (type === "label")
    return (
      <Label
        properties={properties[0]}
        id={id}
        onElementClick={onElementClick}
        selectElementClick={selectElementClick}
        selectedElementId={selectedElementId}
        deleteElement={deleteElement}
      />
    );
  if (type === "input")
    return (
      <Input
        properties={properties[0]}
        id={id}
        onElementClick={onElementClick}
        selectElementClick={selectElementClick}
        selectedElementId={selectedElementId}
        deleteElement={deleteElement}
      />
    );
  if (type === "button")
    return (
      <Button
        properties={properties[0]}
        id={id}
        onElementClick={onElementClick}
        selectElementClick={selectElementClick}
        selectedElementId={selectedElementId}
        deleteElement={deleteElement}
      />
    );

  return null;
};

export default Element;
