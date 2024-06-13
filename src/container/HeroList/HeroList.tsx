import { memo } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import HeroCard from "@/components/HeroCard/HeroCard";

import { url } from "@/service/api";

import { HeroListContainer } from "./HeroList.style";

import { Hero } from "../../../types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const HeroList = memo(function HeroList() {
  const { data, isLoading, error } = useSWR(url.heroes, fetcher);
  console.log("HeroList", data);

  return (
    <HeroListContainer>
      {data?.map((hero: Hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </HeroListContainer>
  );
});

export default HeroList;
