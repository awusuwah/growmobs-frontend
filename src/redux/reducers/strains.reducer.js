import {
  ADD_STRAIN,
  ADD_STRAIN_FAILURE,
  ADD_STRAIN_SUCCESS,
} from "../actions/strains.actions";

/**
 * The initial state of the reducer.
 */
const preloadedState = {
  error: null,
  isLoading: false,
  strainList: [],
};

/**
 * The `strains` reducer. It handles all the actions which relate to the list of strains.
 *
 * @param { Object } state The part of the redux store which is being controlled by this reducer.
 * @param { Object } action The action which triggered this reducer.
 */
export default (state = preloadedState, action) => {
  switch (action.type) {
    case ADD_STRAIN:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case ADD_STRAIN_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });

    case ADD_STRAIN_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isLoading: false,
        strainList: [...state.strainList, action.payload],
      });

    default:
      return state;
  }
};
