import { useState, useMemo, useEffect } from "react";

import Button from "@/components/Button/Button";

import { HeroProfileContainer, ProfileItem } from "./HeroProfile.style";

import { Profile } from "../../../types";

type HeroProfileProps = {
  profile: Profile;
  updateProfile?: (profile: Profile) => void;
};

const HeroProfile = ({ profile, updateProfile }: HeroProfileProps) => {
  // console.log("Render: HeroProfile", profile);
  const [profileState, setProfileState] = useState(profile);
  console.log("profile", profile);

  // const initTotal = useMemo(() => {
  //   return Object.values(profile).reduce((acc, value) => acc + value, 0);
  // }, [profile]);

  const initTotal = Object.values(profile).reduce(
    (acc, value) => acc + value,
    0
  );

  console.log("Init Total", initTotal);

  // const total = useMemo(() => {
  //   return Object.values(profileState).reduce((acc, value) => acc + value, 0);
  // }, [profileState]);

  const total = Object.values(profileState).reduce(
    (acc, value) => acc + value,
    0
  );

  console.log("Total", total);

  // useEffect(() => {
  //   setProfileState(profile);
  // }, [profile]);

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
      <h3>Hero Profile</h3>
      {Object.entries(profileState).map(([key, value]) => (
        <ProfileItem key={key}>
          <span>{key.toUpperCase()}</span>
          <Button
            onClick={() => {
              handleDecrement(key as keyof Profile);
            }}
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

      <h2>剩餘點數: {initTotal - total}</h2>

      <Button
        onClick={() => {
          updateProfile && updateProfile(profileState);
        }}
        disabled={total !== initTotal}
      >
        儲存
      </Button>
    </HeroProfileContainer>
  );
};

export default HeroProfile;
