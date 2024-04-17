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


const FrequentlyCommands = (setSelectedOption,handleArrowClick) => {
  // const [highlightedButtons, setHighlightedButtons] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');

  
  const handleButtonClick = (selectedTask) => {
    setSelectedOption(selectedTask)
    setSelectedTask(selectedTask);
    // setHighlightedButtons(true);

  };
  const isSelected = (task) => {
    return selectedTask === task;
  };

  // useEffect(() => {
  //   if (handleArrowClick) {
  //     // If handleArrowClick is not empty, then trigger highlighting of capsule buttons
  //     // setHighlightedButtons(true);
  //   }
  // }, [handleArrowClick]);



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
          highlighted={isSelected("Grammarly")}
        />
        <CapsuleButton
          title="Summarize"
          children={<SummariseIcon />}
          onClick={() => handleButtonClick("Summarize")}
          highlighted={isSelected("Summarize")}
        />
        <CapsuleButton
          title="Expand"
          children={<ExpandIcon />}
          onClick={() => handleButtonClick("Expand")}
          highlighted={isSelected("Expand")}
        />
        <CapsuleButton
          title="Improve"
          children={<ImproveIcon />}
          onClick={() => handleButtonClick("Improve")}
          highlighted={isSelected("Improve")}
        />
        <CapsuleButton
          title="Paraphrase"
          children={<ParaphraseIcon />}
          onClick={() => handleButtonClick("Paraphrase")}
          highlighted={isSelected("Paraphrase")}
        />
        <CapsuleButton
          title="Simplify"
          children={<SimplifyIcon />}
          onClick={() => handleButtonClick("Simplify")}
          highlighted={isSelected("Simplify")}
        />
        <CapsuleButton
          title="Explain"
          children={<ExplainIcon />}
          onClick={() => handleButtonClick("Explain")}
          highlighted={isSelected("Explain")}/>
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





