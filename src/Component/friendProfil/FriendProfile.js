import { useDispatch, useSelector } from "react-redux"
// import "./profile.css"
import { useEffect } from "react";
import api from "../../redux-config/web-api";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { SideBar } from "../sidebar/SideBar";
import Loader from "../loader/Loader";

export function FreindProfile() {
    const { userId } = useLocation().state;
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    // const { userPostList, isLoading } = useSelector(state => state.userPosts);
    const dispatch = useDispatch();

    const getUser = () => {
        Promise.all([axios.get("/user/searchById/" + userId)]).then(result => {
            setUser(result[0].data.user);
            setPosts(result[1].data.posts);
            console.log(result[0].data.user);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getUser();
    }, []);
    return <>

        <div className="profile-container">
            <div className="main-profile-container">
                <div className="profile-header ">
                    {/* <div className="profile-photo">
                        {
                           (user) && <img src={user.profilePhoto ? api.profilepic+user.profilePhoto : Avatar} alt="Profile Photo" /> 
                        }
                    </div> */}
                    <div className="profile-info  w-75">
                        {(user)
                            ? <h2 className="user-name">{user.userName}</h2>
                            : <h6 className="userSocials" >dataLoading...</h6>
                        }
                        {(user)
                            ? <h2 className="name">{user.name}</h2>
                            : <h6 className="userSocials" >dataLoading...</h6>
                        }
                        <ul className="social-links">
                            <div className="ProfileRow mb-3 row w-50">
                                {/* <div className="col-sm-4"><span className="userSocials">{userPostList.length} posts</span></div> */}
                                <div className="col-sm-4"><span className="userSocials">1200 followers</span></div>
                                <div className="col-sm-4"><span className="userSocials">108 following</span></div>
                            </div>
                        </ul>
                        <p className="bio">bio bio bio bio bio bio bio bio bio bio bio</p>
                    </div>
                </div>
                <hr />
                <section className="w-100" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {(!posts.length) && <Loader/>}</section>
                <div className="user-post-grid p-5">
                    {(posts.length != 0) && posts.map((posts, index) =>
                        <div key={index} className="product-item user-post d-flex justify-content-center"
                            style={{ color: "lightgray" }}>
                            {posts.type == "video/mp4" ?
                                <video className="video Posts" loop src={api.file + posts.file} autoPlay="true" />
                                : <img className="Posts" src={api.file + posts.file} />}
                            <div className="product-action">
                                <a className="btn" href="" style={{ display: "flex", flexDirection: "column" }}>
                                    <i className="bi bi-heart-fill" style={{ color: "crimson", fontSize: "25px" }}></i>
                                    <span style={{ color: "white" }}> {posts.likeItems.length} likes</span></a></div></div>)}
                </div>
            </div>
        </div>

    </>
}
