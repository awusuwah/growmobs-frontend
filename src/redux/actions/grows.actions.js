export const ADD_GROW = "@@grow/add/pending";
export const ADD_GROW_FAILURE = "@@grow/add/failure";
export const ADD_GROW_SUCCESS = "@@grow/add/success";

/**
 * Add a new grow to the list of grows.
 *
 * @param { Object } grow The new grow which will be added.
 */
export const addGrow = (grow) => ({
  type: ADD_GROW,
  payload: grow,
});

/**
 * An error occured while adding the new grow to the database.
 *
 * @param { Object } error The error which got returned from the service.
 */
export const addGrowFailure = (error) => ({
  type: ADD_GROW_FAILURE,
  payload: error,
});

/**
 * Successfully added the new grow to the database.
 *
 * @param { Object } grow THe new grow which has just been added to the database.
 */
export const addGrowSuccess = (grow) => ({
  type: ADD_GROW_SUCCESS,
  payload: grow,
});
