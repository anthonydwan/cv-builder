import React, { useState } from "react";
import RenderTextInput from "./RenderTextInput";

function EduOther(props) {
  const { section, templateVal, defaultVal , keyNum, addHandler, changeHandler, removeHandler} = props;

  const [eduNum, addEduNum] = useState(0);
  const [eduList, setEduList] = useState({ [eduNum]: defaultVal });

  const addCard = (e) => {
    setEduList((prevEduList) => ({
      ...prevEduList,
      [eduNum + 1]: templateVal,
    }));
    addEduNum((prevJobNum) => prevJobNum + 1);
  };

  const removeCard = (e) => {
    console.log(e.target);
    const card = e.target.parentNode;
    const [_, cardIndex] = card.getAttribute("data-name").split("_");
    const newObj = {};
    Object.assign(newObj, eduList);
    delete newObj[`${cardIndex}`];
    setEduList(newObj);
  };

  const changeCard = (e) => {
    const [inputBox, eduIndex] = e.target.name.split("_");
    setEduList((prevEduList) => ({
      ...prevEduList,
      [eduIndex]: {
        ...prevEduList[eduIndex],
        [inputBox]: {
          ...prevEduList[eduIndex][inputBox],
          value: e.target.value,
        },
      },
    }));
  };

  return (
    <div>
      {Object.keys(eduList).map((key) => (
        <div
          className="workExp--block"
          data-name={`${section}_${key}`}
          key={key}
        >
          <RenderTextInput
            passedObj={eduList[key]}
            handler={changeCard}
            index={key}
          />
          <textarea placeholder="Description"></textarea>
          <button type="button" onClick={removeCard}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addCard}>
        Add Education
      </button>
    </div>
  );
}

export default EduOther;
