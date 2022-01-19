import React, { useState } from "react";
import RenderTextInput from "./RenderTextInput";

function PersonalDetails(props) {
  const { initPerson, initPersonDesc, handlePerson, handleDesc } =
    props.personState;

  return (
    <div className="card--block card--personalDetail">
      <RenderTextInput
        index={0}
        passedObj={initPerson}
        handler={handlePerson}
      />
      <textarea
        data-input="personalD"
        onChange={handleDesc}
        placeholder={initPersonDesc.personalD.placeholder}
        value={initPersonDesc.personalD.value}
      ></textarea>
    </div>
  );
}

export default PersonalDetails;
