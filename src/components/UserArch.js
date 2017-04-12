import React from "react";
import 'whatwg-fetch';
import UserArchEdit from "./UserArchEdit";
import {findUserArchList} from "../services/UserArchService";

let selectedUserArch = {};
class UserArch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:null,
            showModal:false
        }
    }

    handleSearchClick = () => {
        findUserArchList((data) => {
            console.log (data);
            this.setState({list:data.userArchList})
            console.log (this.state);
        })
    }

    open(isEdit){
        if(isEdit){
            selectedUserArch[isEdit]  = isEdit;
        }else{
            selectedUserArch = {"isEdit":isEdit};
        }
        this.setState({showModal:true});
    }

    close = () =>{
        this.setState({showModal:false});
        console.log("UserArch callback ...");
    }

    handleTableClickSelect(item){
        selectedUserArch = item;
    }

    render() {
        const userTbody = this.state.list &&
            this.state.list.map((elem,index) =>
                <tr key={index} onClick={()=> this.handleTableClickSelect(elem)}>
                    <td>{ elem.userId }</td>
                    <td>{ elem.userName }</td>
                    <td>{ elem.userStatus }</td>
                </tr>);

        return <div>
            <div className="input-group col-md-4">
                <input type="text" className="form-control"/>
					<span className="input-group-btn">
						<button className="btn btn-default" type="button" onClick={this.handleSearchClick}>
							Go!
						</button>
					</span>
            </div>
            <hr/>
            <div className="btn-group">
                <button type="button" className="btn btn-default" onClick={() => this.open(false)}>新增</button>
                <button type="button" className="btn btn-default" onClick={() => this.open(true)}>编辑</button>
            </div>
            <UserArchEdit showModal={this.state.showModal} callbackFinsh={this.close} data={selectedUserArch}/>
            <table className="table table-bordered" >
                  <caption></caption>
                  <thead>
                  <tr>
                      <th>员工编号</th>
                      <th>员工姓名</th>
                      <th>当前状态</th>
                  </tr>
                  </thead>
                  <tbody>
                  {userTbody}
                  </tbody>
          </table>
        </div>;
    }
}
export default UserArch;