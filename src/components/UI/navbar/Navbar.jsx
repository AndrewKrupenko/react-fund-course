import {Link} from "react-router-dom"
import {useContext} from "react"
import {AuthContext} from "../../../context"
import MainButton from "../button/MainButton";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const handleLogout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <div className="links-wrapper">
        {isAuth &&
          <>
            <MainButton onClick={handleLogout}>
              Log Out
            </MainButton>
            <div className="navbar__links">
              <Link to="/posts">Posts</Link>
              <Link to="/about">About</Link>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Navbar