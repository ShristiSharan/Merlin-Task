import { ChromeIcon } from "../assets/icons/ChromeIcon";
import { FirefoxIcon } from "../assets/icons/FirefoxIcon";

export const AddExtension = () => {
  return (
    <div className="flex flex-row items-center justify-center my-4">
      <div className=" items-center justify-center rounded-md bg-gradient-to-r from-[#921dfb80] via-[#F334F2] to-[#ff008280] p-[2px] mx-4">
        <div className="flex flex-row justify-between w-full bg-[#1E293B] rounded-md items-center p-3">
          <ChromeIcon />
          <p className="text-sm md:text-xs text-center font-semibold text-[#EDE9FE] mx-2">
            Add to Chrome
          </p>
        </div>
      </div>{" "}
      <div className=" items-center justify-center rounded-md bg-gradient-to-r from-[#921dfb80] via-[#F334F2] to-[#ff008280] p-[2px] mx-4">
        <div className="flex flex-row justify-between w-full bg-[#1E293B] rounded-md items-center p-3">
          <FirefoxIcon />
          <p className="text-sm md:text-xs text-center font-semibold text-[#EDE9FE] mx-2">
            Add to Firefox
          </p>
        </div>
      </div>
    </div>
  );
};
