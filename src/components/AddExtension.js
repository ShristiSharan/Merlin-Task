import { useState } from 'react';
import { ChromeIcon } from "../assets/icons/ChromeIcon";
import { FirefoxIcon } from "../assests/icons/FirefoxIcon";

export const AddExtension = () => {

  const [showMessage, setShowMessage] = useState(false);

  // Function to handle click on "Add to Chrome" button
  const handleChromeClick = () => {
    setShowMessage(true);
  };

  // Function to handle click on "Add to Firefox" button
  const handleFirefoxClick = () => {
    setShowMessage(true);
  };
    // // Function to handle click on "Add to Chrome" button
    // const handleChromeClick = () => {
    //   // Redirect users to the Chrome Web Store to install the extension
    //   window.open('https://chrome.google.com/webstore/detail/your-extension-id', '_blank');
    // };
  
    // // Function to handle click on "Add to Firefox" button
    // const handleFirefoxClick = () => {
    //   // Redirect users to the Firefox Add-ons website to install the extension
    //   window.open('https://addons.mozilla.org/en-US/firefox/addon/your-extension-id/', '_blank');
    // };
  return (
    <div className="flex flex-row items-center justify-center my-4">
      <div className=" items-center justify-center rounded-md bg-gradient-to-r from-[#921dfb80] via-[#F334F2] to-[#ff008280] p-[2px] mx-4"
        onClick={handleChromeClick}>
        <div className="flex flex-row justify-between w-full bg-[#1E293B] rounded-md items-center p-3">
          <ChromeIcon />
          <p className="text-sm md:text-xs text-center font-semibold text-[#EDE9FE] mx-2">
            Add to Chrome
          </p>
        </div>
      </div>{" "}
      <div className=" items-center justify-center rounded-md bg-gradient-to-r from-[#921dfb80] via-[#F334F2] to-[#ff008280] p-[2px] mx-4"
        onClick={handleFirefoxClick}>
        <div className="flex flex-row justify-between w-full bg-[#1E293B] rounded-md items-center p-3">
          <FirefoxIcon />
          <p className="text-sm md:text-xs text-center font-semibold text-[#EDE9FE] mx-2">
            Add to Firefox
          </p>
        </div>
      </div>
      {/* Message block */}
      {showMessage && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-90 z-50">
          <div className="bg-white rounded-md p-4">
            <img src="/under-construction.png" alt="Under Construction" className="w-16 h-16 mx-auto mb-4" />
            <p className="text-lg text-center font-semibold text-gray-800">This feature is currently unavailable</p>
            <p className="text-sm text-center text-gray-600">We're working hard to bring this feature to you soon!</p>
    </div>
    </div>
  )};
  </div>
  );
};
