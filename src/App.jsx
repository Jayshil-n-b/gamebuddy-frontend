import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Game from "./Pages/Game/Game"
import User from "./Pages/User/User"
import SharedLayout from "./Pages/SharedLayout/SharedLayout"
import Error from "./Pages/Error/Error"

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/> 
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
        <Route path="user/:userid" element={<User />}/>
        <Route path="game/:gameid" element={<Game />}/>
        <Route path="*" element={<Error />}/>
      </Route>
    </Routes>
  )
}

export default App
