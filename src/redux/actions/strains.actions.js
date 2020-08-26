export const ADD_STRAIN = "@@strain/add/pending";
export const ADD_STRAIN_FAILURE = "@@strain/add/failure";
export const ADD_STRAIN_SUCCESS = "@@strain/add/success";
export const FETCH_ALL_STRAINS = "@@strain/fetch-all/pending";
export const FETCH_ALL_STRAINS_FAILURE = "@@strain/fetch-all/failure";
export const FETCH_ALL_STRAINS_SUCCESS = "@@strain/fetch-all/success";

/**
 * Add a new strain to the list of strains.
 *
 * @param { Object } strain The new strain which will be added.
 */
export const addStrain = (strain) => ({
  type: ADD_STRAIN,
  payload: strain,
});

/**
 * An error occured while adding a new strain to the database.
 *
 * @param { Object } error The error which got returned from the service.
 */
export const addStrainFailure = (error) => ({
  type: ADD_STRAIN_FAILURE,
  payload: error,
});

/**
 * Successfully added a new strain to the database.
 *
 * @param { Object } strain The new strain which has just been added to the database.
 */
export const addStrainSuccess = (strain) => ({
  type: ADD_STRAIN_SUCCESS,
  payload: strain,
});

/**
 * Fetch all the strains from the database.
 */
export const fetchAllStrains = () => ({
  type: FETCH_ALL_STRAINS,
});

/**
 * An error occured while fetching all the strains from the database.
 *
 * @param { Object } error The error which got returned from the service.
 */
export const fetchAllStrainsFailure = (error) => ({
  type: FETCH_ALL_STRAINS_FAILURE,
  payload: error,
});

/**
 * Successfully fetched all the strains from the database.
 *
 * @param { Array } strains A list of all the strains which got returned from the database.
 */
export const fetchAllStrainsSuccess = (strains) => ({
  type: FETCH_ALL_STRAINS_SUCCESS,
  payload: strains,
});
