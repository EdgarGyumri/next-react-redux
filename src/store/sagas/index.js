import { all } from 'redux-saga/effects'
import postsSagaWatcher from './postsSaga'

function* rootSaga() {
  yield all([
    postsSagaWatcher()
  ])
}

export default rootSaga