import Image from "next/image";

import { Hero } from "../../../types";

const HeroCard = ({ id, name, image }: Hero) => {
  return (
    <div>
      <Image src={image} alt={name} width={200} height={200} />
      <h1>{name}</h1>
    </div>
  );
};

export default HeroCard;
