import { ArrowSquareOut } from "phosphor-react";

const Card = ({ title, description }) => {
  return (
    <div className="relative bg-neutral-800 p-6 rounded-lg flex flex-col gap-1 transition hover:bg-neutral-700">
      <ArrowSquareOut
        size={20}
        className="absolute top-2 right-2 transition hover:text-neutral-100"
      />
      <h2 className="text-neutral-100 text-lg">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
