import axios from "axios";
import api from "../../redux-config/web-api"
import { useEffect, useState } from "react";
import "./spamUser.css"
export default function SpamUser() {
    const [spamUser, setSpamUser] = useState([]);
    const fetchSpamUser = async () => {
        let response = await axios.get(api.VIEW_SPAM_USER);
        setSpamUser(response.data.allSpamUser)
    }
    const banUser = async (userId) => {
        try {
            let response = await axios.post(api.BAN_USER, { userId });
            fetchSpamUser();
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchSpamUser();
    })

    return <>
        <h1 className="mb-5">Spam Users component</h1>
        <div className="tableDiv">
            <table className="table">
                <thead  className="text-center">
                    <tr>
                        <th>S.No</th>
                        <th>User</th>
                        {/* <th>Post</th> */}
                        <th>Reason</th>
                        <th>Ban-User</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {spamUser.map((user, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.userId.name}</td>
                            {/* <td><img height={"80px"} style={{borderRadius:"50%"}} width={"80px"} src={"http://localhost:3000/images/"+user.postId.file}/></td> */}
                            <td>{user.reason}</td>
                            <td><button className="btn btn-outline-success unBanButton" onClick={() => banUser(user.userId)}>Ban</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>
}
