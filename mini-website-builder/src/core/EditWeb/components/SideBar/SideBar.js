import React from "react";

//component imports
import AvailableElementList from "../../../../utils/AvailableElementList";
import IndividualElement from "../IndividualElement/IndividualElement";

//styling imports
import * as Styled from "./SideBar.styled";

const SideBar = (props) => {
  return (
    <Styled.Container>
      <Styled.Header>Block</Styled.Header>
      <Styled.ElementsContainer>
        {AvailableElementList.map((element) => (
          <IndividualElement
            key={element.type}
            title={element.title}
            draggable={!props.isFormModalVisible}
            onDragStart={(e) => props.onDragStart({ e, type: element.type })}
          />
        ))}
      </Styled.ElementsContainer>
    </Styled.Container>
  );
};

export default SideBar;
