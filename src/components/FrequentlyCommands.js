import { CapsuleButton } from "./CapsuleButton";
import { GrammarIcon } from "../assets/icons/GrammarIcon";
import { SummariseIcon } from "../assets/icons/SummariseIcon";
import { ExpandIcon } from "../assets/icons/ExpandIcon";
import { ImproveIcon } from "../assets/icons/ImproveIcon";
import { ParaphraseIcon } from "../assets/icons/ParaphraseIcon";
import { SimplifyIcon } from "../assets/icons/SimplifyIcon";
import { ExplainIcon } from "../assets/icons/ExplainIcon";
import { TranslateIcon } from "../assets/icons/TranslateIcon";

export const FrequentlyCommands = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-row w-full md:w-[840px] items-center justify-center mt-0 mb-2 font-medium">
        <p className="text-md md:text-lg text-center font-semibold text-[#94A3B8]">
          Frequently used commands
        </p>
      </div>
      <div className="flex flex-row flex-wrap w-[350px] md:w-[940px] items-center justify-center  font-medium">
        <CapsuleButton title="Grammarly" children={<GrammarIcon />} />
        <CapsuleButton title="Summarize" children={<SummariseIcon />} />
        <CapsuleButton title="Expand" children={<ExpandIcon />} />
        <CapsuleButton title="Improve" children={<ImproveIcon />} />
        <CapsuleButton title="Paraphrase" children={<ParaphraseIcon />} />
        <CapsuleButton title="Simplify" children={<SimplifyIcon />} />
        <CapsuleButton title="Explain" children={<ExplainIcon />} />
        <CapsuleButton title="Grammarly" children={<TranslateIcon />} />
      </div>
    </div>
  );
};
