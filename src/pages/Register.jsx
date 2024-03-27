// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/Register.css"
import Logo from "../assets/logo/giphy.gif"
import { useState } from "react";
import axios from "axios";
import config from "../../config";
import SwalHelper from "../helpers/SwalHelper";

function Register() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function submitHandle() {
        let data = {
            'username': username,
            'email': email,
            'password': password
        }
        axios.post(`${config.BASE_URL}/user/register`,data).then(response=>{
            SwalHelper.show(response.data.status, response.data.message)
            setTimeout(() => {
                window.location.href = "/login"
            }, 2000);
        }).catch(reason=>{
           SwalHelper.show(reason.response.data.status, reason.response.data.message)
        })
    }

    function emailChangeHandle(e) {
        setEmail(e.target.value)
    }

    function passwordChangeHandle(e) {
        setPassword(e.target.value)
    }

    function usernameChangeHandle(e) {
        setUsername(e.target.value)
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
                        <h3>Register</h3>
                        <div className="form-group">
                            <label htmlFor="txtUsername">Username</label>
                            <input type="text" name="txtUsername" id="txtUsername" className="form-control" onChange={usernameChangeHandle} />
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="txtEmail">Email</label>
                            <input type="email" name="txtEmail" id="txtEmail" className="form-control" onChange={emailChangeHandle} />
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="txtPassword" >Password</label>
                            <input type="password" name="txtPassword" id="txtPassword" className="form-control" onChange={passwordChangeHandle} />
                        </div>

                        <div className="form-group mt-4 login-button-container">
                            <button type="button" onClick={() => submitHandle()} className="btn btn-primary">Register</button>
                            <a href="/login" className="btn-register">Already have an account?</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register