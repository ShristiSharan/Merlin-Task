import React, { useState } from "react";
import InputBox from "../components/InputBox";
import  FrequentlyCommands  from "../components/FrequentlyCommands";
import ResultBox from "../components/ResultBox";
import { AddExtension } from "../components/AddExtension";
import axios from 'axios';

const API_KEY = ""; // Replace with your actual OpenAI API key

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [highlightedOption, setHighlightedOption] = useState(null);

  // const handleSelectedOptionChange = (option) => {
  //   setSelectedOption(option);
  //   setHighlightedOption(option);
  // };

  const handleSubmit = async (inputText) => {
    if (!inputText) {
      alert('Please enter some text');
    return; // Prevent submitting empty input
    }

    // setInput("");


    // If no option is selected, return
    if (!selectedOption) {
      alert("Please select an option before submitting.");
      return;
    }
    setIsLoading(true);

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
        prompt = "Customer Thankyou! commands";
    }

  const customPrompt = input + " " + prompt;
 
  console.log(customPrompt);

    try {
      const response=await fetchOpenAI(customPrompt);
      setResult(response.data.choices[0].text);
    } catch(error){
      console.error('Error:',error);
      setResult("An error occurred! Please try again");
      }finally{
        setIsLoading(false);
      }
    };

    const fetchOpenAI=async(prompt) => {
      const response = await axios.post('https://api.openai.com/v1/completions', 
      {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 150,
      }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + API_KEY, // Replace with your actual OpenAI API key
        },
      });
      return response;
    };
      
  return (
    <div>
      <InputBox handleSubmit={handleSubmit} setInput={setInput}/>
      <FrequentlyCommands  setSelectedOption={setSelectedOption}/>   
      <button onClick={handleSubmit}>Submit</button>
      <ResultBox result={isLoading ?  "Loading..." : result} />
      <AddExtension />
    </div>
  );
};

export default Home;