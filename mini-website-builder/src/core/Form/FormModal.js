import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../../app/redux/actions/searchBarActions";
import * as Styled from "./FormModal.styled";
import { getElementPropertiedById } from "../../app/redux/selectors/selectors";

import closeIcon from "../../app/images/close.png";

const FormModal = ({ id }) => {
  const dispatch = useDispatch();
  const elementProperties = useSelector(getElementPropertiedById);
  const [state, setState] = useState({
    textValue: null,
    Xcood: null,
    Ycood: null,
    fontSize: null,
    fontWeight: null,
  });

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    elementProperties ? setState({ ...elementProperties.properties }) : null;
    dispatch(actionCreators.setSeledctedElementId(null));
  }, [dispatch, elementProperties]);

  const onChange = (value) => {
    setState({ ...state, ...value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(actionCreators.updateElementProperties(id, state));
    dispatch(actionCreators.setFormModalVisiblity());
    dispatch(actionCreators.setSeledctedElementId(null));
  };

  const formCloseHandler = () => {
    dispatch(actionCreators.updateElementProperties(id, null));
    dispatch(actionCreators.setFormModalVisiblity());
    dispatch(actionCreators.setSeledctedElementId(null));
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
            value={state.textValue}
          />
        </Styled.Label>
        <Styled.Label>
          <div>X</div>{" "}
          <Styled.Input
            type="number"
            onChange={(e) => onChange({ Xcood: e.currentTarget.value })}
            value={state.Xcood}
          />
        </Styled.Label>
        <Styled.Label>
          <div>Y</div>{" "}
          <Styled.Input
            type="number"
            onChange={(e) => onChange({ Ycood: e.currentTarget.value })}
            value={state.Ycood}
          />
        </Styled.Label>
        <Styled.Label>
          <div>Font Size</div>{" "}
          <Styled.Input
            type="text"
            onChange={(e) => onChange({ fontSize: e.currentTarget.value })}
            value={state.fontSize}
          />
        </Styled.Label>
        <Styled.Label>
          <div>Font Weight</div>{" "}
          <Styled.Input
            type="text"
            onChange={(e) => onChange({ fontWeight: e.currentTarget.value })}
            value={state.fontWeight}
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
