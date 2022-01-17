import "./App.css";
import ViewDoc from "./components/ViewDoc";
import ResumeForm from "./components/ResumeForm";
import React, { useState } from "react";
import {
  tempEdu,
  tempWork,
  tempOther,
  initEdu,
  initOther,
  initWork,
  tempResp,
  tempDesc,
} from "./templates";

function App() {
  const handleAddCard = (
    template,
    count,
    counter,
    setter,
    dpSetter,
    dpTemplate
  ) => {
    setter((prevList) => ({
      ...prevList,
      [count + 1]: template,
    }));
    dpSetter((prevDPList) => ({
      ...prevDPList,
      [`${count + 1}_0`]: dpTemplate,
    }));
    counter((prevNum) => prevNum + 1);
  };

  const handleChangeCard = (e, setter) => {
    const inputBox = e.target.getAttribute("data-input");
    const cardIndex = e.target.getAttribute("data-prim-num");
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

  const handleRemoveCard = (e, currList, setter) => {
    const cardIndex = e.target.getAttribute("data-prim-num");
    const newObj = {};
    Object.assign(newObj, currList);
    delete newObj[`${cardIndex}`];
    setter(newObj);
  };

  const HandleAddDP = (e, dpNum, dpSetter, dpCounter, dpTemplate) => {
    const cardIndex = e.target.getAttribute("data-prim-num");
    dpSetter((prevDPList) => ({
      ...prevDPList,
      [`${cardIndex}_${dpNum + 1}`]: dpTemplate,
    }));
    dpCounter((prevDPNum) => prevDPNum + 1);
  };

  const HandleRemoveDP = (e, currDPList, dpSetter) => {
    const cardIndex = e.target.getAttribute("data-prim-num");
    const dpIndex = e.target.getAttribute("data-sub-num");
    const newObj = {};
    Object.assign(newObj, currDPList);
    delete newObj[`${cardIndex}_${dpIndex}`];
    dpSetter(newObj);
  };

  const HandleChangeDP = (e, dpSetter) => {
    const cardIndex = e.target.getAttribute("data-prim-num");
    const dpIndex = e.target.getAttribute("data-sub-num");
    dpSetter((prevDPList) => ({
      ...prevDPList,
      [`${cardIndex}_${dpIndex}`]: {
        ...prevDPList[`${cardIndex}_${dpIndex}`],
        value: e.target.value,
      },
    }));
  };

  const [workNum, addWorkNum] = useState(0);
  const [workList, setWorkList] = useState({ [workNum]: initWork });

  const [eduNum, addEduNum] = useState(0);
  const [eduList, setEduList] = useState({ [eduNum]: initEdu });

  const [otherNum, addOtherNum] = useState(0);
  const [otherList, setOtherList] = useState({ [otherNum]: initOther });

  const addWork = () =>
    handleAddCard(
      tempWork,
      workNum,
      addWorkNum,
      setWorkList,
      setRespList,
      tempResp
    );
  const changeWork = (e) => handleChangeCard(e, setWorkList);
  const removeWork = (e) => handleRemoveCard(e, workList, setWorkList);

  const addEdu = () =>
    handleAddCard(
      tempEdu,
      eduNum,
      addEduNum,
      setEduList,
      setEduDescList,
      tempDesc
    );
  const changeEdu = (e) => handleChangeCard(e, setEduList);
  const removeEdu = (e) => handleRemoveCard(e, eduList, setEduList);

  const addOther = () =>
    handleAddCard(
      tempOther,
      otherNum,
      addOtherNum,
      setOtherList,
      setOtherDescList,
      tempDesc
    );
  const changeOther = (e) => handleChangeCard(e, setOtherList);
  const removeOther = (e) => handleRemoveCard(e, otherList, setOtherList);

  const [respNum, addRespNum] = useState(0);
  const [respList, setRespList] = useState({
    [`${workNum}_${respNum}`]: tempResp,
  });

  const [eduDescNum, addEduDescNum] = useState(0);
  const [eduDescList, setEduDescList] = useState({
    [`${eduNum}_${eduDescNum}`]: tempDesc,
  });

  const [otherDescNum, addOtherDescNum] = useState(0);
  const [otherDescList, setOtherDescList] = useState({
    [`${otherNum}_${otherDescNum}`]: tempDesc,
  });

  const addResp = (e) =>
    HandleAddDP(e, respNum, setRespList, addRespNum, tempResp);
  const removeResp = (e) => HandleRemoveDP(e, respList, setRespList);
  const changeResp = (e) => HandleChangeDP(e, setRespList);

  const addEduDesc = (e) =>
    HandleAddDP(e, eduDescNum, setEduDescList, addEduDescNum, tempDesc);
  const removeEduDesc = (e) => HandleRemoveDP(e, eduDescList, setEduDescList);
  const changeEduDesc = (e) => HandleChangeDP(e, setEduDescList);

  const addOtherDesc = (e) =>
    HandleAddDP(e, otherDescNum, setOtherDescList, addOtherDescNum, tempDesc);
  const removeOtherDesc = (e) =>
    HandleRemoveDP(e, otherDescList, setOtherDescList);
  const changeOtherDesc = (e) => HandleChangeDP(e, setOtherDescList);

  const workObj = {
    sectionName: "Work",
    cardList: workList,
    changeCard: changeWork,
    addCard: addWork,
    removeCard: removeWork,
  };
  const respObj = {
    subsecName: "Responsibility",
    dpList: respList,
    changeDP: changeResp,
    addDP: addResp,
    removeDP: removeResp,
  };

  const eduObj = {
    sectionName: "Education",
    cardList: eduList,
    changeCard: changeEdu,
    addCard: addEdu,
    removeCard: removeEdu,
  };
  const eduDescObj = {
    subsecName: "Description",
    dpList: eduDescList,
    changeDP: changeEduDesc,
    addDP: addEduDesc,
    removeDP: removeEduDesc,
  };

  const otherObj = {
    sectionName: "Other",
    cardList: otherList,
    changeCard: changeOther,
    addCard: addOther,
    removeCard: removeOther,
  };
  const otherDescObj = {
    subsecName: "Details",
    dpList: otherDescList,
    changeDP: changeOtherDesc,
    addDP: addOtherDesc,
    removeDP: removeOtherDesc,
  };

  const workState = { workObj, respObj };
  const eduState = { eduObj, eduDescObj };
  const otherState = { otherObj, otherDescObj };

  const workLists = { workList, respList };
  const eduLists = { eduList, eduDescList };
  const otherLists = { otherList, otherDescList };

  return (
    <div className="App">
      <ResumeForm
        workSection={workState}
        eduSection={eduState}
        otherSection={otherState}
      />
      <ViewDoc
        workSection={workLists}
        eduSection={eduLists}
        otherSection={otherLists}
      />
    </div>
  );
}

export default App;
