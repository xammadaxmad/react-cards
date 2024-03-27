// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/Menu.css"
import Logo from "../assets/logo/giphy.gif"
import JoinRoomIcon from "../assets/icons/join-room.png"
import CreateRoomIcon from "../assets/icons/create-room.png"
import { Link } from "react-router-dom";
import CurrentUser from "../components/CurrentUser";
import LSHelper from "../helpers/LSHelper";
function Menu() {

    const AUTH = LSHelper.get("AUTH")
    console.log((AUTH));

    if (AUTH == null || AUTH == undefined || AUTH == "") {
        window.location.href = "/login"

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
                        <div className="card-header">
                            <div className="col-12 text-center">
                                <CurrentUser />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="col-6 d-flex align-items-center justify-content-center">
                                    <Link to="/rooms" className="menu-card">
                                        <img src={CreateRoomIcon} title="Create new room" alt="" />
                                    </Link>
                                </div>

                                <div className="col-6 d-flex align-items-center justify-content-center">
                                    <Link to="/join-room-by-id" className="menu-card">
                                        <img src={JoinRoomIcon} title="Join room" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu