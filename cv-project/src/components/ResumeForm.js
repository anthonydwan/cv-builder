import React from "react";
import PersonalDetails from "./FormComponents/PersonalDetails";
import Description from "./FormComponents/Description";
import WorkExp from "./FormComponents/Work";
import Education from "./FormComponents/Education";
import OtherInfo from "./FormComponents/OtherInfo";

function ResumeForm() {
  return (
    <div id="formDiv">
      <form>
        <div>
          <h2>Personal Details</h2>
          <PersonalDetails />
        </div>
        <div>
          <h2>Description</h2>
          <Description />
        </div>
        <div>
          <h2>Work Experience</h2>
          <WorkExp />
        </div>
        <div>
          <h2>Education</h2>
          <Education />
        </div>
        <div>
          <h2>Others</h2>
          <OtherInfo />
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;
