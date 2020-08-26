import { all, put, takeLatest } from "redux-saga/effects";
import {
  ADD_STRAIN,
  addStrainFailure,
  addStrainSuccess,
  FETCH_ALL_STRAINS,
  fetchAllStrainsFailure,
  fetchAllStrainsSuccess,
} from "../actions/strains.actions";
import { addStrain, fetchAllStrains } from "../../firebase/firestore";

/**
 * Saga worker which adds a new strain to the list of strains in the database.
 *
 * @param { Object } action The action which is being dispatched to reach this saga.
 */
function* addStrainWorker(action) {
  try {
    yield addStrain(action.payload);
    yield put(addStrainSuccess(action.payload));
  } catch (error) {
    yield put(addStrainFailure(error));
  }
}

function* fetchAllStrainsWorker(action) {
  try {
    const response = yield fetchAllStrains();
    yield put(fetchAllStrainsSuccess(response));
  } catch (error) {
    yield put(fetchAllStrainsFailure(error));
  }
}

function* strainsWatcher() {
  yield takeLatest(ADD_STRAIN, addStrainWorker);
  yield takeLatest(FETCH_ALL_STRAINS, fetchAllStrainsWorker);
}

export default function* strainsSaga() {
  yield all([strainsWatcher()]);
}
