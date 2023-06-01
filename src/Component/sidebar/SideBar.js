import { Link, Navigate, useNavigate } from "react-router-dom";
import "./sidebar.css";

export function SideBar() {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");
    const navigate = useNavigate();
    const signOut = () => {
        navigate("/signIn");
        window.localStorage.removeItem("isLoggedIn");
        window.location.reload();
    }
    return <>
        <div className="sidebar" >
            <div className="linkBox">
                <a className="active" ><img height={"30px"} width={"150px"} src="/img/logo-no-background.png" />
                    <button className="b btn" type="button" onClick={myFunction}>
                        <i class="fa fa-bars"></i>
                    </button></a>
            </div>
            <div className="icon" id="demo"> 
                    {isLoggedIn && <div className="linkBox">
                        <Link to="/">HOME</Link>
                    </div>}
                    {isLoggedIn && <div className="linkBox">
                        <Link to="/viewuser">VIEW USERS</Link>
                    </div>
                    }
                    {isLoggedIn && <div className="linkBox">
                        <a href="/collaborationdetails">COLLABORATION </a>
                    </div>}
                    {isLoggedIn && <div className="linkBox">
                        <Link to="/interestedcontestants">INTERESTED CONTESTANTS</Link>
                    </div>}
                    {isLoggedIn && <div className="linkBox">
                        <a href="#selectedcontestants">SELECTED CONTESTANTS</a>
                    </div>}
                    {isLoggedIn && <div className="linkBox">
                        <a href="/viewSpam">SPAM USERS</a>
                    </div>}
                    {isLoggedIn && <div className="mt-3">
                        <button style={{ marginLeft: "80px", borderRadius: "20px", height: "38px", width: "100px", color: "white" }} 
                        className="signOut" onClick={signOut}>SIGN OUT</button>
                    </div>}
                
            </div>


        </div>
    </>
}
function myFunction() {
    var x = document.getElementById("demo");

    if (x.style.display == "")
        x.style.display = "block";
    else if (x.style.display == "none")
        x.style.display = "block"
    else if (x.style.display == "block")
        x.style.display = "none";
}