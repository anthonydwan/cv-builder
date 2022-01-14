import React, { Component } from "react";
import RenderTextInput from "./RenderTextInput";

export class PersonalDetails extends Component {
  constructor() {
    super();
    this.state = {
      pName: {
        placeholder: "Full Name",
        value: "John Jones",
      },
      pPhone: {
        placeholder: "Phone Number",
        value: "+61 412 345 678",
      },
      pLocation: {
        placeholder: "Location",
        value: "Sydney, AU",
      },
      pEmail: {
        placeholder: "Email",
        value: "john.jones@jmail.com",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: {
        placeholder: this.state[e.target.id].placeholder,
        value: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <RenderTextInput
          required={true}
          passedObj={this.state}
          handler={this.handleChange}
        />
      </div>
    );
  }
}

export default PersonalDetails;
