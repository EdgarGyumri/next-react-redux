import Link from "next/link";
import { useEffect } from 'react'
import { useRouter } from "next/router"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import store from "../../src/store";

export default function Post(){
  const router = useRouter();
  const dispatch = useDispatch();

  const post = useSelector(state => state.posts.singlePost)

  console.log(post);

  useEffect(() => {
    dispatch({type: 'getSinglePost', payload: router.query.id})
  }, [router.query])


  return (
    <div>
      <ul>
        {Object.keys(post).length !== 0 ? <li>
          <span>{post.id}</span>
          <span>{post.content}</span>
        </li> : <div>Loading...</div>}
      </ul>
      <Link href="/">Home</Link>
    </div>
  )
}


Post.getInitialProps = async (ctx) => {
  store.dispatch({type: 'getSinglePost', payload: ctx.query.id})

  return {
    post: {}, // will be passed to the page component as props
  }
}