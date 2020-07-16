import {
  ADD_GROW,
  ADD_GROW_FAILURE,
  ADD_GROW_SUCCESS,
} from "../actions/grows.actions";

/**
 * The initial state of the reducer.
 */
const preloadedState = {
  error: null,
  isLoading: false,
  growList: [],
};

/**
 * The `grows` reducer. It handles all the actions which relate to the list of grows.
 *
 * @param { Object } state The part of the redux store which is being controlled by this reducer.
 * @param { Object } action The action which triggered this reducer.
 */
export default (state = preloadedState, action) => {
  switch (action.type) {
    case ADD_GROW:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case ADD_GROW_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });

    case ADD_GROW_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isLoading: false,
        growList: [...state.growList, action.payload],
      });

    default:
      return state;
  }
};
