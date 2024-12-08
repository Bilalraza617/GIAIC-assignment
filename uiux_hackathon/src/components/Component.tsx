import Image from "next/image";
import React from "react";

const Component = () => {
  return (
    <div>
      <div className="bg-white flex items-center justify-center w-[60%] m-auto py-10">
        <Image
          src="/HI.png"
          alt="Ashton LIVE"
          width={500}
          height={500}
          className="w-[80%] object-cover"
        />
      </div>
    </div>
  );
};

export default Component;
