import MainButton from "./UI/button/MainButton"
import {useNavigate} from "react-router-dom"

const PostItem = ({ post, remove }) => {
  const navigate = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btns">
        <MainButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MainButton>
        <MainButton onClick={() => remove(post.id)}>Delete</MainButton>
      </div>
    </div>
  )
}

export default PostItem