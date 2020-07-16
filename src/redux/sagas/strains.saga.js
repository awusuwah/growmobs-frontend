import { all, put, takeLatest } from "redux-saga/effects";
import {
  ADD_STRAIN,
  addStrainFailure,
  addStrainSuccess,
} from "../actions/strains.actions";

/**
 * Saga worker which adds a new strain to the list of strains in the database.
 *
 * @param { Object } action The action which is being dispatched to reach this saga.
 */
function* addStrainWorker(action) {
  try {
    yield put(addStrainSuccess(action.payload));
  } catch (error) {
    yield put(addStrainFailure(error));
  }
}

function* strainsWatcher() {
  yield takeLatest(ADD_STRAIN, addStrainWorker);
}

export default function* strainsSaga() {
  yield all([strainsWatcher()]);
}
