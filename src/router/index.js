import About from "../pages/About"
import Posts from "../pages/Posts"
import SinglePost from "../pages/SinglePost"
import Error from "../pages/Error"
import {Navigate} from "react-router-dom"

export const routes = [
  {path: '/about', element: <About />},
  {path: '/posts', element: <Posts />},
  {path: '/', element: <Posts />},
  {path: '/posts/:id', element: <SinglePost />},
  {path: '/error', element: <Error />},
  {path: '*', element: <Navigate replace to="/error" />}
]