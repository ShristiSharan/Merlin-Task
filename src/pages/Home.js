import React, { useState } from "react";
import InputBox from "../components/InputBox";
import  FrequentlyCommands  from "../components/FrequentlyCommands";
import ResultBox from "../components/ResultBox";
// import { handleSubmit } from "../utlis/handleSubmit";
import { AddExtension } from "../components/AddExtension";
import axios from 'axios';



const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  // const [resultArray, setResultArray] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);


  const handleSelectedOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = async () => {
    if (!input) return; // Prevent submitting empty input

    // Clear previous result
    setResult("");

    // If no option is selected, return
    if (!selectedOption) {
      alert("Please select an option before submitting.");
      return;
    }

    let prompt;
    switch (selectedOption) {
      case 'Grammarly':
        prompt = "Correct the grammatical mistakes.";
        break;
      case 'Summarize':
        prompt = "Summarize the text :";
        break;
        case 'Expand':
          prompt = "Expand the text:";
          break;
        case 'Improve':
          prompt = "Modify the text:";
          break;
        case 'Paraphrase':
          prompt = "Paraphrase the text:";
          break;
        case 'Simplify':
          prompt = "Simplify the text:";
          break;
        case 'Explain':
          prompt = "Explain the text in layman:";
          break;
        case 'Translate':
          prompt = "Translate in hindi:";
          break;
      default:
        prompt = "";
    }

    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: input + " " + prompt,
        max_tokens: 150,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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', // Replace with your actual OpenAI API key
        },
      });

      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
      setResult("Error fetching result. Please try again.");
    }
  };

  // const handleChange = (val) => {
  //   setResultArray((prev) => [...prev, val]);
  // };

  // const submitHandler = () => {
  //   setResultArray([]);
  //   handleSubmit(input, handleChange);
  // };

  // const handleRefresh = () => {
  //   setResultArray([]);
  //   handleSubmit(input, handleChange);
  // };

  // useEffect(() => {
  //   setResult(resultArray.join(""));
  // }, [resultArray]);

  return (
    <div>
      <InputBox
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
      <FrequentlyCommands  setSelectedOption={handleSelectedOptionChange}/>
      <ResultBox
        result={result}
        setResult={setResult}
        
      />
      <AddExtension />
    </div>
  );
};

export default Home;