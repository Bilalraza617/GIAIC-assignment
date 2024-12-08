import Image from "next/image";
import React from "react";

const Components = () => {
  return (
    <div>
      <div className="flex justify-center space-x-4">
        <Image
          src="/HI.png"
          alt="Ashton LIVE"
          className="h-12 bg-red-400"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Components;
