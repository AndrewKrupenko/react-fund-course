import MainButton from "./UI/button/MainButton"

const PostItem = ({ post, number, remove }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{number}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btns">
        <MainButton onClick={() => remove(post.id)}>Delete</MainButton>
      </div>
    </div>
  )
}

export default PostItem