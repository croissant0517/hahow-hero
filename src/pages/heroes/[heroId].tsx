import { useRouter } from "next/router";
import useSWR from "swr";

import HeroProfile from "@/container/HeroProfile/HeroProfile";

import { url } from "@/service/api";

import { Profile } from "../../../types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const patcher = (id: string | string[], data: any) =>
  fetch(url.hero(id), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.text());

const HeroPage = () => {
  const router = useRouter();
  const { heroId } = router.query;
  const { data, isLoading, error } = useSWR<Profile>(
    heroId ? url.hero(heroId) : null,
    fetcher
  );

  const updateProfile = (data: Profile) => {
    if (!!heroId) {
      patcher(heroId, data).then(() => {
        router.replace(router.asPath);
      });
    }
  };

  console.log("Render: HeroPage", data);

  if (isLoading) return <div>Loading...</div>;

  return !!data && <HeroProfile profile={data} updateProfile={updateProfile} />;
};

export default HeroPage;
