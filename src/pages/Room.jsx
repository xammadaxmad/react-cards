import "./css/Room.css"
import config from "../../config"
import SwalHelper from "../helpers/SwalHelper"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CurrentUser from "../components/CurrentUser"
import APIHelper from "../helpers/APIHelper"

function Room() {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        getRoomsList()
    }, [])

    const  createNewRoomHandle = async () => {
        let strUrl = `${config.BASE_URL}/room/`
         let response = await APIHelper.post(strUrl,{})
         if (response.status == "success"){
            getRoomsList()
            SwalHelper.show(response.status, response.message)
         }
         else{
           console.log("error while creating new room");

         }
    }

    async function getRoomsList() {
        let strUrl = `${config.BASE_URL}/room/`
        let data =  await APIHelper.get(strUrl)
        setRooms(data.data)
    }

    const deleteRoomHandle = (roomId) =>{
        let strUrl = `${config.BASE_URL}/room/${roomId}`
        APIHelper.axios.delete(strUrl).then((response)=>{
            SwalHelper.show(response.data.status, response.data.message)
            getRoomsList()
        }).catch((error)=>{
            SwalHelper.show(error.response.data.status, error.response.data.message)
        })
    }


    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-12 card glass-card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-2">
                                    Rooms
                                </div>
                                <div className="col-4 text-center">
                                    <CurrentUser/>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                    <a onClick={createNewRoomHandle} className="btn btn-primary btn-sm">Create Room</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="room-list-container">
                                <ul className="room-list">
                                    {rooms.map(room => {
                                        return (
                                            <li key={room.room_id} className="room-list-item">
                                                <div className="room-list-item-text"><span className="badge badge-info bg-primary">Room#{room.room_id}</span></div>
                                                <div className="room-list-item-icons">
                                                    <a className="btn btn-sm btn-danger" onClick={() => deleteRoomHandle(room.room_id)} > <i className="fas fa-trash"></i> </a>
                                                    <Link className="btn btn-warning btn-sm" to={"/join-room/"+room.room_id}> <i className="fas fa-arrow-right"></i> </Link>
                                                </div>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Room