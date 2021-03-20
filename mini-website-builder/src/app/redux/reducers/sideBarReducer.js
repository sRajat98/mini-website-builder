import * as types from "../actionTypes";

const initialState = {
  elements: [],
  children: [],
  draggedElementId: null,
  properties: [
    {
      id: null,
      properties: null,
    },
  ],
  selectedElementId: null,
  isFormModalVisible: false,
};

const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM: {
      const { element } = action.payload;
      return {
        ...state,
        elements: [...state.elements, element],
        children: [...state.children, element.id],
        draggedElementId: element.id,
      };
    }
    case types.SET_FORM_M0DAL_VISIBILITY:
      const { elementId } = action.payload;
      return {
        ...state,
        isFormModalVisible: !state.isFormModalVisible,
        draggedElementId: elementId ? elementId : state.draggedElementId,
      };
    case types.SET_SELECTED_ELEMENT_ID: {
      const { elementId } = action.payload;
      return {
        ...state,
        selectedElementId: elementId,
      };
    }
    case types.UPDATE_ELEMENT_PROPERTIES: {
      const { elementId, properties } = action.payload;
      let obj = state.properties.findIndex((el) => el.id === elementId);
      if (obj !== -1) {
        state.properties[obj].id = elementId;
        state.properties[obj].properties = properties;
        return { ...state };
      } else {
        return {
          ...state,
          properties: [
            ...state.properties,
            { id: elementId, properties: properties },
          ],
        };
      }
    }
    default:
      return { ...state };
  }
};

export default searchBarReducer;
