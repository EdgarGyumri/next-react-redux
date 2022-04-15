import { HYDRATE } from "next-redux-wrapper"

const initialState = {
  allPosts: [],
  singlePost: {}
}

export default function postsReducer(state=initialState, action) {
  switch (action.type) {
    case HYDRATE:
      console.log(state, 'state')
      console.log(action.payload, 'payload')
      // console.log(state, action, 'HYDRATE')
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return {
        ...state,
        ...action.payload.posts
      };
    case 'putPosts':
      return {
        ...state,
        allPosts: [
          ...action.payload
        ]
          
      }
    case 'putSinglePost': 
      return {
        ...state,
        singlePost: action.payload
      }
  
    default:
      return state
  }
}