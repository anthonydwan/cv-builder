import React from "react";
import ViewRender from "./ViewRender";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function ViewDoc(props) {
  const { initPerson, initPersonDesc } = props.personSection;
  const { workList, respList } = props.workSection;
  const { eduList, eduDescList } = props.eduSection;
  const { otherList, otherDescList } = props.otherSection;

  const workExpTitle = (
    <div className="view--personal--info--section">
      <WorkIcon className="svg" sx={{ fontSize: 22 }} />
      <span>EXPERIENCE</span>
    </div>
  );

  const eduTitle = (
    <div className="view--personal--info--section">
      <SchoolIcon className="svg" sx={{ fontSize: 22 }} />
      <span>EDUCATION</span>
    </div>
  );

  const otherTitle = (
    <div className="view--personal--info--section">
      <EmojiEventsIcon className="svg" sx={{ fontSize: 22 }} />
      <span>ACHIEVEMENTS & EXTRACURRICULAR</span>
    </div>
  );

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
          <div className="view--personal--info--section">
            <HomeIcon className="svg" sx={{ fontSize: 18 }} />
            {initPerson.personalLocation.value}
          </div>
          <div className="view--personal--info--section">
            <AlternateEmailIcon className="svg" sx={{ fontSize: 18 }} />
            {initPerson.personalEmail.value}
          </div>
          <div className="view--personal--info--section">
            <LinkedInIcon className="svg" sx={{ fontSize: 18 }} />
            {initPerson.personalLinkedIn.value}
          </div>
          <div className="view--personal--info--section">
            <LanguageIcon className="svg" sx={{ fontSize: 18 }} />
            {initPerson.personalPortfolio.value}
          </div>
        </div>
      </div>
      <ViewRender
        title={workExpTitle}
        sectionList={workList}
        subsectionList={respList}
        int="company"
        detail="position"
      />
      <ViewRender
        title={eduTitle}
        sectionList={eduList}
        subsectionList={eduDescList}
        int="university"
        detail="degree"
      />
      <ViewRender
        title={otherTitle}
        sectionList={otherList}
        subsectionList={otherDescList}
        int="institution"
        detail="detail"
      />
    </div>
  );
}

export default ViewDoc;
