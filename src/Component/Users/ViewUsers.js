import axios from "axios"
import "../Users/viewusers.css"
import api from "../../redux-config/web-api"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function ViewUsers() {
    const dispatch = useDispatch();
    const [searchUserData, setSearchUserData] = useState([]);
    const [userName, setUserName] = useState("");

    const fetchAllUsers1 = async () => {
        let response = await axios.get(api.VIEW_USER);
        setSearchUserData(response.data.allUsers)
    }
    const Navigate = useNavigate();
    const viewProfile = async (userId) => {
        Navigate("/userFriendProfile", { state: { userId } });
    }

    const searchUser = async () => {
        try {
            if (userName === "") {
                fetchAllUsers1();
            } else {
                let response = await axios.get(api.SEARCH_USER + userName);
                setSearchUserData(response.data.user)
            }
        } catch (error) {
            toast.warning("something went wrong")
        }
    }

    useEffect(() => {
        fetchAllUsers1();
        searchUser();
    }, [])
    return <>
        <ToastContainer />
        <div className="container-fluid">
            <div className="row">
                <h1 className="mb-5 text-center">See All User's</h1>
            </div>
            <div className="row">
                <table className="table-responsive">
                    <thead id="heading">
                        <tr>
                            <th >S.No</th>
                            <th >Name</th>
                            <th >User Name</th>
                            <th >Email</th>
                            <th >Contact</th>
                            <th >Status</th>
                            <th >View More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchUserData.map((user, index) => <tr id="trhover" key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>{user.status + ""}</td>
                                <td><button id="buttondesign" 
                                onClick={() => { viewProfile(user._id) }} >View</button></td>
                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    </>
}