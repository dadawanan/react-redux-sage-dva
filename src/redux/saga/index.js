
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* fetchUser(action) {
  try {
     yield call(delay,1000);
     yield put({type: "increment"});
  } catch (e) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}
function* decreament(action){
  yield call(delay,1000)
  yield put({type:'decrement'})
}
function* mySaga() {
 // yield takeLatest("INCREMENT_ASYNC", fetchUser); 异步不能累积
  yield takeEvery("INCREMENT_ASYNC", fetchUser);  //异步可以累积
  yield takeEvery("DECREMENT_ASYNC", decreament);
}
export default mySaga;