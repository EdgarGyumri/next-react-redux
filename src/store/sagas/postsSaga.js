import { END } from "redux-saga";
import { put, take, takeEvery } from "redux-saga/effects";

function* getPosts() {
  try {
    const response = yield fetch('http://localhost:4200/posts')
    const data = yield response.json()

    yield put({
      type: 'putPosts', 
      payload: data
    })
    
    yield;
  } catch (error) {
    
  }
}

function* getSinglePost(action) {
  try {
    const response = yield fetch(`http://localhost:4200/posts?id=${action.payload}`)
    const post = yield response.json();

    if(post.length !== 0){
      yield put({type: 'putSinglePost', payload: post[0]})
    }

  } catch (error) {
    
  }
}


export default function* postsSagaWatcher() {
  yield takeEvery('getPosts', getPosts)
  yield takeEvery('getSinglePost', getSinglePost)
}