import { Link, useParams } from "react-router-dom"
import avatar1 from "../assets/avatars/1.jpg"
import avatar2 from "../assets/avatars/2.jpg"
import avatar3 from "../assets/avatars/3.jpg"
import avatar4 from "../assets/avatars/4.jpg"
import "../pages/css/JoinRoom.css"
import { useEffect, useState } from "react"
import APIHelper from "../helpers/APIHelper"
import config from "../../config"

function JoinRoom() {
    const { id } = useParams();
    const [room, setRoom] = useState()
    const [gameTableUrl,setGameTableUrl] = useState("#")
    let roomInterval = 0;

    useEffect(function () {
        callRoomDataInterval()
    }, [])

    function callRoomDataInterval(){
        roomInterval =  setInterval(() => {
            getRoomData()
            console.log("Checking room status");
        }, 3000);
    }

    function getRoomData(){
        let strURL = config.BASE_URL + "/room/" + id
        let roomData = APIHelper.get(strURL)
        roomData.then(resp => {
            console.log(resp);
            setRoom(resp.data)

            if(resp.data.player_4  !=null){
                clearInterval(roomInterval)
                let gameTableUrl = `/game-table/${resp.data.room_id}`
                setGameTableUrl(gameTableUrl)
            }
            else{
                setGameTableUrl("#")
            }
        })
    }

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-12 card glass-card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6">
                                    Room Id: {room != undefined ? room.room_id : ""}
                                </div>

                                <div className="col-6 text-end">
                                    {room!=undefined && room.player_4 ==null?   <>
                                    <i className="fa fa-spinner fa-spin"></i>
                                    <span style={{ marginLeft: "10px" }}>Waiting for othes to join</span>
                                    </>:""}
                                 
                                </div>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            {room != undefined ?
                            <div className="row">
                                {room.player_1 !=null ? <div className="col-3">
                                    <img className="joined-user-image" src={avatar1} alt="" />
                                    <h3>{room.player_1.username }</h3>
                                </div> : ""}

                                {room.player_2 !=null ? <div className="col-3">
                                    <img className="joined-user-image" src={avatar2} alt="" />
                                    <h3>{room.player_2.username}</h3>
                                </div> : ""}

                                {room.player_3 !=null ? <div className="col-3">
                                    <img className="joined-user-image" src={avatar3} alt="" />
                                    <h3>{room.player_3.username}</h3>
                                </div> : ""}

                                {room.player_4 !=null ? <div className="col-3">
                                    <img className="joined-user-image" src={avatar4} alt="" />
                                    <h3>{room.player_4.username}</h3>
                                </div> : ""}
                            </div>
:""}

                            <div className="row">
                                <div className="col-12">
                                    <Link className="btn btn-block btn-start" to={gameTableUrl}>Start Game</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default JoinRoom
