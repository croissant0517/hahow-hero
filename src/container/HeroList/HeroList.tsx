import { memo } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import HeroCard from "@/components/HeroCard/HeroCard";

import { url, fetcher } from "@/service/api";

import { Hero } from "../../../types";

const HeroList = memo(function HeroList() {
  const router = useRouter();
  // const { heroId } = router.query;
  // console.log("Render: HeroList: heroId", heroId);
  const { data, isLoading, error } = useSWR(url.heroes, fetcher);
  console.log("data", data);

  return (
    <div>
      {data?.map((hero: Hero) => (
        <HeroCard key={hero.id} {...hero} />
        // <div key={hero.id}>
        //   <h1
        //     // style={{ color: heroId === hero.id ? "red" : "white" }}
        //     onClick={() => {
        //       router.push(`/heroes/${hero.id}`);
        //     }}
        //   >
        //     {hero.name}
        //   </h1>
        // </div>
      ))}
    </div>
  );
});

export default HeroList;
