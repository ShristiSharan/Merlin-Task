import React, { useState, useEffect } from "react";
import { CopyIcon } from "../assets/icons/CopyIcon";
import { LeftArrowIcon } from "../assets/icons/LeftArrowIcon";
import { RefreshIcon } from "../assets/icons/RefreshIcon";
import { RightArrowIcon } from "../assets/icons/RightArrowIcon";
import { useUIContext } from "../context/UiContext";

const ResultBox = ({ result, setResult, handleRefresh }) => {
  const { allResults, disableRefresh } = useUIContext();
  const [counter, setCounter] = useState(allResults.length - 1);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  const handleLeftArrow = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };
  const handleRightArrow = () => {
    if (counter < allResults.length - 1) {
      setCounter((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setResult(counter);
  }, [counter]);
  useEffect(() => {
    setCounter(allResults.length - 1);
    }, [allResults]);

  return (
    <div className="flex flex-col w-[350px] md:w-[840px] items-center self-center mx-auto justify-center my-2 font-medium rounded-md border-[1px]  py-4 border-[#334155]">
      <div className="flex flex-row w-full  rounded-md items-center justify-between ml-8">
        <div>
          <h1 className="text-[#F8FAFC] font-bold text-xl">
            Merlin Says: {" "}
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center hover:cursor-pointer mr-4">
          {allResults.length > 1 && (
            <div className="flex flex-row h-[30px] w-[60px]  items-center justify-between mx-2 px-2 bg-[#334155]  rounded-md ">
              <div onClick={handleLeftArrow} className={counter===0&&"cursor-not-allowed"}>
                <LeftArrowIcon />
              </div>
              <div onClick={handleRightArrow} className={counter===(allResults.length-1)&&"cursor-not-allowed"}>
                <RightArrowIcon />
              </div>
            </div>
          )}
          <div
            className={`flex flex-row items-center justify-between mx-2 bg-[#334155] px-2 py-2 rounded-md hover:cursor-pointer ${
              disableRefresh ? "hover:cursor-not-allowed" : ""
            }`}
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
