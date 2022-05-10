import {useEffect, useState} from "react"
import PostList from "../components/PostList"
import PostForm from "../components/PostForm"
import PostFilter from "../components/PostFilter"
import MainModal from "../components/UI/modal/MainModal"
import MainButton from "../components/UI/button/MainButton"
import {usePosts} from "../hooks/usePosts"
import PostService from "../API/PostService"
import Loader from "../components/UI/loader/Loader"
import {useFetching} from "../hooks/useFetching"
import Pagination from "../components/UI/pagination/Pagination"
import {getPageCount} from "../utils/pages"

function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sortBy: '', searchQuery: ''})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sortBy, filter.searchQuery)

  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(page, limit)
    const numberOfItems = response.headers['x-total-count']
    setPosts(response.data)
    setTotalPages(getPageCount(numberOfItems, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = newPost => {
    setPosts([...posts, newPost])
    setIsModalVisible(false)
  }

  const removePost = postId => {
    setPosts(posts.filter(post => post.id !== postId))
  }

  const changePage = pageNumber => {
    setPage(pageNumber)
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
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  )
}

export default Posts
