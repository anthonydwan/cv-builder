import React from "react";
import PersonalDetails from "./FormComponents/PersonalDetails";
import RenderCard from "./FormComponents/Sections";

function ResumeForm(props) {
  const { workObj, respObj } = props.workSection;
  const { eduObj, eduDescObj } = props.eduSection;
  const { otherObj, otherDescObj } = props.otherSection;

  return (
    <div id="formDiv">
      <form className="formClass">
        <div>
          <h2>Personal Details </h2>
          <PersonalDetails personState={props.personSection} />
        </div>
        <div>
          <h2>Work Experience</h2>
          <RenderCard card={workObj} dp={respObj} />
        </div>
        <div>
          <h2>Education</h2>
          <RenderCard card={eduObj} dp={eduDescObj} />
        </div>
        <div>
          <h2>Others</h2>
          <RenderCard card={otherObj} dp={otherDescObj} />
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;
