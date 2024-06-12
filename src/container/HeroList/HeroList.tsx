import { memo } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import HeroCard from "@/components/HeroCard/HeroCard";

import { url, fetcher } from "@/service/api";

import { HeroListContainer } from "./HeroList.style";

import { Hero } from "../../../types";

const HeroList = memo(function HeroList() {
  const { data, isLoading, error } = useSWR(url.heroes, fetcher);
  console.log("data", data);

  return (
    <HeroListContainer>
      {data?.map((hero: Hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </HeroListContainer>
  );
});

export default HeroList;
