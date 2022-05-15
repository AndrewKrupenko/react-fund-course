import About from "../pages/About"
import Posts from "../pages/Posts"
import SinglePost from "../pages/SinglePost"
import Error from "../pages/Error"
import Login from "../pages/Login"
import {Navigate} from "react-router-dom"

export const privateRoutes = [
  {path: '/about', element: <About />},
  {path: '/posts', element: <Posts />},
  {path: '/', element: <Posts />},
  {path: '/login', element: <Navigate replace to="/posts" />},
  {path: '/posts/:id', element: <SinglePost />},
  {path: '/error', element: <Error />},
  {path: '*', element: <Navigate replace to="/error" />}
]

export const publicRoutes = [
  {path: '/login', element: <Login />},
  {path: '*', element: <Navigate replace to="/login" />}
]