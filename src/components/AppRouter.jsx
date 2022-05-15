import {Route, Routes} from "react-router-dom"
import {privateRoutes, publicRoutes} from "../router"
import {useContext} from "react"
import {AuthContext} from "../context"
import Loader from "./UI/loader/Loader"

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return (
    <Routes>
      {isAuth ?
        privateRoutes.map((route, index) =>
          <Route path={route.path} element={route.element} key={index} />
        )
        :
        publicRoutes.map((route, index) =>
          <Route path={route.path} element={route.element} key={index} />
        )
      }
    </Routes>
  )
}

export default AppRouter