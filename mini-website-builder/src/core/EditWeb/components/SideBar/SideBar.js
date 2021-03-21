import React, { createRef, useEffect } from "react";

import { useDispatch } from "react-redux";
import * as actionCreators from "../../../../app/redux/actions/searchBarActions";
//component imports
import AvailableElementList from "../../../../utils/AvailableElementList";
import IndividualElement from "../IndividualElement/IndividualElement";

//styling imports
import * as Styled from "./SideBar.styled";

const SideBar = (props) => {
  const dispatch = useDispatch();
  const myRef = createRef(null);
  useEffect(() => {
    dispatch(actionCreators.setSiderBarWidth(myRef.current.offsetWidth));
  }, [dispatch]);
  return (
    <Styled.Container ref={myRef}>
      <Styled.Header>Block</Styled.Header>
      <Styled.ElementsContainer>
        {AvailableElementList.map((element) => (
          <IndividualElement
            key={element.type}
            title={element.title}
            draggable={!props.isFormModalVisible}
            onDragStart={(e) => props.onDragStart({ e, type: element.type })}
            onDragEnd={props.onDragEnd}
          />
        ))}
      </Styled.ElementsContainer>
    </Styled.Container>
  );
};

export default SideBar;
