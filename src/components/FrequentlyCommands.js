import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { GrammarIcon } from "../assests/icons/GrammarIcon";
import { SummariseIcon } from "../assests/icons/SummariseIcon";
import { ExpandIcon } from "../assests/icons/ExpandIcon";
import { ImproveIcon } from "../assests/icons/ImproveIcon";
import { ParaphraseIcon } from "../assests/icons/ParaphraseIcon";
import { SimplifyIcon } from "../assests/icons/SimplifyIcon";
import { ExplainIcon } from "../assests/icons/ExplainIcon";
// import { translateIcon} from "../assests/icons/translatelcon";

const FrequentlyCommands = ({ setSelectedOption }) => {
  
  const handleButtonClick = (selectedTask) => {
    setSelectedOption(selectedTask); // Update the selected option

  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-row w-full md:w-[840px] items-center justify-center mt-0 mb-2 font-medium">
        <p className="text-md md:text-lg text-center font-semibold text-[#94A3B8]">
          Frequently used commands
        </p>
      </div>
      <div className="flex flex-row flex-wrap w-[350px] md:w-[940px] items-center justify-center  font-medium">
        <CapsuleButton title="Grammarly" children={<GrammarIcon />} onClick={() => { handleButtonClick('Grammarly'); setSelectedOption('Grammarly'); }} />
        <CapsuleButton title="Summarize" children={<SummariseIcon />} onClick={() => { handleButtonClick('Summarize'); setSelectedOption('Summarize'); }} />
        <CapsuleButton title="Expand" children={<ExpandIcon />} onClick={() => { handleButtonClick('Expand'); setSelectedOption('Expand'); }} />
        <CapsuleButton title="Improve" children={<ImproveIcon />} onClick={() => { handleButtonClick('Improve'); setSelectedOption('Improve'); }} />
        <CapsuleButton title="Paraphrase" children={<ParaphraseIcon />} onClick={() => { handleButtonClick('Paraphrase'); setSelectedOption('Paraphrase'); }} />
        <CapsuleButton title="Simplify" children={<SimplifyIcon />} onClick={() => { handleButtonClick('Simplify'); setSelectedOption('Simplify'); }} />
        <CapsuleButton title="Explain" children={<ExplainIcon />} onClick={() => { handleButtonClick('Explain'); setSelectedOption('Explain'); }} />
        {/* <CapsuleButton title="Translate" children={<translateIcon/>} onClick={() => handleButtonClick('Translate')} /> */}
      </div>
    </div>
  );
};

export default FrequentlyCommands;





// import React, { useState } from "react";
// import { CapsuleButton } from "./CapsuleButton";
// import { GrammarIcon } from "../assests/icons/GrammarIcon";
// import { SummariseIcon } from "../assests/icons/SummariseIcon";
// import { ExpandIcon } from "../assests/icons/ExpandIcon";
// import { ImproveIcon } from "../assests/icons/ImproveIcon";
// import { ParaphraseIcon } from "../assests/icons/ParaphraseIcon";
// import { SimplifyIcon } from "../assests/icons/SimplifyIcon";
// import { ExplainIcon } from "../assests/icons/ExplainIcon";
// // import { translateIcon} from "../assests/icons/translatelcon";
// import axios from 'axios';
// import InputBox from "./InputBox";
// import ResultBox from "./ResultBox";

// const FrequentlyCommands = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleButtonClick = async (selectedTask) => {
//       let prompt;
//       switch (selectedTask) {
//         case 'Grammarly':
//           prompt = "Correct the grammatical mistakes.";
//           break;
//         case 'Summarize':
//           prompt = "Summarize the text :";
//           break;
//         case 'Expand':
//           prompt = "Expand the text:";
//           break;
//         case 'Improve':
//           prompt = "Modify the text:";
//           break;
//         case 'Paraphrase':
//           prompt = "Paraphrase the text:";
//           break;
//         case 'Simplify':
//           prompt = "Simplify the text:";
//           break;
//         case 'Explain':
//           prompt = "Explain the text in layman:";
//           break;
//         case 'Translate':
//           prompt = "Translate in hindi:";
//           break;
//         default:
//           prompt = `Provide input text for the task: ${selectedTask}`;
//       }

//   setInput(prompt);
//   handleSubmit();
//     };
//   const handleSubmit = async () => {
//         try {
//       const response = await axios.post('https://api.openai.com/v1/completions', {
//         model: 'text-davinci-003',
//         prompt: prompt,
//         max_tokens: 150,
//     },{
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer Your_openapikey', // Replace with your actual OpenAI API key
//       },
//       });

//       setResult(response.data.choices[0].text);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center ">
//       <div className="flex flex-row w-full md:w-[840px] items-center justify-center mt-0 mb-2 font-medium">
//         <p className="text-md md:text-lg text-center font-semibold text-[#94A3B8]">
//           Frequently used commands
//         </p>
//       </div>
//       <div className="flex flex-row flex-wrap w-[350px] md:w-[940px] items-center justify-center  font-medium">
//         <CapsuleButton title="Grammarly" children={<GrammarIcon />} onClick={() => handleButtonClick('Grammarly')} />
//         <CapsuleButton title="Summarize" children={<SummariseIcon />} onClick={() => handleButtonClick('Summarize')} />
//         <CapsuleButton title="Expand" children={<ExpandIcon />} onClick={() => handleButtonClick('Expand')} />
//         <CapsuleButton title="Improve" children={<ImproveIcon />} onClick={() => handleButtonClick('Improve')} />
//         <CapsuleButton title="Paraphrase" children={<ParaphraseIcon />} onClick={() => handleButtonClick('Paraphrase')} />
//         <CapsuleButton title="Simplify" children={<SimplifyIcon />} onClick={() => handleButtonClick('Simplify')} />
//         <CapsuleButton title="Explain" children={<ExplainIcon />} onClick={() => handleButtonClick('Explain')} />
//         {/* <CapsuleButton title="Translate" children={<translateIcon/>} onClick={() => handleButtonClick('Translate')} /> */}
//       </div>
//       <InputBox input={input} setInput={setInput} handleSubmit={handleSubmit} />
//       <ResultBox result={result} />
//     </div>
//   );
// };

// export default FrequentlyCommands;
