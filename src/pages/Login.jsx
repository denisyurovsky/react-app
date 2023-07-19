import { useContext } from "react"
import { MyButton } from "../UI/MyButton/MyButton"
import { MyInput } from "../UI/MyInput/MyInput"
import { AuthContext } from "../App"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const login = () => {
        setIsAuth(true);
        localStorage.setItem('auth', true)
        navigate('/posts')
    }
    return (
        <div>
            <h1>Login</h1>
            <MyInput type="text"/>
            <MyInput type="password" />
            <MyButton onClick={() => login()}>Authorize</MyButton>
        </div>
    )
}