import styled from "styled-components";
import variables from "../../app/styles/variables";

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${variables.background_color_black_form};
`;

export const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -5%);
  width: 40%;
  height: 90%;
  border-radius: 8px;
  background-color: ${variables.colorWhite};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  color: ${variables.colorTitle};
`;

export const Label = styled.label`
  width: 100%;
  color: ${variables.colorBlack};
  font-size: 1rem;
  line-height: 1.5rem;
`;
export const Input = styled.input`
  width: 70%;
  padding: 0.5rem;
  border: 1px solid ${variables.background_color_black_form};
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 0.8rem 1.3rem;
  width: 40%;
  border: none;
  background-color: ${variables.colorBlue};
  color: ${variables.colorWhite};
  font-size: 0.8rem;
  border-radius: 4px;
`;

export const CloseButton = styled.p`
  font-size: 1rem;
  position: absolute;
  left: 67%;
  top: 6%;
`;
