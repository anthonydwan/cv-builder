import React from "react";
import DotPoint from "./DotPoint";
import RenderTextInput from "./RenderTextInput";

function RenderCard(props) {
  const { workSection, workList, changeWork, addWork, removeWork } = props.card;
  const { respSubS, respList, changeResp, addResp, removeResp } = props.dp;

  return (
    <React.Fragment>
      {Object.keys(workList).map((key) => (
        <div
          className={`${workSection}--block card--block`}
          key={`${workSection}_${key}`}
          data-name={`${workSection}_${key}`}
        >
          <RenderTextInput
            passedObj={workList[key]}
            handler={changeWork}
            index={key}
          />
          <DotPoint
            subsection={respSubS}
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
