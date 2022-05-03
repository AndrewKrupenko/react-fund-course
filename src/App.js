import './styles/App.css'
import {useMemo, useState} from "react"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import MainModal from "./components/UI/modal/MainModal"
import MainButton from "./components/UI/button/MainButton"

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

  const sortedPosts = useMemo(() => {
    if (filter.sortBy) {
      return [...posts].sort((a, b) => a[filter.sortBy].localeCompare(b[filter.sortBy]))
    }
    return posts
  }, [filter.sortBy, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.searchQuery) ||
      post.description.toLowerCase().includes(filter.searchQuery)
    )
  }, [filter.searchQuery, sortedPosts])

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
        Create a user
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
