// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logo from "../assets/logo/giphy.gif"
import { useState } from "react";
import APIHelper from "../helpers/APIHelper";
import config from "../../config";
import SwalHelper from "../helpers/SwalHelper";
function JoinRoomById() {
    const [roomId, setRoomId] = useState(null)

    function handleRoomIdChange(event) {
        console.log(event.target.value);
        setRoomId(event.target.value)
    }

    async function handleJoinRoom() {
        let strUrl = config.BASE_URL + "/room/join/" + roomId
        let response = await APIHelper.get(strUrl)
        SwalHelper.show(response.status, response.message)

        if (response.status == "success") {
            setTimeout(() => {
                window.location.href = "/join-room/" + roomId
            }, 1000);
        }
    }


    return (
        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <img width="250px" src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="col-6 offset-3 card p-5 shadow glass-card">
                        <h3>Join Room</h3>
                        <div className="form-group">
                            <label htmlFor="txtRoomId">Enter Room Id</label>
                            <input onChange={handleRoomIdChange} type="text" name="txtRoomId" id="txtRoomId" className="form-control" />
                        </div>
                        <div className="form-group mt-4 login-button-container">
                            <button onClick={handleJoinRoom} type="button" className="btn btn-primary">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinRoomById