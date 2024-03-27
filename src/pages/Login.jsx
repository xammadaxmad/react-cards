// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/Login.css"
import Logo from "../assets/logo/giphy.gif"
import { useState } from "react";
import axios from "axios";
import config from '../../config';
import Swal from 'sweetalert2'
import LSHelper from "../helpers/LSHelper";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function loginClickHandle() {

        let payload = {
            email: email,
            password: password
        }
        axios.post(`${config.BASE_URL}/user/login`, payload).then(response => {
            console.log(response.data.data)
            LSHelper.store("AUTH",response.data.data)
            window.location.href = "/"
        })
            .catch(error => {
                Swal.fire({
                    title: error.response.data.status,
                    text: error.response.data.message,
                    icon: 'error'
                })
            })


    }

    function emailChangeHandle(e) {
        setEmail(e.target.value)
    }

    function passwordChangeHandle(e) {
        setPassword(e.target.value)
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
                        <h3>Login</h3>
                        <div className="form-group">
                            <label htmlFor="txtEmail">Email</label>
                            <input type="email" name="txtEmail" id="txtEmail" className="form-control" onChange={emailChangeHandle} />
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="txtPassword" >Password</label>
                            <input type="password" name="txtPassword" id="txtPassword" className="form-control" onChange={passwordChangeHandle} />
                        </div>

                        <div className="form-group mt-4 login-button-container">
                            <button type="button" onClick={() => loginClickHandle()} className="btn btn-primary">Login</button>
                            <a href="/register" className="btn-register">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login