import React from "react";
import { CopyIcon } from "../assests/icons/CopyIcon";
import { RefreshIcon } from "../assests/icons/RefreshIcon";

const ResultBox = ({ result, handleRefresh }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col w-[350px] md:w-[840px] items-center self-center mx-auto justify-center my-2 font-medium rounded-md border-[1px]  py-4 border-[#334155]">
      <div className="flex flex-row w-full  rounded-md items-center justify-between ml-8">
        <div>
          <h1 className="text-[#F8FAFC] font-bold text-xl">Merlin Says: {" "}</h1>
        </div>
        <div className="flex flex-row items-center justify-center hover:cursor-pointer mr-4">
          <div
            className={`flex flex-row items-center justify-between mx-2 bg-[#334155] px-2 py-2 rounded-md hover:cursor-pointer`}
            onClick={handleRefresh}
          >
            <RefreshIcon />
          </div>
          <div
            className="flex flex-row items-center justify-between mx-2 bg-[#334155] px-2 py-2 rounded-md hover:cursor-pointer leading-7"
            onClick={() => copyToClipboard(result)}
          >
            <CopyIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-4 mx-4 h-[200px] overflow-y-scroll  border-t-[1px] border-[#334155]">
        <p className="text-[#FAFAF9] p-4 text-justify text-[14px]">{result}</p>
      </div>
    </div>
  );
};

export default ResultBox;




