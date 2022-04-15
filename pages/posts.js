import MainLayout from "../components/MainLayout";
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import store, { wrapper } from "../src/store";
import { Link } from 'next/link';
import { END } from "redux-saga";

function Posts() {
  const posts = useSelector(state => state.posts.allPosts)

  console.log(posts, 'posts');

  return (
    <div>
      <MainLayout>
        <h1>Posts page</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <a>{post.content}</a>
              {/* <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.content}</a></Link> */}
            </li>
          ))}
        </ul>
      </MainLayout>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc}) => {
  store.dispatch({
    type: 'getPosts'
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Posts