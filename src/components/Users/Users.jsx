import React from "react";
import styles from "./users.module.css";
let Users = (props) => {

if(props.users.length === 0){
    props.setUsers(
        [
            {id: 1, fullName:"Dmitry K.", photoUrl: "https://tinyurl.com/2hf7pr29", status: "I am looking for a job right now", location: {country: "Belarus", city: "Minsk"}, followed: false, },
            {id: 2, fullName:"Svetlana D.", photoUrl: "https://tinyurl.com/2m5ydx9k", status: "I am so pretty", location: {country: "Belarus", city: "Minsk"}, followed: false, },
            {id: 3, fullName:"Sergei S.", photoUrl: "https://tinyurl.com/2rykycub", status: "I like football!!", location: {country: "Ukraine", city: "Kyiv"}, followed: true, },
        ]
    )
}
    return <div>
        {
            props.users.map((u)=> <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                 <span>
                     <div>{u.fullName}</div>
                     <div>{u.status}</div>
                 </span>
                 <span>
                     <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                 </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;