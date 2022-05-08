import PostItem from "./PostItem"
import {CSSTransition, TransitionGroup} from "react-transition-group"

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return <h1 className="alignCenter">There is no posts</h1>
  }

  return (
    <div>
      <h1 className="alignCenter">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default PostList