import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";

const Friend = (props) => {
    let path = '/friend/' + props.id;

    return (
        <div>
            <NavLink to={path}>
                <img src={props.profilePic}></img>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>

    )
}
const Sidebar = (props) => {
    let friendsElements = props.friends.map(d => <Friend id={d.id} name={d.name} profilePic={d.profilePic} key={d.id}/>);

    return (
        <div className={s.sidebar}>
            <h2>Friends</h2>
            <div className={s.friendsContainer}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Sidebar;