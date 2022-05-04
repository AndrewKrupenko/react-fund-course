import MainInput from "./UI/input/MainInput"
import MainButton from "./UI/button/MainButton"
import {useState} from "react"

const PostForm = ({ create }) => {

  const [post, setPost] = useState({title: '', description: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({title: '', description: ''})
  }

  return (
    <form>
      <MainInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text"
        placeholder="Post name"
      />
      <MainInput
        value={post.description}
        onChange={e => setPost({...post, description: e.target.value})}
        type="text"
        placeholder="Post description"
      />
      <MainButton onClick={addNewPost}>Create post</MainButton>
    </form>
  )
}

export default PostForm