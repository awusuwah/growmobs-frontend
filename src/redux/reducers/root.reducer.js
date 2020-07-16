import { combineReducers } from "redux";
import growsReducer from "./grows.reducer";
import strainsReducer from "./strains.reducer";

/**
 * Merge all the reducers into a single root reducer which will be passed to the redux store.
 */
export default combineReducers({
  grows: growsReducer,
  strains: strainsReducer,
});
