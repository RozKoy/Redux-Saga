import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';

function* increaseCounterAsync() {
  try {
    // yield delay(2000);
  
    yield put({ 
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
}

export function* watchIncreaseCounter() {

  yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
}

function* decreaseCounter() {
  try {
    yield delay(2000);
  
    yield put({ 
      type: 'DECREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
}

export function* watchDecreaseCounter() {

  yield takeLatest('DECREASE_COUNTER', decreaseCounter);
}