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
    <div className="my-32 w-[60%] m-auto">
      <h1 className="text-5xl text-navyBlue text-center font-extrabold">Featured Products</h1>
      <div className="flex justify-between my-10">
        {item.map((data: { image: string }, index) => {
          return (
            <div key={index}>
              <div className="shadow-lg flex flex-col items-center w-60 h-70">
                <div className="relative w-30 h-30 max-h-30 bg-gray-100">
                  <Image
                    // src={"/" + data.image + "png"}
                    src={`/${data.image}.png`}
                    alt={'Product'}
                    width={500}
                    height={500}
                    className='object-cover w-full h-full bg-gray-100 p-8'
                  />
                  {/* <button className="absolute bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                    View Details
                  </button> */}
                </div>
                <div>
                  <div className="details my-4 flex flex-col justify-center items-center gap-1">
                    <h3 className="text-xl font-bold text-pinkDefault">Cantilever chair</h3>
                    <p className="text-gray-600">Code - Y523201</p>
                    <div className="flex items-center justify-center gap-2">
                      {/* {product.colorVariants.map((color, i) => ( */}
                      <span
                        // key={i}
                        className="w-4 h-1 rounded-full"
                        style={{ backgroundColor: '#87968' }}
                      ></span>
                      <span
                        // key={i}
                        className="w-4 h-1 rounded-full"
                        style={{ backgroundColor: '#3e3e3e' }}
                      ></span>
                      <span
                        // key={i}
                        className="w-4 h-1 rounded-full"
                        style={{ backgroundColor: '#6d6d6d' }}
                      ></span>
                      {/* ))} */}
                    </div>
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
