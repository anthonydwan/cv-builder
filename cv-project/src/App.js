import "./App.css";
import ViewDoc from "./components/ViewDoc";
import ResumeForm from "./components/ResumeForm";
import React, { useState } from "react";
import github from "./github.png";

import {
  tempEdu,
  tempWork,
  tempOther,
  initEdu,
  initOther,
  initWork,
  tempResp,
  initResp,
  tempDesc,
  initEduDesc,
  initOtherDesc,
  personal,
  personalDesc,
} from "./templates";

function App() {
  const [initPerson, setPerson] = useState(personal);
  const [initPersonDesc, setpersonDesc] = useState(personalDesc);

  const handlePerson = (e) => {
    const category = e.target.getAttribute("data-input");
    setPerson({
      ...initPerson,
      [category]: {
        ...initPerson[category],
        value: e.target.value,
      },
    });
  };

  const handleDesc = (e) => {
    const category = e.target.getAttribute("data-input");
    setpersonDesc({
      ...initPersonDesc,
      [category]: {
        ...initPersonDesc[category],
        value: e.target.value,
      },
    });
  };

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

  const [workNum, addWorkNum] = useState(2);
  const [workList, setWorkList] = useState(initWork);

  const [eduNum, addEduNum] = useState(1);
  const [eduList, setEduList] = useState(initEdu);

  const [otherNum, addOtherNum] = useState(1);
  const [otherList, setOtherList] = useState(initOther);

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

  const [respNum, addRespNum] = useState(3);
  const [respList, setRespList] = useState(initResp);

  const [eduDescNum, addEduDescNum] = useState(1);
  const [eduDescList, setEduDescList] = useState(initEduDesc);

  const [otherDescNum, addOtherDescNum] = useState(1);
  const [otherDescList, setOtherDescList] = useState(initOtherDesc);

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

  const personState = {
    initPerson,
    initPersonDesc,
    handlePerson,
    handleDesc,
  };

  const personList = { initPerson, initPersonDesc };

  return (
    <div>
      <div className="webTitle">CV Builder</div>
      <div className="App">
        <ResumeForm
          personSection={personState}
          workSection={workState}
          eduSection={eduState}
          otherSection={otherState}
        />
        <ViewDoc
          personSection={personList}
          workSection={workLists}
          eduSection={eduLists}
          otherSection={otherLists}
        />
      </div>
      <div>
        {" "}
        <a href="https://github.com/anthonydwan/odin_CV_builder/tree/main/cv-project">
          <img class="github" src={github} alt="github"></img>
        </a>
      </div>
    </div>
  );
}

export default App;
