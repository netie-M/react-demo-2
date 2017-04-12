import React from "react";
import 'whatwg-fetch';
import {Modal} from 'react-bootstrap';
import { DateField } from 'react-date-picker';
import 'react-date-picker/index.css'
import {insertUserArch} from "../services/UserArchService"

class UserArchEdit extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userArch:this.props.data
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({userArch: nextProps.data});
    }

    handleSubmitClick = () => {
        var userArch = this.state.userArch;
        insertUserArch(userArch,(data) => {
            this.props.callbackFinsh();
        });
    }

    close = () => {
        this.props.callbackFinsh();
    }

    defaultHandleChange = (event) => {
        var name = event.target.id;
        var value = event.target.value;
        var userArch = this.state.userArch;
        userArch[name] = value;
        this.setState({userArch:userArch});
    }

    dateFieldHandleChange = (dateString, { dateMoment, timestamp}) => {
        var userArch = this.state.userArch;
        userArch["dimissionDate"] = dateString;
        this.setState({userArch:userArch});
    }

    render(){
        return <Modal show={this.props.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>UserArch Editing</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="form-horizontal" role="form">
                    <div className="row row-margin-top">
                        <div className="col-md-2">
                            <label className="control-label" htmlFor="userId">员工编号:</label>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="userId" value={this.state.userArch.userId} onChange={this.defaultHandleChange}/>
                        </div>
                        <div className="col-md-2">
                            <label className="control-label" htmlFor="userName" >员工姓名:</label>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="userName" value={this.state.userArch.userName} onChange={this.defaultHandleChange}/>
                        </div>
                    </div>
                    <div className="row row-margin-top">
                        <div className="col-md-2">
                            <label className="control-label" htmlFor="userStatus" >员工状态:</label>
                        </div>
                        <div className="col-md-4">
                            <select className="form-control" id="userStatus" value={this.state.userArch.userStatus} onChange={this.defaultHandleChange}>
                                <option value="" hidden></option>
                                <option value="1">在职</option>
                                <option value="0">离职</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label className="control-label" htmlFor="dimissionDate" >离职时间:</label>
                        </div>
                        <div className="col-md-4">
                            <DateField id="dimissionDate" value={this.state.userArch.dimissionDate} onChange={this.dateFieldHandleChange} dateFormat="YYYY-MM-DD"/>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-default" onClick={this.close}> 关闭 </button>
                <button type="button" className="btn btn-default" onClick={this.handleSubmitClick}> 确定 </button>
            </Modal.Footer>
        </Modal>;

    }
}
export default UserArchEdit;