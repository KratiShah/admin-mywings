import axios, { all } from "axios";
import { useEffect, useState } from "react"
import api from "../../redux-config/web-api"
import "./collaboration.css";

export default function Collabration() {
    const [allCollaboration, setAllCollaboration] = useState([]);
    const [allConfirmCollaboration, setAllConfirmCollaboration] = useState([]);

    const getAllCollaboration = async () => {
        const response = await axios.get(api.COLLABORATION_REQUEST)
        setAllCollaboration(response.data.allCollaboration);
    }
    const DeclineCollaboration = async (userId, email) => {
        const response = await axios.get(api.COLLABORATION_CANCLE + userId + "/" + email);
    }
    const confirmCollabrationCancel = async (userId, email) => {
        const response = await axios.get(api.CONFIREMED_COLLABORATION_CANCLE + userId + "/" + email);
    }
    const acceptCollaboration = async (BusinessFirmName, email, address, contactPersonName, contact) => {
        try {
            console.log("inside collabotation accepted functon ");
            const response = await axios.post(api.COLLABORATION_ACCEPT, { BusinessFirmName, email, address, contactPersonName, contact });
        } catch (error) {
            console.log(error)
        }
    }
    const getAllConfirmedCollaboration = async () => {
        const response = await axios.get(api.CONFIREMED_COLLABORATION);
        setAllConfirmCollaboration(response.data.allCollaboration);
    }

    useEffect(() => {
        getAllCollaboration();
        getAllConfirmedCollaboration();
    })

    return <>
        <h1 className="text-center mb-3">Collabration Component</h1>
        <div>
            <button className="btn btn-outline-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">All Collaboration</button>
        </div>
        <div>
            <table className="table">
                <thead>
                    <th>S.no</th>
                    <th>Firm-Name</th>
                    <th>Accept</th>
                    <th>Decline</th>
                </thead>
                <tbody>
                    {allCollaboration.map((user, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.BusinessFirmName}</td>
                        <td>
                            <button className="btn btn-outline-success" onClick={() => acceptCollaboration(user.BusinessFirmName, user.email, user.address, user.contactPersonName, user.contact)}>Accept</button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => DeclineCollaboration(user._id, user.email)}>Decline</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">All Collaborated Person's</h5>
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
                                    allConfirmCollaboration.map((user, index) => <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.BusinessFirmName}</td>
                                        <td>
                                            <button className="btn btn-outline-danger" onClick={() => confirmCollabrationCancel(user._id, user.email)}>Decline</button>
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