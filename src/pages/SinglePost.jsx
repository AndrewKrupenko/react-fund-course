import {useParams} from "react-router-dom"

const SinglePost = () => {
  const params = useParams()
  return (
    <div>
      <h1>
        This is a single post with ID = {params.id}
      </h1>
    </div>
  )
}

export default SinglePost