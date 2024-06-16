import { useRouter } from "next/router";
import useSWR from "swr";
import toast from "react-hot-toast";

import HeroProfile from "@/container/HeroProfile/HeroProfile";

import { url } from "@/service/api";

import { Profile } from "../../../types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const HeroPage = () => {
  let toastId: string;
  const router = useRouter();
  const { heroId } = router.query;
  const { data, error, isLoading } = useSWR<Profile>(
    heroId ? url.hero(heroId) : null,
    fetcher,
    {
      onSuccess: () => {
        toastId = toast.success("英雄資料載入完成。", {
          id: toastId,
        });
      },
      onError: () => {
        toastId = toast.error("載入英雄資料失敗。", {
          id: toastId,
        });
      },
    }
  );

  if (isLoading) {
    toastId = toast.loading("載入英雄資料中...");
  }

  return !!data && <HeroProfile profile={data} heroId={heroId} />;
};

export default HeroPage;
