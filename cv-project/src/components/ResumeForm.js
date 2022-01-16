import React from "react";
import PersonalDetails from "./FormComponents/PersonalDetails";
import RenderCard from "./FormComponents/RenderCard";
import EduOther from "./FormComponents/EduOther";

function ResumeForm() {
  const templateEdu = {
    university: {
      placeholder: "University / Institution",
      value: "",
    },
    degree: {
      placeholder: "Degree",
      value: "",
    },
    start: {
      placeholder: "Start Date",
      value: "",
    },
    end: {
      placeholder: "End Date",
      value: "",
    },
  };

  const defaultEdu = {
    ...templateEdu,
    university: {
      value: "University of Sydney",
    },
    degree: {
      value: "Bachelor of Computer Science",
    },
    start: {
      value: "2019-3",
    },
    end: {
      value: "2020-11",
    },
  };

  const templateOther = {
    university: {
      placeholder: "Institution",
      value: "",
    },
    degree: {
      placeholder: "Award / Activity / Others",
      value: "",
    },
    start: {
      placeholder: "Start Date",
      value: "",
    },
    end: {
      placeholder: "End Date",
      value: "",
    },
  };

  const defaultOther = {
    ...templateOther,
    university: {
      value: "University of Sydney",
    },
    degree: {
      value: "Dean's List for School of Computer Science 2019",
    },
    start: {
      value: "2019-3",
    },
    end: {
      value: "2019-11",
    },
  };

  return (
    <div id="formDiv">
      <form>
        <div>
          <h2>Personal Details</h2>
          <PersonalDetails />
        </div>
        <div>
          <h2>Work Experience</h2>
          <RenderCard />
        </div>
        <div>
          <h2>Education</h2>
          <RenderCard />
        </div>
        <div>
          <h2>Others</h2>
          <RenderCard />
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;
