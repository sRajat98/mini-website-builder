import React from "react";

//component imports
import Element from "../Element/Element";
import FormModal from "../../../Form/FormModal";

//redux realted imports
import { useSelector } from "react-redux";

//styling Imports
import * as Styled from "./DroppableContainer.styled";

const DroppableContainer = (props) => {
  const {
    sideBar: {
      elements,
      draggedElementId,
      isFormModalVisible,
      properties,
      selectedElementId,
    },
  } = useSelector((state) => state);

  return (
    <>
      <Styled.Container
        onDrop={props.onDropInsideContainer}
        onDragOver={props.onDragOver}
      >
        {elements.map((element) => {
          const elementProperties = properties.filter(
            (property) => property.id === element.id
          );
          return (
            <Element
              key={element.id}
              type={element.type}
              id={element.id}
              properties={elementProperties}
              onElementClick={props.onElementClick}
              selectedElementId={selectedElementId}
              selectElementClick={props.selectElementClick}
              deleteElement={props.deleteElement}
            />
          );
        })}
        {isFormModalVisible ? (
          <FormModal id={draggedElementId}></FormModal>
        ) : null}
      </Styled.Container>
    </>
  );
};

export default DroppableContainer;
