import React from "react";

//styling imports
import * as Styled from "./IndividualElement.styled";

const IndividualElement = ({ title, ...props }) => {
  return (
    <Styled.StyledIndividualElement {...props}>
      {title}
    </Styled.StyledIndividualElement>
  );
};

export default IndividualElement;
