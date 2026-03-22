import type { RootState } from "../redux/store";

export const loadState = () => {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};

export const saveState = (state: RootState) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};
