import styled from "styled-components";
import variabls from "../../../../app/styles/variables";

export const Container = styled.div`
  position: relative;
  width: 75%;
  min-height: 95vh;
  background-color: ${variabls.droppableContainerBackground};
`;
export const Image = styled.img`
  position: absolute;
  top: 1%;
  right: 1%;
  height: 30px;
`;
