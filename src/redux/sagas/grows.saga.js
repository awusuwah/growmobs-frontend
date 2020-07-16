import { all, put, takeLatest } from "redux-saga/effects";
import {
  ADD_GROW,
  addGrowFailure,
  addGrowSuccess,
} from "../actions/grows.actions";

/**
 * Saga worker which adds a new grow to the list of grows in the database.
 *
 * @param { Object } action The action which is being dispatched to reach this saga.
 */
function* addGrowWorker(action) {
  try {
    yield put(addGrowSuccess(action.payload));
  } catch (error) {
    yield put(addGrowFailure(error));
  }
}

function* growsWatcher() {
  yield takeLatest(ADD_GROW, addGrowWorker);
}

export default function* growsSaga() {
  yield all([growsWatcher()]);
}
