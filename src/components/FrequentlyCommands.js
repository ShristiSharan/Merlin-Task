import React, {useState} from "react";
import { CapsuleButton } from "./CapsuleButton";
import { GrammarIcon } from "../assests/icons/GrammarIcon";
import { SummariseIcon } from "../assests/icons/SummariseIcon";
import { ExpandIcon } from "../assests/icons/ExpandIcon";
import { ImproveIcon } from "../assests/icons/ImproveIcon";
import { ParaphraseIcon } from "../assests/icons/ParaphraseIcon";
import { SimplifyIcon } from "../assests/icons/SimplifyIcon";
import { ExplainIcon } from "../assests/icons/ExplainIcon";
// import { translateIcon} from "../assests/icons/translatelcon";


const FrequentlyCommands = (setSelectedOption) => {
  const [highlightedButtons, setHighlightedButtons] = useState('');
  
  const handleButtonClick = (selectedTask) => {
    setSelectedOption(selectedTask)
    setHighlightedButtons(selectedTask);
  };


  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-row w-full md:w-[840px] items-center justify-center mt-0 mb-2 font-medium">
        <p className="text-md md:text-lg text-center font-semibold text-[#94A3B8]">
          Frequently used commands
        </p>
      </div>
      <div className="flex flex-row flex-wrap w-[350px] md:w-[940px] items-center justify-center  font-medium">
        <CapsuleButton title="Grammarly" children={<GrammarIcon />} onClick={() =>  handleButtonClick('Grammarly')} highlighted={highlightedButtons==='Grammarly'} />
        <CapsuleButton title="Summarize" children={<SummariseIcon />} onClick={() => handleButtonClick('Summarize')} highlighted={highlightedButtons==='Summarize'} />
        <CapsuleButton title="Expand" children={<ExpandIcon />} onClick={() => handleButtonClick('Expand')} highlighted={highlightedButtons==='Expand'} />
        <CapsuleButton title="Improve" children={<ImproveIcon />} onClick={() =>  handleButtonClick('Improve')} highlighted={highlightedButtons==='Improve'} />
        <CapsuleButton title="Paraphrase" children={<ParaphraseIcon />} onClick={() =>  handleButtonClick('Paraphrase')} highlighted={highlightedButtons==='Paraphrase'} />
        <CapsuleButton title="Simplify" children={<SimplifyIcon />} onClick={() => handleButtonClick('Simplify')} highlighted={highlightedButtons==='Simplify'} />
        <CapsuleButton title="Explain" children={<ExplainIcon />} onClick={() => handleButtonClick('Explain')} highlighted={highlightedButtons==='Explain'} />
        {/* <CapsuleButton title="Translate" children={<translateIcon/>} onClick={() => handleButtonClick('Translate')} /> */}
      </div>
      
    </div>
  );
};

export default FrequentlyCommands;





