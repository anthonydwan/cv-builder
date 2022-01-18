import React, { useState } from "react";
import PersonalDetails from "./FormComponents/PersonalDetails";
import RenderCard from "./FormComponents/Sections";

function ResumeForm(props) {
  const { workObj, respObj } = props.workSection;
  const { eduObj, eduDescObj } = props.eduSection;
  const { otherObj, otherDescObj } = props.otherSection;

  const [currPage, setPage] = useState(0);

  const nextPage = () => {
    if (currPage < 3) setPage((prevPage) => prevPage + 1);
  };

  const backPage = () => {
    if (currPage > 0) setPage((prevPage) => prevPage - 1);
  };

  const runCurrPage = (currPage) => {
    switch (currPage) {
      case 0:
        return (
          <div>
            <h2>Personal Details </h2>
            <PersonalDetails personState={props.personSection} />
          </div>
        );
      case 1:
        return (
          <div>
            <h2>Work Experience</h2>
            <RenderCard card={workObj} dp={respObj} />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Education</h2>
            <RenderCard card={eduObj} dp={eduDescObj} />
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Others</h2>
            <RenderCard card={otherObj} dp={otherDescObj} />
          </div>
        );
      default:
        return (
          <div>
            <h2>Personal Details </h2>
            <PersonalDetails personState={props.personSection} />
          </div>
        );
    }
  };

  return (
    <div id="formDiv">
      <form className="formClass">
        {runCurrPage(currPage)}
        <div className="form--pageButtons">
          <button type="button" onClick={backPage}>
            Back
          </button>
          <button type="button" onClick={nextPage}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;
