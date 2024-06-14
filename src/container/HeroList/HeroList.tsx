import { memo, useEffect } from "react";
import { useRouter } from "next/router";
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

  useEffect(() => {
    console.log("Render: HeroList");
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <Error />;

  return (
    <HeroListContainer>
      {data?.map((hero: Hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </HeroListContainer>
  );
});

export default HeroList;
