import { useState, useMemo, useEffect } from "react";
import useSWRMutation from "swr/mutation";

import Button from "@/components/Button/Button";

import {
  HeroProfileContainer,
  ProfileItem,
  Controller,
  Submit,
} from "./HeroProfile.style";

import { url } from "@/service/api";

import { Profile } from "../../../types";

type HeroProfileProps = {
  profile: Profile;
  heroId: string | string[] | undefined;
};

const updateProfile = async (url: string, { arg }: { arg: Profile }) => {
  await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
};

const HeroProfile = ({ profile, heroId }: HeroProfileProps) => {
  const [profileState, setProfileState] = useState(profile);
  const { trigger, isMutating } = useSWRMutation(
    heroId ? url.hero(heroId) : null,
    updateProfile,
    {
      onSuccess: () => {
        console.log("Success");
      },
    }
  );

  console.log("profile", profile);

  const initTotal = useMemo(() => {
    return Object.values(profile).reduce((acc, value) => acc + value, 0);
  }, [profile]);

  console.log("Init Total", initTotal);

  const total = useMemo(() => {
    return Object.values(profileState).reduce((acc, value) => acc + value, 0);
  }, [profileState]);

  console.log("Total", total);

  useEffect(() => {
    setProfileState(profile);
  }, [profile]);

  const handleIncrement = (key: keyof Profile) => {
    setProfileState((prevState) => ({
      ...prevState,
      [key]: (prevState[key] || 0) + 1,
    }));
  };

  const handleDecrement = (key: keyof Profile) => {
    setProfileState((prevState) => ({
      ...prevState,
      [key]: Math.max((prevState[key] || 0) - 1, 0),
    }));
  };

  return (
    <HeroProfileContainer>
      <Controller>
        {Object.entries(profileState).map(([key, value]) => (
          <ProfileItem key={key}>
            <span>{key.toUpperCase()}</span>
            <Button
              onClick={() => {
                handleDecrement(key as keyof Profile);
              }}
              disabled={value === 0}
            >
              -
            </Button>
            <span>{value}</span>
            <Button
              onClick={() => {
                handleIncrement(key as keyof Profile);
              }}
              disabled={total === initTotal}
            >
              +
            </Button>
          </ProfileItem>
        ))}
      </Controller>

      <Submit>
        <h3>剩餘點數: {initTotal - total}</h3>

        <Button
          onClick={() => {
            trigger(profileState);
          }}
          disabled={total !== initTotal || isMutating}
        >
          儲存
        </Button>
      </Submit>
    </HeroProfileContainer>
  );
};

export default HeroProfile;
