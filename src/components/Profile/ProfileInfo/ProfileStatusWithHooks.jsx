import s from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode:  true,
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode:  false,
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status:  e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} onBlur={this.deActivateEditMode} autoFocus={true} value={this.state.status}></input>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status || "No Status"}</span>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;