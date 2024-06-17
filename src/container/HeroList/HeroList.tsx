import { memo } from "react";
import useSWR from "swr";

import HeroCard from "@/components/HeroCard/HeroCard";
import Error from "@/components/Error/Error";

import { url } from "@/service/api";

import { HeroListContainer } from "./HeroList.style";

import { Hero } from "../../../types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const HeroList = memo(function HeroList() {
  const { data, isLoading, error } = useSWR(url.heroes, fetcher);

  if (error) return <Error />;

  return (
    <HeroListContainer>
      {isLoading ? (
        <>
          <HeroCard id={"1"} name={""} image={""} isLoading={isLoading} />
          <HeroCard id={"2"} name={""} image={""} isLoading={isLoading} />
          <HeroCard id={"3"} name={""} image={""} isLoading={isLoading} />
          <HeroCard id={"4"} name={""} image={""} isLoading={isLoading} />
        </>
      ) : (
        data?.map((hero: Hero) => (
          <HeroCard key={hero.id} {...hero} isLoading={isLoading} />
        ))
      )}
    </HeroListContainer>
  );
});

export default HeroList;
