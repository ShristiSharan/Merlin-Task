import React from "react";

const Header = () => {
  return (
    <section className="w-full h-[200px] md:h-[350px] bg-transparent header">
      {/* Logo and name in the center of the component */}
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-row">
          <div className="flex flex-row">
            <div className="flex flex-col items-center justify-center mx-2">
              <img
                src={require("../assets/Group.png")}
                alt="Logo"
                className="w-[50px] h-[50px] self-center my-aut"
              />
            </div>
            <div className="flex flex-col items-center justify-center mx-2">
              <img
                src={require("../assets/Vector.png")}
                alt="Logo"
                className="w-[180px] h-[50px] self-center my-aut"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[250px] md:w-[440px] items-center justify-center my-4 font-medium">
            <p className="text-md md:text-lg text-center text-white">
            Unleash the power of creativity with Merlin, the ultimate tool for marketers! Say goodbye  
            </p>
</div>
      </div>
    </section>
  );
};
export default Header;
