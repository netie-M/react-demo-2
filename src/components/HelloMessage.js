import React from "react";

class HelloMessage extends React.Component {
    render() {
        return <div><h1>Hello {this.props.match.params.user_name}</h1></div>;
    }
}
export default HelloMessage;