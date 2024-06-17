import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import toast from "react-hot-toast";

import HeroProfile from "@/container/HeroProfile/HeroProfile";

import { url } from "@/service/api";

import { Profile } from "../../../types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const HeroPage = () => {
  const toastId = useRef<string | undefined>();
  const router = useRouter();
  const { heroId } = router.query;
  const { data, error, isLoading, isValidating } = useSWR<Profile>(
    heroId ? url.hero(heroId) : null,
    fetcher,
    {
      // 這邊設定 dedupingInterval 為 0，讓每次都重新發送請求
      dedupingInterval: 0,
      onSuccess: () => {
        toastId.current = toast.success("英雄資料載入完成。", {
          id: toastId.current,
        });
      },
      onError: () => {
        toastId.current = toast.error("載入英雄資料失敗。", {
          id: toastId.current,
        });
      },
    }
  );

  useEffect(() => {
    if (isLoading || isValidating) {
      toastId.current = toast.loading("載入英雄資料中...");
    }
  }, [isLoading, isValidating]);

  // 當ID改變時，清除舊的toast
  useEffect(() => {
    return () => {
      toast.dismiss(toastId.current);
    };
  }, [heroId]);

  return !!data && <HeroProfile profile={data} heroId={heroId} />;
};

export default HeroPage;
