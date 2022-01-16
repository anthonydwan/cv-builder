import React, { useState } from "react";
import PersonalDetails from "./FormComponents/PersonalDetails";
import RenderCard from "./FormComponents/RenderCard";

function ResumeForm(props) {
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

  const initialOther = {
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

  const workTemplate = {
    company: {
      placeholder: "Company",
      value: "",
    },
    position: {
      placeholder: "Position",
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

  const initialWork = {
    ...workTemplate,
    company: {
      value: "Google",
    },
    position: {
      value: "Software Engineer",
    },
    start: {
      value: "2021-2",
    },
    end: {
      value: "2022-2",
    },
  };

  const [workNum, addWorkNum] = useState(0);
  const [workList, setWorkList] = useState({ [workNum]: initialWork });

  const [otherNum, addOtherNum] = useState(0);
  const [otherList, setOtherList] = useState({ [otherNum]: initialOther });

  const handleAddCard = (template, count, counter, setter) => {
    setter((prevList) => ({
      ...prevList,
      [count + 1]: template,
    }));
    counter((prevNum) => prevNum + 1);
  };

  const handleChangeCard = (e, setter) => {
    const [inputBox, cardIndex] = e.target.name.split("_");
    setter((prevList) => ({
      ...prevList,
      [cardIndex]: {
        ...prevList[cardIndex],
        [inputBox]: {
          ...prevList[cardIndex][inputBox],
          value: e.target.value,
        },
      },
    }));
  };

  const handleRemoveCard = (e, currList) => {
    const currWorkName = e.target.parentNode.getAttribute("data-name");
    const [_, cardIndex] = currWorkName.split("_");
    const newObj = {};
    Object.assign(newObj, currList);
    delete newObj[`${cardIndex}`];
    setWorkList(newObj);
  };

  const addWork = () =>
    handleAddCard(workTemplate, workNum, addWorkNum, setWorkList);

  const changeWork = (e) => handleChangeCard(e, setWorkList);

  const removeWork = (e) => handleRemoveCard(e, workList);

  const resp = {
    placeholder: "Reponsibility",
    value: "",
  };

  const [respNum, addRespNum] = useState(0);
  const [respList, setRespList] = useState({
    [`${workNum}_${respNum}`]: resp,
  });

  const HandleAddDP = (cardNum, dpNum, dpSetter, dpCounter, dpTemplate) => {
    dpSetter((prevDPList) => ({
      ...prevDPList,
      [`${cardNum}_${dpNum + 1}`]: dpTemplate,
    }));
    dpCounter((prevDPNum) => prevDPNum + 1);
  };

  const HandleRemoveDP = (e, currDPList) => {
    const currDP = e.target.previousElementSibling;
    const [_, cardIndex, dpIndex] = currDP.name.split("_");
    const newObj = {};
    Object.assign(newObj, currDPList);
    delete newObj[`${cardIndex}_${dpIndex}`];
    setRespList(newObj);
  };

  const HandleChangeDP = (e, dpSetter) => {
    const [_, cardIndex, dpIndex] = e.target.name.split("_");
    dpSetter((prevDPList) => ({
      ...prevDPList,
      [`${cardIndex}_${dpIndex}`]: {
        ...prevDPList[`${cardIndex}_${dpIndex}`],
        value: e.target.value,
      },
    }));
  };

  const addResp = () =>
    HandleAddDP(workNum, respNum, setRespList, addRespNum, resp);

  const removeResp = (e) => HandleRemoveDP(e, respList);

  const changeResp = (e) => HandleChangeDP(e, setRespList);

  const workSection = "work";
  const respSubS = "Responsibility";
  const eduSection = "edu";
  const descSubS = "Description";

  const workObj = { workSection, workList, changeWork, addWork, removeWork };
  const respObj = { respSubS, respList, changeResp, addResp, removeResp };

  const eduObj = { eduSection, workList, changeWork, addWork, removeWork };
  const eduDesc = { descSubS, respList, changeResp, addResp, removeResp };

  return (
    <div id="formDiv">
      <form>
        <div>
          <h2>Personal Details</h2>
          <PersonalDetails />
        </div>
        <div>
          <h2>Work Experience</h2>
          <RenderCard card={workObj} dp={respObj} />
        </div>
        <div>
          <h2>Education</h2>
          <RenderCard card={workObj} dp={respObj} />
        </div>
        <div>
          <h2>Others</h2>
          <RenderCard card={workObj} dp={respObj} />
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;
