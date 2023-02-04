import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/default_user_image.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users,...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = props.currentPage - 3; i <= pagesCount; i++) {
        if (i < props.currentPage + 5 && i > 0 && i > props.currentPage - 3) {
            pages.push(i)
        }
    }

    return (<div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>

        {users.map((u) => <div key={u.id}>
                <span>
                    <div>
                       <NavLink to={`/profile/${u.id}`}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                       </NavLink>
                       </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {props.unfollow(u.id)

                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)

                            }}>Follow</button>}
                    </div>
                </span>
            <span>
                 <span>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                 </span>
                </span>
        </div>)}
    </div>)
}

export default Users;