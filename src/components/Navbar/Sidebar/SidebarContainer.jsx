import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return{
        id:state.sidebar.friends.id,
        profilePic: state.sidebar.friends.profilePic,
        name: state.sidebar.friends.name,
        friends: state.sidebar.friends,

    }
}
let mapDispatchToProps = (dispatch) => {
    return{}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps) (Sidebar);

export default SidebarContainer;