import React, { useState } from "react";
import InputBox from "../components/InputBox";
import  FrequentlyCommands  from "../components/FrequentlyCommands";
import ResultBox from "../components/ResultBox";
import { AddExtension } from "../components/AddExtension";
import axios from 'axios';


const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  // const [resultArray, setResultArray] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitAccess, setSubmitAccess] = useState(false); // State for checkbox


  const handleSelectedOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = async (inputText) => {
    if (!input) return; // Prevent submitting empty input

    // Clear previous result
    setInput("");

    // If no option is selected, return
    if (!selectedOption) {
      alert("Please select an option before submitting.");
      return;
    }
    setSelectedOption(null); // Reset selected option
    const handleCheckboxChange = (e) => {
      setSubmitAccess(e.target.checked);
    };

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
        prompt = "hiiii I love you in all languages";
    }
      // Debug: Output generated prompt to console
  console.log("Generated Prompt:", inputText + " " + prompt);

    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: input + " " + prompt,
        max_tokens: 150,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer  _', // Replace with your actual OpenAI API key
          // 'Authorization': 'Bearer Your_OpenAPI_Key', // Replace with your actual OpenAI API key

        },
      });

      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
      setResult("Error fetching result. Please try again.");
    }
  };

  return (
    <div>
      <InputBox handleSubmit={handleSubmit}/>
      <FrequentlyCommands  setSelectedOption={handleSelectedOptionChange}/>
      {submitAccess && <button onClick={() => handleSubmit(input)}>Submit</button>}
      <ResultBox
        result={result}/>
      <AddExtension />
    </div>
  );
};

export default Home;