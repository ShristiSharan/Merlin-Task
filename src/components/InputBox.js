import React , {useState}from "react";
import { FaArrowAltCircleRight } from 'react-icons/fa'; 

const InputBox = ({ handleSubmit }) => {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);


  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   handleSubmit(inputText);
  // };

  const handleArrowClick = () => {
    if (!inputText.trim()) {
      alert("Please enter text before submitting.");
      return;
    }
    handleSubmit(inputText, selectedOption);
    setSelectedOption(null);
  };

  

  return (
    <div className="flex justify-center items-center mt-6">
    <input
      type="text"
      placeholder="Enter your text here..."
      value={inputText}
      onChange={handleInputChange}
      className="w-full md:w-1/2 lg:w-2/3 px-4 py-3 rounded-lg bg-white border $ border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <button type="button" onClick={handleArrowClick} className="hover:pg-purple-500 hover:text-white focus:outline-none">
      <FaArrowAltCircleRight size='4em' style={{ border: "2px solid purple", borderRadius: "50%" }}/>
    </button>
  </div>

  );
};

export default InputBox;


// const InputBox = ({ input, setInput, submitHandler }) => {
//   //   const [input, setInput] = useState("");

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

// //   bind enter key to submit
//     useEffect(() => {
//         const handleEnter = (e) => {
//             if (e.key === "Enter") {
//                 submitHandler();
//             }
//         };
//         window.addEventListener("keydown", handleEnter);
//         return () => {
//             window.removeEventListener("keydown", handleEnter);
//         };
//     }, []);

//   return (
//     <div className="flex flex-row w-[250px] md:w-[840px] items-center self-center mx-auto justify-center my-2 font-medium rounded-lg bg-gradient-to-r from-[#921dfb80] via-[#F334F2] to-[#ff008280] p-[2px]">
//       <div className="flex flex-row w-full bg-[#1E293B] rounded-md items-center">
//         <input
//           type="text"
//           className="w-[90%] h-[30px] md:h-[50px] bg-[#1E293B]  border-none rounded-md border-white  text-white text-md  px-4 focus:outline-none"
//           placeholder="Ask Merlin"
//           value={input}
//           onChange={handleChange}
//         />
//         <div
//           className="self-center mx-auto mr-2 md:mr-4"
//           onClick={submitHandler}
//         >
//           <SubmitArrow />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InputBox;
