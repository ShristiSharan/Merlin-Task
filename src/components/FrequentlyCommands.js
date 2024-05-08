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


const FrequentlyCommands = ({setSelectedOption}) => {
  const [selectedTask, setSelectedTask] = useState("");
  
  
  const handleButtonClick = (task) => {
    // If the clicked button is already selected, deselect it
    if (selectedTask === task) {
      setSelectedOption(null);
      setSelectedTask("");
    } else {
      setSelectedOption(task);
      setSelectedTask(task);
    }
  };
   

  // const isSelected = (task) => {
  //   return selectedTask === task;
  // };

//   const handleClick = (task) => {
//     setSelectedOption(task);
//     setSelectedTask(task);
// };

// Function to handle double click
const handleDoubleClick = () => {
  // Deselect the button
  setSelectedOption(null);
  setSelectedTask("");
};

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-row w-full md:w-[840px] items-center justify-center mt-0 mb-2 font-medium">
        <p className="text-md md:text-lg text-center font-semibold text-[#94A3B8]">
          Frequently used commands
        </p>
      </div>
      <div className="flex flex-row flex-wrap w-[350px] md:w-[940px] items-center justify-center  font-medium">
      <CapsuleButton
          title="Grammarly"
          children={<GrammarIcon />}
          onClick={() => handleButtonClick("Grammarly")}
          onDoubleClick={handleDoubleClick}
          highlighted={selectedTask === "Grammarly"}
        />
        <CapsuleButton
          title="Summarize"
          children={<SummariseIcon />}
          onClick={() => handleButtonClick("Summarize")}
          onDoubleClick={handleDoubleClick}
          highlighted={selectedTask === "Summarize"}
        />
        <CapsuleButton
          title="Expand"
          children={<ExpandIcon />}
          onClick={() => handleButtonClick("Expand")}
          onDoubleClick={handleDoubleClick}
          highlighted={selectedTask === "Expand"}
        />
        <CapsuleButton
          title="Improve"
          children={<ImproveIcon />}
          onClick={() => handleButtonClick("Improve")}
          onDoubleClick={handleDoubleClick}
          highlighted={selectedTask === "Improve"}
        />
        <CapsuleButton
          title="Paraphrase"
          children={<ParaphraseIcon />}
          onClick={() => handleButtonClick("Paraphrase")}
          onDoubleClick={handleDoubleClick}
          highlighted={selectedTask === "Paraphrase"}
        />
        <CapsuleButton
          title="Simplify"
          children={<SimplifyIcon />}
          onClick={() => handleButtonClick("Simplify")}
          onDoubleClick={handleDoubleClick}
          highlighted={selectedTask === "Simplify"}
        />
        <CapsuleButton
          title="Explain"
          children={<ExplainIcon />}
          onClick={() => handleButtonClick("Explain")}
          onDoubleClick={handleDoubleClick}
          highlighted={selectedTask === "Explain"}/>
        {/* <CapsuleButton title="Grammarly" children={<GrammarIcon />} onClick={() =>  handleButtonClick('Grammarly')} highlighted={isSelected('Grammarly') || highlightedButtons} />
        <CapsuleButton title="Summarize" children={<SummariseIcon />} onClick={() => handleButtonClick('Summarize')} highlighted={isSelected('Summarize')|| highlightedButtons} />
        <CapsuleButton title="Expand" children={<ExpandIcon />} onClick={() => handleButtonClick('Expand')} highlighted={isSelected('Expand')|| highlightedButtons} />
        <CapsuleButton title="Improve" children={<ImproveIcon />} onClick={() =>  handleButtonClick('Improve')} highlighted={isSelected('Improve')|| highlightedButtons} />
        <CapsuleButton title="Paraphrase" children={<ParaphraseIcon />} onClick={() =>  handleButtonClick('Paraphrase')} highlighted={isSelected('Paraphrase')|| highlightedButtons} />
        <CapsuleButton title="Simplify" children={<SimplifyIcon />} onClick={() => handleButtonClick('Simplify')} highlighted={isSelected('Simplify')|| highlightedButtons} />
        <CapsuleButton title="Explain" children={<ExplainIcon />} onClick={() => handleButtonClick('Explain')} highlighted={isSelected('Explain')|| highlightedButtons} /> */}
        {/* <CapsuleButton title="Translate" children={<translateIcon/>} onClick={() => handleButtonClick('Translate')} /> */}
      </div>
      
    </div>
  );
};

export default FrequentlyCommands;





