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
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          What Shopex Offer!
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex">
                <Image
                  src={`/${feature.image}.png`}
                  alt="img"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
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
