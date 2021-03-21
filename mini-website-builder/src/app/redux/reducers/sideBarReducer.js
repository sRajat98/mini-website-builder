import * as types from "../actionTypes";

const initialState = {
  elements: [],
  draggedElementId: null,
  properties: [
    {
      id: null,
      properties: [],
    },
  ],
  sideBarWidth: null,
  initialX: null,
  initialY: null,
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
        draggedElementId: elementId ? elementId : state.draggedElementId,
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
        }
      }
      return { ...state };
    }
    case types.DELETE_SELECTED_ELEMENT: {
      const { elementId } = action.payload;

      const newState = state.elements.filter(
        (element) => element.id !== elementId
      );
      return {
        ...state,
        elements: newState,
      };
    }
    case types.SET_SIDEBAR_WIDTH: {
      const { sideBarWidth } = action.payload;
      return {
        ...state,
        sideBarWidth: sideBarWidth,
      };
    }
    case types.SET_INITIAL_COODS: {
      const { Xcood, Ycood } = action.payload;
      const finalXcoods = Xcood - (state.sideBarWidth + 20);
      return {
        ...state,
        initialX: finalXcoods > 0 ? finalXcoods : 0,
        initialY: Ycood - 23,
      };
    }
    case types.RESET_ALL_DATA: {
      return {
        elements: [],
        draggedElementId: null,
        properties: [
          {
            id: null,
            properties: [],
          },
        ],
        sideBarWidth: null,
        initialX: null,
        initialY: null,
        selectedElementId: null,
        isFormModalVisible: false,
      };
    }
    default:
      return { ...state };
  }
};

export default searchBarReducer;
