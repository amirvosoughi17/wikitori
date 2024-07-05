"use clinet";
import { TypeAnimation } from "react-type-animation";

const TypeingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'ویکیطوری , ',
        1000, 
        'ویکیطوری , اولین اژانس تخصصی ویکیپدیا',
        1000,

      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
      className="font-semibold max-w-[85%] mx-auto text-[2rem] md:text-[2.3rem] text-white z-40 inline-block text-center min-h-[100px] sm:min-h-[0px] "
    />
  );
};

export default TypeingAnimation;
