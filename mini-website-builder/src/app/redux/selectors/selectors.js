import { createSelector } from "reselect";

export const getElementPropertiedById = createSelector(
  (store) => store.sideBar.properties,
  (store) => store.sideBar.draggedElementId,
  (properties, selected) =>
    properties.find((property) => property.id === selected)
);
