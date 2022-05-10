import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import {useFetching} from "../hooks/useFetching"
import PostService from "../API/PostService"
import Loader from "../components/UI/loader/Loader"
import CommentList from "../components/CommentList";

const SinglePost = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching( async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })

  const [comments, setComments] = useState([])
  const [fetchPostComments, isCommentsLoading, commentsError] = useFetching( async () => {
    const response = await PostService.getCommentsByPostId(params.id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById()
    fetchPostComments()
  }, [])

  return (
    <div className="single-post-wrapper">
      {isLoading
        ? <Loader />
        : <h2>{post.id}. {post.title}</h2>
      }

      <h3 className="comments-title">Comments:</h3>
      {isCommentsLoading
        ? <Loader />
        : <CommentList comments={comments} />
      }

    </div>
  )
}

export default SinglePost