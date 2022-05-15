import MainInput from "../components/UI/input/MainInput"
import MainButton from "../components/UI/button/MainButton"
import {useContext} from "react"
import {AuthContext} from "../context"

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const handleLogin = e => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div className="login-wrapper">
      <h1>Login page</h1>
      <form onSubmit={handleLogin}>
        <MainInput type="text" placeholder="Enter your Login" />
        <MainInput type="password" placeholder="Enter your Password" />
        <MainButton>Enter</MainButton>
      </form>
    </div>
  )
}

export default Login