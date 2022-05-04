import './styles/App.css'
import {useState} from "react"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import MainModal from "./components/UI/modal/MainModal"
import MainButton from "./components/UI/button/MainButton"
import {usePosts} from "./hooks/usePosts"

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'aa',
      description: 'wqedewd'
    },
    {
      id: 2,
      title: 'bb 2',
      description: 'trrtg'
    },
    {
      id: 3,
      title: 'cc 3',
      description: 'ujuyj language'
    }
  ])

  const [filter, setFilter] = useState({sortBy: '', searchQuery: ''})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sortBy, filter.searchQuery)

  const createPost = newPost => {
    setPosts([...posts, newPost])
    setIsModalVisible(false)
  }

  const removePost = postId => {
    setPosts(posts.filter(post => post.id !== postId))
  }

  return (
    <div className="App">
      <MainButton rootClass="createUserButton" onClick={() => setIsModalVisible(true)}>
        Create a post
      </MainButton>
      <MainModal visible={isModalVisible} setVisible={setIsModalVisible}>
        <PostForm create={createPost} />
      </MainModal>
      <hr className="separator" />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} title="Post list" remove={removePost} />
    </div>
  )
}

export default App
