import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AboutPage } from "./pages/About";
import { Posts } from "./pages/Posts";
import { MyButton } from "./UI/MyButton/MyButton";
import { Post } from "./pages/Post";
import { Login } from "./pages/Login";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);

function App() {
 const [isAuth,setIsAuth] = useState(false);
 const navigate = useNavigate();

 useEffect(() => {
  if (localStorage.getItem('auth')) {
    setIsAuth(true);
  }
 })

 const logout = () => {
  setIsAuth(false);
  localStorage.removeItem('auth')
  navigate('/login')
 }

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
    <div className="App">
      {isAuth && <>
      <div>
        <MyButton><Link to="about">About</Link></MyButton>
        <MyButton><Link to="posts">Posts</Link></MyButton>
        <MyButton onClick={() => logout()}>Выйти</MyButton>
      </div>
      </>}
      <Routes>
        {isAuth ? 
        <>
        <Route path="/about" Component={AboutPage} />
        <Route exact path="/posts" Component={Posts} />
        <Route path="/posts/:id" Component={Post} />
        </>:
                <Route path="/" element={<Navigate to="/login" />}/>
        }
      <Route path="/login" Component={Login} />
      <Route path="*" element={<div>Page not found :(</div>} />
      </Routes>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
