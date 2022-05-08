import './styles/App.css'
import {useEffect, useState} from "react"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import MainModal from "./components/UI/modal/MainModal"
import MainButton from "./components/UI/button/MainButton"
import {usePosts} from "./hooks/usePosts"
import PostService from "./API/PostService"
import Loader from "./components/UI/loader/Loader"
import {useFetching} from "./hooks/useFetching"

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sortBy: '', searchQuery: ''})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sortBy, filter.searchQuery)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
  }, [])

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
      {postError &&
        <h1>There is an error: ${postError}</h1>
      }
      {isPostsLoading
        ? <Loader />
        : <PostList posts={sortedAndSearchedPosts} title="Post list" remove={removePost} />
      }
    </div>
  )
}

export default App
