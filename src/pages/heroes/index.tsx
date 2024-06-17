import useSWR from "swr";

import { fetcher } from "@/container/HeroList/HeroList";

import { url } from "@/service/api";

import { HintContainer } from "@/styles/heroes.style";

const Index = () => {
  const { data, error } = useSWR(url.heroes, fetcher);

  return (
    <HintContainer>{data?.length > 0 && <h1>請選擇一名英雄</h1>}</HintContainer>
  );
};

export default Index;
