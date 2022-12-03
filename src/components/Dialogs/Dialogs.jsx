import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} profilePic={d.profilePic} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage();

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (<div className={s.dialogs}>
                <div className={s.dialogsItems}>
            {dialogsElements}
        </div>

        <div className={s.messages}>
            {messagesElements}
        </div>
        <div>
            <textarea value = {newMessageBody} onChange={onNewMessageChange} ></textarea>
        </div>
        <div>
            <button onClick={onSendMessageClick}>Send message</button>
        </div>
    </div>)
}

export default Dialogs;