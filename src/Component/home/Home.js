import axios from "axios";
import { Header } from "../header/Header";
import "./home.css";
import { Link } from "react-router-dom";

export function Home() {
    const handleButton = async () => {
        window.alert("button clicked")
        let response = await axios.post("http://localhost:3000/admin/sendOtp", { to: "+918120170044" });
        console.log(response.data)
    }

    return <>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col-md-3 ">
                    <div className="card">
                        <div className="card_content">
                            <p id="para">TOTAL USERS</p>
                            <p id="data"> 50</p>
                            <Link to="/viewuser">
                                <i class="fa fa-user-circle" id="fafa"></i>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-3 offset-1">
                    <div className="card">
                        <div className="card_content">
                            <p id="para">TOTAL SHOWS</p>
                            <p id="data" > 50</p>
                            <i class="fa fa-ticket" id="fafa"></i>
                        </div>
                    </div>

                </div>
                <div className="col-md-3 offset-1">
                    <div className="card">
                        <div className="card_content">
                            <p id="para">TOTAL COLLABORATION</p>
                            <p id="data"> 50</p>
                            <Link to="/collaborationdetails">
                                <i class="fa fa-handshake-o" id="fafa"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-md-3 ">
                    <div className="card">
                        <div className="card_content">
                            <p id="para">COLLABORATION REQUESTS</p>
                            <p id="data"> 50</p>
                            <Link to="/collaborationdetails">
                                <i class="fa fa-paper-plane" id="fafa"></i>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-3 offset-1">
                    <div className="card">
                        <div className="card_content">
                            <p id="para">ADMIN GALLERY </p>
                            <p id="data" > 50</p>
                            <Link to="/interestedcontestants">
                                <i class="fa fa-image" id="fafa"></i>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-3 offset-1">
                    <div className="card">
                        <div className="card_content">
                            <p id="para">TOTAL COLLABORATION</p>
                            <p id="data"> 50</p>
                            <i class="fa fa-handshake-o" id="fafa"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </>
}










{/* <div class="child" id="background" style={{
                height: "650px", width: "250px",
                backgroundSize: "contain", backgroundPosition: "center",
                backgroundImage: "url(https://w0.peakpx.com/wallpaper/986/327/HD-wallpaper-fire-guitar-instrument.jpg)"
            }} >
            </div>
            <div class="child">
            <button className="btn btn-outline-primary mt-5" onClick={handleButton}>SEND OTP</button>

            </div>*/}
{/* </div> */ }