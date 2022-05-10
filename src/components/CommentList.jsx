const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <div className="comment">
          <h5>{comment.email}</h5>
          <div>{comment.body}</div>
        </div>
      ))}
    </div>
  )
}

export default CommentList