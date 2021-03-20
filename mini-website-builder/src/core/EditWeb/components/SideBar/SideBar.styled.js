import styled from "styled-components";
import styles from "../../../../app/styles/variables";
// console.log(styles);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  min-height: 95vh;
  background-color: ${styles.sideBarBackground};
  color: ${styles.colorWhite};
`;

export const Header = styled.h1`
  padding: 0rem 1rem;
  margin-bottom: 1rem;
`;

export const smallHeader = styled.h3``;

export const ElementsContainer = styled.div`
  display: flex;
  padding: 0rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
