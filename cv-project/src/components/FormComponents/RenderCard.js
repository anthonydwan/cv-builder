import React, { useState } from "react";
import DotPoint from "./DotPoint";
import RenderTextInput from "./RenderTextInput";

function RenderCard() {
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

  const [jobNum, addjobNum] = useState(0);
  const [workList, setWorkList] = useState({ [jobNum]: initialWork });

  const addWork = (e) => {
    setWorkList((prevWorkList) => ({
      ...prevWorkList,
      [jobNum + 1]: workTemplate,
    }));
    addjobNum((prevJobNum) => prevJobNum + 1);
  };

  const handleChange = (e) => {
    const [inputBox, jobIndex] = e.target.name.split("_");
    setWorkList((prevWorkList) => ({
      ...prevWorkList,
      [jobIndex]: {
        ...prevWorkList[jobIndex],
        [inputBox]: {
          ...prevWorkList[jobIndex][inputBox],
          value: e.target.value,
        },
      },
    }));
  };

  const removeWork = (e) => {
    const currWorkName = e.target.parentNode.getAttribute("data-name");
    const [_, jobIndex] = currWorkName.split("_");
    const newObj = {};
    Object.assign(newObj, workList);
    delete newObj[`${jobIndex}`];
    setWorkList(newObj);
  };

  const Resp = {
    placeholder: "Reponsibility",
    value: "",
  };

  const [respNum, addRespNum] = useState(0);
  const [respList, setRespList] = useState({
    [`${jobNum}_${respNum}`]: Resp,
  });

  const addResp = () => {
    setRespList((prevRespList) => ({
      ...prevRespList,
      [`${jobNum}_${respNum + 1}`]: Resp,
    }));
    addRespNum((prevJobNum) => prevJobNum + 1);
  };

  const removeResp = (e) => {
    const currResp = e.target.previousElementSibling;
    const [_, jobIndex, respIndex] = currResp.name.split("_");
    const newObj = {};
    Object.assign(newObj, respList);
    delete newObj[`${jobIndex}_${respIndex}`];
    setRespList(newObj);
  };

  console.log(respList)

  const changeResp = (e) => {
    const [_, jobIndex, respIndex] = e.target.name.split("_");
    setRespList((prevRespList) => ({
      ...prevRespList,
      [`${jobIndex}_${respIndex}`]: {
        ...prevRespList[`${jobIndex}_${respIndex}`],
        value: e.target.value,
      },
    }));
  };

  return (
    <React.Fragment>
      {Object.keys(workList).map((key) => (
        <div className="workExp--block" key={key} data-name={`work_${key}`}>
          <RenderTextInput
            passedObj={workList[key]}
            handler={handleChange}
            index={key}
          />
          <DotPoint
            dotptList={respList}
            addHandler={addResp}
            removeHandler={removeResp}
            changeHandler={changeResp}
          />
          <button type="button" onClick={removeWork}>
            Remove Work
          </button>
        </div>
      ))}
      <button type="button" onClick={addWork}>
        Add Work
      </button>
    </React.Fragment>
  );
}

export default RenderCard;
