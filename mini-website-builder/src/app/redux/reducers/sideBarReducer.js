import * as types from "../actionTypes";

const initialState = {
  elements: [],
  children: [],
  draggedElementId: null,
  properties: [
    {
      id: null,
      properties: [],
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
        if (properties) {
          state.properties[obj].id = elementId;
          state.properties[obj].properties = properties;
          return { ...state };
        } else {
          state.properties[obj].id = elementId;
          return { ...state };
        }
      } else {
        if (properties) {
          return {
            ...state,
            properties: [
              ...state.properties,
              { id: elementId, properties: properties },
            ],
          };
        } else {
          console.log("hello");
          return {
            ...state,
            id: elementId,
            properties: [
              {
                textValue: null,
                Xcood: null,
                Ycood: null,
                fontSize: null,
                fontWeight: null,
              },
            ],
          };
        }
      }
    }
    case types.DELETE_SELECTED_ELEMENT: {
      const { elementId } = action.payload;
      console.log(state.elements);
      const newState = state.elements.filter(
        (element) => element.id !== elementId
      );
      return {
        ...state,
        elements: newState,
      };
    }
    default:
      return { ...state };
  }
};

export default searchBarReducer;
