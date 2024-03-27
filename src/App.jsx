import Register from "./pages/Register"
import Login from "./pages/Login"
import JoinRoom from "./pages/JoinRoom"
import Room from "./pages/Room"
import GameTable from "./pages/GameTable"
import Menu from "./pages/Menu"
import JoinRoomById from "./pages/JoinRoomById"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/join-room-by-id" element={<JoinRoomById/>} />
          <Route path="/rooms" element={<Room/>} />
          <Route path="/join-room/:id" element={<JoinRoom/>} />
          <Route path="/game-table/:id" element={<GameTable/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
