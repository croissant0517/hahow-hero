import { useRouter } from "next/router";
import Image from "next/image";

import {
  HeroCardContainer,
  ImageSkeleton,
  NameSkeleton,
} from "./HeroCard.style";

import { Hero } from "../../../types";

type HeroCardProps = Hero & {
  isLoading: boolean;
};

const HeroCard = ({ id, name, image, isLoading }: HeroCardProps) => {
  const router = useRouter();
  const { heroId } = router.query;

  return (
    <HeroCardContainer
      $isActive={heroId === id}
      onClick={() => {
        router.push(`/heroes/${id}`, undefined, { scroll: false });
      }}
    >
      {isLoading ? (
        <>
          <ImageSkeleton />
          <NameSkeleton />
        </>
      ) : (
        <>
          <Image src={image} alt={name} width={200} height={200} priority />
          <h2>{name}</h2>
        </>
      )}
    </HeroCardContainer>
  );
};

export default HeroCard;
