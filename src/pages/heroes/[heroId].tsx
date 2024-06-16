import { useRouter } from "next/router";
import useSWR from "swr";

import HeroProfile from "@/container/HeroProfile/HeroProfile";

import { url } from "@/service/api";

import { Profile } from "../../../types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const HeroPage = () => {
  const router = useRouter();
  const { heroId } = router.query;
  const { data, isLoading } = useSWR<Profile>(
    heroId ? url.hero(heroId) : null,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  return !!data && <HeroProfile profile={data} heroId={heroId} />;
};

export default HeroPage;
