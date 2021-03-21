import React, { useEffect, useCallback } from "react";
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
  const {
    sideBar: { isFormModalVisible, selectedElementId },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedElementId]);

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const onKeydown = (e) => {
    if (e.keyCode === 46) {
      if (selectedElementId)
        dispatch(actionCreators.deleteElement(selectedElementId));
    } else if (e.keyCode === 13) {
      if (selectedElementId) {
        dispatch(actionCreators.setFormModalVisiblity());
      }
    }
  };

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

  const deleteElement = (event, id) => {
    // dispatch(actionCreators.deleteElement(id));
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

  const onDragEnd = (e) => {
    e.preventDefault();
    const coods = {
      Xcood: e.pageX,
      Ycood: e.pageY,
    };
    dispatch(actionCreators.setInitialCoods(coods.Xcood, coods.Ycood));
  };

  return (
    <Styled.Container>
      <SideBar
        onDragStart={onDragStart}
        isFormModalVisible={isFormModalVisible}
        onDragEnd={onDragEnd}
      />
      <DroppableContainer
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDropInsideContainer={onDropInsideContainer}
        onDrop={onDrop}
        onElementClick={onElementClick}
        selectElementClick={selectElementClick}
        deleteElement={deleteElement}
      />
    </Styled.Container>
  );
};

export default EditWeb;
