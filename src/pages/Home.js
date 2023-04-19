import React, { useState, useEffect } from "react";
import InputBox from "../components/InputBox";
import { FrequentlyCommands } from "../components/FrequentlyCommands";
import ResultBox from "../components/ResultBox";
import { handleSubmit } from "../utils/handleSubmit";
import { useUIContext } from "../context/UiContext";
import { AddExtension } from "../components/AddExtension";

const Home = () => {
  const { allResults, setAllResults, disableRefresh, setDisableRefresh } =
    useUIContext();

  const [input, setInput] = useState("");
  const [result, setResult] = useState();
  const [resultArray, setResultArray] = useState([]);

  const handleChange = (val) => {
    setResultArray((prev) => [...prev, val]);
  };
  const setDisable = (val) => {
    setDisableRefresh(val);
  };
 
  const submitHandler = (e) => {
    setAllResults([]);
    setResultArray([]);
    setResult("");
    handleSubmit(input, handleChange, setDisable);
  };
  const setResultHandler = (val) => {
    setResult(allResults[val]);
  };
  
  const handleRefresh = () => {
    if (disableRefresh) return;
    setResultArray([]);
    setResult("");
    setAllResults(prev=>[...prev,""])
    handleSubmit(input, handleChange, setDisable);
  };
  useEffect(() => {
    setResult(resultArray.join(""));
    // update the last element of the all Results array
    setAllResults((prev) => [...prev.slice(0, -1), result]);
  }, [resultArray]);

  return (
    <div>
      <InputBox
        input={input}
        setInput={setInput}
        submitHandler={submitHandler}
      />
      <FrequentlyCommands />
      <ResultBox
        result={result}
        setResult={setResultHandler}
        handleRefresh={handleRefresh}
      />
      <AddExtension />
    </div>
  );
};

export default Home;
