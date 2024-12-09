import Image from "next/image";

const features = [
  {
    image: "S1",
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "S2",

    title: "Money Back Guarantee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "S3",

    title: "Top Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "S4",

    title: "Customer Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

export default function Shopex() {
  return (
    <div className="bg-white py-12 w-[60%] m-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-navyBlue text-center font-extrabold">
          What Shopex Offer!
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col justify-center gap-3 shadow-md p-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  src={`/${feature.image}.png`}
                  alt="img"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="mt-4 text-xl leading-6 font-medium text-navyBlue">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
