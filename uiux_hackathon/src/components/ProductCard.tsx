import Image from "next/image";

const item = [
  {
    image: "1",
  },
  {
    image: "2",
  },
  {
    image: "3",
  },
  {
    image: "4",
  },
];

const ProductCard = () => {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="flex">
        {item.map((data: { image: string }, index) => {
          return (
            <div key={index}>
              <div>
                <div>
                  <Image
                    // src={"/" + data.image + "png"}
                    src={`/${data.image}.png`}
                    width={400}
                    height={400}
                    alt="img"
                  />
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                    View Details
                  </button>
                </div>
                <div>
                  <div className="details mt-4">
                    <h3 className="text-xl font-bold">Cantilever chair</h3>
                    <p className="text-gray-600">Code - Y523201</p>
                    <p className="text-gray-600">$42.00</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="colors flex gap-2 mt-2">
          <div className={`color-option rounded-full w-6 h-6`} />
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
