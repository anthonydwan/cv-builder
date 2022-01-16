import React, { Component } from "react";
import RenderTextInput from "./RenderTextInput";

export class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalName: {
        placeholder: "Full Name",
        value: "John Jones",
      },
      personalPhone: {
        placeholder: "Phone Number",
        value: "+61 412 345 678",
      },
      personalLocation: {
        placeholder: "Location",
        value: "Sydney, AU",
      },
      personalEmail: {
        placeholder: "Email",
        value: "john.jones@jmail.com",
      },
    };
  }



  handleChange = (e) => {
    this.setState({
      [e.target.id]: {
        ...this.state,
        value: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <RenderTextInput
          index={0}
          passedObj={this.state}
          handler={this.handleChange}
        />
        <textarea
          onChange={this.handleChange}
          placeholder="A short description about yourself"
          value="A software developer who is passionate about delivering the highest quality work and is always looking to improve, adapt and innovate."
        ></textarea>
      </React.Fragment>
    );
  }
}

export default PersonalDetails;
