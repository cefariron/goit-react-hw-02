import { useState, useEffect } from "react";
import { loadLocalStorage, saveLocalStorage } from "../js-localstorage/storage";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
import currData from "../json-data/currdata.json";
import "./App.css";

const getCurrentData = () => {
  const savedData = loadLocalStorage("saved-data");
  return savedData ? savedData : currData;
};

export const App = () => {
  const [data, setData] = useState(getCurrentData);

  useEffect(() => {
    saveLocalStorage("saved-data", data);
  }, [data]);

  return (
    <>
      <Description />
      <Options data={data} setData={setData} />
      <Feedback data={data} />
    </>
  );
};
