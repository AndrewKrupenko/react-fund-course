import PostItem from "./PostItem"
import React from 'react'

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return <h1 className="alignCenter">There is no posts</h1>
  }

  return (
    <div>
      <h1 className="alignCenter">{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post={post}
          remove={remove}
          key={post.id}
        />
      ))}
    </div>
  )
}

export default PostList