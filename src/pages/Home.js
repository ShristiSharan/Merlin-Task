import React, { useState, useEffect } from "react";
import InputBox from "../components/InputBox";
import { FrequentlyCommands } from "../components/FrequentlyCommands";
import ResultBox from "../components/ResultBox";
import { handleSubmit } from "../utlis/handleSubmit";
import { AddExtension } from "../components/AddExtension";

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [resultArray, setResultArray] = useState([]);

  const handleChange = (val) => {
    setResultArray((prev) => [...prev, val]);
  };

  const submitHandler = () => {
    setResultArray([]);
    handleSubmit(input, handleChange);
  };

  const handleRefresh = () => {
    setResultArray([]);
    handleSubmit(input, handleChange);
  };

  useEffect(() => {
    setResult(resultArray.join(""));
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
        setResult={setResult}
        handleRefresh={handleRefresh}
      />
      <AddExtension />
    </div>
  );
};

export default Home;