const Banner3 = ({ name }: { name: string }) => {
  return (
    <div className="bg-gray-200 h-80 flex flex-col items-center justify-center">
      <div className="w-[60%]">
        <h1
          className="text-4xl font-extrabold text-[#101750]"
          style={{ fontWeight: "800" }}
        >
          {name}
        </h1>
        <p className="text-black">
          Home . Pages <span className="text-[#FB2E86]">. {name}</span>
        </p>
      </div>
    </div>
  );
};

export default Banner3;
