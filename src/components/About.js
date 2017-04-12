import React from "react";

class About extends React.Component {
    render() {
        return <div><h1>About</h1><h1>{this.props.location.query.user_name}</h1></div> ;
    }
}
export default About;