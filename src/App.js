import './styles/App.css'
import {useState} from "react"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Javascript',
      description: 'Javascript is a programming language'
    },
    {
      id: 2,
      title: 'Javascript 2',
      description: 'Javascript is a programming language'
    },
    {
      id: 3,
      title: 'Javascript 3',
      description: 'Javascript is a programming language'
    }
  ])

  const createPost = newPost => {
    setPosts([...posts, newPost])
  }

  const removePost = postId => {
    setPosts(posts.filter(post => post.id !== postId))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList
        remove={removePost}
        posts={posts}
        title="Post list"
      />
    </div>
  )
}

export default App
