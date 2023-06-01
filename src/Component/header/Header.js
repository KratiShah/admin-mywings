import "./header.css";
import { AddPostModal } from "./addPost";
export function Header() {
    return <>
        <div className="container-fluid" id="header">
            <div className="row">
            <a className="nav-link active" data-bs-toggle="modal"
                data-bs-target="#addPostModal" aria-current="page" >
                <i className="bi bi-plus-square  AddPost"></i>
            </a>
            </div>
        </div>
        <AddPostModal />
    </>
}