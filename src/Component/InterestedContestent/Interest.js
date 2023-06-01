import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux-config/adminPostSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Interest.css";
function InterestedContestent() {
    const dispatch = useDispatch();
    const [userList, setUserList] = useState(null);
    const { allPost } = useSelector(state => state.adminPost);

    const fetchInterestedContestents = async (postId) => {
        const response = await axios.get("http://localhost:3000/admin/viewInterestedContestants/" + postId);
        setUserList(response.data.viewInterestedContestants)
    }

    const selectedArtists = async (postId, userId) => {
        try {
            const response = await axios.get("http://localhost:3000/admin/viewInterestedContestants/accept/" + postId + "/" + userId)
            console.log("before if")
            if (response.data.status)
                toast.success("Contestents Selected")
            else
                toast.warning("something went wrong")
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        dispatch(fetchPost())
    }, [])
    return <>
        <ToastContainer />
        <Header />
        <div className="container">
            <div className="row">
                {
                    allPost.map((data, index) => <div className="col-sm-3 mt-3" style={{ height: "200px" }}>
                        <img height={"80%"} width={"100%"} src={"http://localhost:3000/adminPost/" + data.file} />
                        <button id="btndesign" style={{ width: "100%" }} onClick={() => fetchInterestedContestents(data._id)} data-bs-toggle="modal" data-bs-target="#InterestedUser" >See Contestents</button>
                    </div>)
                }
            </div>
        </div>

        <div class="modal fade" id="InterestedUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Interested User's</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table className="table">
                            <thead>
                                <th>S No.</th>
                                <th>Name</th>
                                <th>Decline</th>
                            </thead>
                            <tbody>
                                {
                                    userList?.interestedContestants.map((user, index) => <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.interestedContestantsUserId.name}</td>
                                        <td>
                                            <button className="btn btn-outline-success" onClick={() => selectedArtists(userList._id, user.interestedContestantsUserId._id)}>Select</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default InterestedContestent;