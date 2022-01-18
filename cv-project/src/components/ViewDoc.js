import React from "react";
import ViewRender from "./ViewRender";

function ViewDoc(props) {
  const { initPerson, initPersonDesc } = props.personSection;
  const { workList, respList } = props.workSection;
  const { eduList, eduDescList } = props.eduSection;
  const { otherList, otherDescList } = props.otherSection;

  return (
    <div className="view--CV">
      <div className="view--personal">
        <div>
          <div className="view--personal--name">
            {initPerson.personalName.value}
          </div>
          <br />
          <div>{initPersonDesc.personalD.value}</div>
        </div>
        <div className="view--personal--info">
          <div>{initPerson.personalLocation.value}</div>
          <div>{initPerson.personalEmail.value}</div>
          <div>{initPerson.personalLinkedIn.value}</div>
          <div>{initPerson.personalPortfolio.value}</div>
        </div>
      </div>
      <ViewRender
        title="EXPERIENCE"
        sectionList={workList}
        subsectionList={respList}
        int="company"
        detail="position"
      />
      <ViewRender
        title="EDUCATION"
        sectionList={eduList}
        subsectionList={eduDescList}
        int="university"
        detail="degree"
      />
      <ViewRender
        title="ACHIEVEMENTS / EXTRACURRICULAR / OTHERS"
        sectionList={otherList}
        subsectionList={otherDescList}
        int="institution"
        detail="detail"
      />
    </div>
  );
}

export default ViewDoc;
