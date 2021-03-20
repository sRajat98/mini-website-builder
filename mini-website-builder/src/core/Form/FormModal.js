import React, { useState } from "react";

import { useDispatch } from "react-redux";
import * as actionCreators from "../../app/redux/actions/searchBarActions";
import * as Styled from "./FormModal.styled";

import closeIcon from "../../app/images/close.png";

const FormModal = ({ id }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    textValue: null,
    Xcood: null,
    Ycood: null,
    fontSize: null,
    fontWeight: null,
  });

  const onChange = (value) => {
    setState({ ...state, ...value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(actionCreators.updateElementProperties(id, state));
    dispatch(actionCreators.setFormModalVisiblity());
  };

  const formCloseHandler = () => {
    dispatch(actionCreators.updateElementProperties(id, state));
    dispatch(actionCreators.setFormModalVisiblity());
  };

  return (
    <Styled.Container>
      <Styled.Form>
        <Styled.Title>Edit label</Styled.Title>
        <Styled.Label>
          <div>Text</div>{" "}
          <Styled.Input
            onChange={(e) => onChange({ textValue: e.currentTarget.value })}
            type="text"
          />
        </Styled.Label>
        <Styled.Label>
          <div>X</div>{" "}
          <Styled.Input
            type="number"
            onChange={(e) => onChange({ Xcood: e.currentTarget.value })}
          />
        </Styled.Label>
        <Styled.Label>
          <div>Y</div>{" "}
          <Styled.Input
            type="number"
            onChange={(e) => onChange({ Ycood: e.currentTarget.value })}
          />
        </Styled.Label>
        <Styled.Label>
          <div>Font Size</div>{" "}
          <Styled.Input
            type="text"
            onChange={(e) => onChange({ fontSize: e.currentTarget.value })}
          />
        </Styled.Label>
        <Styled.Label>
          <div>Font Weight</div>{" "}
          <Styled.Input
            type="text"
            onChange={(e) => onChange({ fontWeight: e.currentTarget.value })}
          />
        </Styled.Label>
        <Styled.Button onClick={onSubmitHandler}>Save</Styled.Button>
      </Styled.Form>
      <Styled.CloseButton onClick={formCloseHandler}>
        <img src={closeIcon} alt="close" />
      </Styled.CloseButton>
    </Styled.Container>
  );
};

export default FormModal;
