import * as types from "../actionTypes";

export const addNewElement = (element) => ({
  type: types.ADD_ITEM,
  payload: {
    element,
  },
});

export const moveChildToContainer = (sourceID, id) => ({
  type: types.MOVE_CHILD_TO_CONTAINER,
  payload: {
    sourceID,
    id,
  },
});

export const addElementAsChild = (element, containerId) => ({
  type: types.ADD_ELEMENT_AS_CHILD,
  payload: {
    element,
    containerId,
  },
});

export const setFormModalVisiblity = (id) => ({
  type: types.SET_FORM_M0DAL_VISIBILITY,
  payload: { elementId: id },
});

export const setSeledctedElementId = (id) => ({
  type: types.SET_SELECTED_ELEMENT_ID,
  payload: {
    elementId: id,
  },
});

export const updateElementProperties = (id, properties) => ({
  type: types.UPDATE_ELEMENT_PROPERTIES,
  payload: {
    elementId: id,
    properties: properties,
  },
});

export const deleteElement = (id) => ({
  type: types.DELETE_SELECTED_ELEMENT,
  payload: {
    elementId: id,
  },
});

export const setSiderBarWidth = (width) => ({
  type: types.SET_SIDEBAR_WIDTH,
  payload: {
    sideBarWidth: width,
  },
});

export const setInitialCoods = (Xcood, Ycood) => ({
  type: types.SET_INITIAL_COODS,
  payload: {
    Xcood: Xcood,
    Ycood: Ycood,
  },
});

export const setAllState = (state) => ({
  type: types.SET_STATE_FROM_LOCAL_STORAGE,
  payload: {
    localState: state,
  },
});

export const resetAllData = () => ({
  type: types.RESET_ALL_DATA,
});
