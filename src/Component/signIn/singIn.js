import { useNavigate } from "react-router-dom";
import "./signIn.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import webApi from "../../redux-config/web-api";
import { setAdmin } from "../../redux-config/adminSlice";


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(email,password)
            let response = await axios.post(webApi.SIGN_IN_FORM, { email, password });
            dispatch(setAdmin(response.data.adminDetails ));
            window.localStorage.setItem("isLoggedIn", JSON.stringify(response.data.adminDetails));
            navigate("/");
        }
        catch (err) {
            console.log(err);
            toast.error("wrong email password");
        }
    }
    return <>
        <ToastContainer />
        <div style={{ height: "100vh", width: "100%", backgroundColor: "#ffffff", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="container container1" style={{ padding: "5vw", width: "60%" }}>
                <div className="row row1" style={{ height: 420 }}>
                    <div className="row  text-end">
                        <a data-bs-toggle="modal"
                            data-bs-target="#exampleModal" aria-current="page" style={{ fontSize: "14px", marginLeft: "8px" }}>help ?</a>
                    </div>
                    <div className="col-6" style={{ backgroundColor: "white", height: 400 }}>
                        <form onSubmit={handleSubmit} >
                            <h2 id="heading">Sign In</h2>
                            <span>Or use your account</span>
                            <input className="ps-3 input1" onChange={(event) => setEmail(event.target.value)} type="text mt-2" required placeholder="Enter Email" />
                            <input className="ps-3 input1" onChange={(event) => setPassword(event.target.value)} type="password" required placeholder="Enter Password" />
                            <a id="a" href="" className="link">
                                {" "}
                                {/* <small>forgot Password?</small> */}
                            </a>
                            <button className="btn btn-dark btn-success1">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <Help/> */}
    </>
}
export default SignIn;