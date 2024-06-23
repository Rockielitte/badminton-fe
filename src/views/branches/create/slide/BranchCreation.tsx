import React from "react";

// import bg from "@/public/assets/images/bg1.avif";

type Props = {};
const BranchCreation = (props: Props) => {
  return (
    <div className="relative flex size-full flex-col items-center justify-center backdrop-blur-3xl ">
      {/* <div className="absolute inset-0 -z-20 flex size-full items-center justify-center">
        <Image
          alt="bg"
          src={bg}
          className=" -z-10 h-full w-auto object-cover"
        />
      </div> */}
      <span className="text-xl font-semibold">
        Welcome to create your new badminton branch
      </span>
    </div>
  );
};

export default BranchCreation;
