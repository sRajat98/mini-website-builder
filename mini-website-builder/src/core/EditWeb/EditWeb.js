import React, { createElement, useCallback } from "react";
//redux related imports
import { useDispatch, useSelector } from "react-redux";
//component imports
import SideBar from "./components/SideBar/SideBar";
import DroppableContainer from "./components/DroppableContainer/DroppableContainer";
//import actions
import * as actionCreators from "../../app/redux/actions/searchBarActions";

import { v4 as uuidv4 } from "uuid";
//stylingImports
import * as Styled from "./EditWeb.styles";

const EditWeb = () => {
  const dispatch = useDispatch();
  const onDragStart = useCallback(({ e, type, id, sourceID }) => {
    e.stopPropagation();
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("id", uuidv4());
  }, []);

  const onDragOver = (e) => e.preventDefault();

  const onDropInsideContainer = (e) => {
    //all event methods
    e.stopPropagation();
    const type = e.dataTransfer.getData("type");
    const id = e.dataTransfer.getData("id");
    const element = { type: type, id: id };
    if (type && id) {
      dispatch(actionCreators.setFormModalVisiblity());
      dispatch(actionCreators.addNewElement(element));
    }
  };

  const selectElementClick = (id) => {
    dispatch(actionCreators.setSeledctedElementId(id));
  };
  const onElementClick = (id) => {
    dispatch(actionCreators.setFormModalVisiblity(id));
  };

  const onDrop = useCallback(
    (containerId) => (e) => {
      e.stopPropagation();

      const type = e.dataTransfer.getData("type");
      const elementId = e.dataTransfer.getData("id");
      const fromContainerId = e.dataTransfer.getData("sourceID");

      // if (!elementId) {
      //   const element = createElement(type);
      //   dispatch(actionCreators.addElementAsChild(element, containerId));
      // } else if (fromContainerId === "container" && containerId !== elementId) {
      //   dispatch(actionCreators.addChild(containerId, elementId));
      // } else if (fromContainerId !== containerId && containerId !== elementId) {
      //   dispatch(
      //     actionCreators.moveChild(fromContainerId, containerId, elementId)
      //   );
      // }
    },
    []
  );

  return (
    <Styled.Container>
      <SideBar onDragStart={onDragStart} />
      <DroppableContainer
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDropInsideContainer={onDropInsideContainer}
        onDrop={onDrop}
        onElementClick={onElementClick}
        selectElementClick={selectElementClick}
      />
    </Styled.Container>
  );
};

export default EditWeb;
