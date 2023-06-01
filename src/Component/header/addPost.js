import { useState } from "react";
import axios from "axios";
import post from "../../poloadicon.png.jpeg";
import "./header.css";
import { toast } from "react-toastify";


export function AddPostModal() {
    const [file, setfile] = useState("");
    const [startingDate, setStartingDate] = useState("");
    const [endingDate, setendingDate] = useState("");
    const [caption, setcaption] = useState("");
    const [imgpath, setimgpath] = useState(post);
    const [uploadbuttonstatus, setuploadbuttonstatus] = useState(true);
    const [videoPath, setvideoPath] = useState(null);
    const [poststatus, setpoststatus] = useState(true);
    const admin = window.JSON.parse(localStorage.getItem("isLoggedIn"))
    let date = new Date();
    date = date.getDate() + "/" + ((date.getMonth() * 1) + 1) + "/" + date.getFullYear();

    const uploadbutton = () => {
        setuploadbuttonstatus(true)
        setimgpath(post)
        setpoststatus(true)
        setStartingDate("")
        setendingDate("")
        setcaption("")
        setvideoPath("")
    }

    let locationOfYour = "indore";

    const uploadImage = (event) => {
        event.preventDefault();
        let file = event.target.files[0];
        if (file.type.startsWith('image/')) {
            setpoststatus(true)
            setimgpath(URL.createObjectURL(event.target.files[0]));
            setfile(event.target.files[0]);
            setuploadbuttonstatus(false);
        } else if (file.type.startsWith('video/')) {
            setpoststatus(false)
            setvideoPath(URL.createObjectURL(event.target.files[0]));
            setfile(event.target.files[0]);
            setuploadbuttonstatus(false);

        }


    }


    const submitbutton = async (event) => {
        event.preventDefault();
        let url = "http://localhost:3000/admin/uploadPost";
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('startingDate', startingDate);
        formdata.append('endingDate', endingDate);
        formdata.append('date', date);
        formdata.append('caption', caption);
        formdata.append('adminId', admin._id);
        formdata.append('locationOfYour', locationOfYour);

        try {
            let response = await axios.post(url, formdata)
            if (response) {
                setimgpath(post);
                setcaption("")
                toast("post uploaded");
                setvideoPath(null)
                startingDate("")
                endingDate("")
                setpoststatus(true)
                setuploadbuttonstatus(true)
            }
        } catch (err) {
            toast.error("please select file first")
        }
    }
    return <>
        <div className="modal fade" id="addPostModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ width: "400px" }}>
                <div className="modal-content">
                    <div className='text-end'>
                        <button onClick={uploadbutton} type="button" className="btn-close m-2" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    <div className="text-center">
                        <label htmlFor="file-input">
                            {/* <img style={{ height: "250px", width: "100%" }} src={imgpath} /> */}
                            {poststatus ? <img style={{ height: "250px", width: "100%" }} src={imgpath} /> :
                                <video style={{ width: '100%', height: "250px" }} loop src={videoPath} autoPlay="true" />}
                            <br></br><br></br>
                        </label>

                    </div>
                    <div className='text-center'>
                        <form onSubmit={submitbutton}>
                            <label>
                                Starting-Date : 
                                <input type="date" placeholder="DD/MM/YY" onChange={(e) => setStartingDate(e.target.value)}
                                className="form-control mt-2"/></label>
                                  <label>
                                Ending-Date : 
                                <input type="date" placeholder="DD/MM/YY" onChange={(e) => setStartingDate(e.target.value)}
                                className="form-control mt-2 ms-2"
                                /></label>
                            <textarea style={{ width: "80%" }} onChange={(event) => setcaption(event.target.value)} value={caption} className="m-2" placeholder="enter caption" />
                            <input multiple="" accept='image/jpeg,image/png,video/mp4' onChange={uploadImage} name="file" style={{ display: "none" }} id="file-input" type="file" /><br />
                            <button disabled={uploadbuttonstatus} id='submit' data-bs-dismiss="modal" type="submit">Upload</button><br />

                            <br />

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
}