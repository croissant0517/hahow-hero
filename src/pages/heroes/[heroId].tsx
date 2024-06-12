import { useRouter } from "next/router";

const HeroPage = () => {
  const router = useRouter();
  const { heroId } = router.query;

  console.log("Render: HeroPage", heroId);

  return (
    <div>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </button>
      <h1>Hero ID : {heroId}</h1>
    </div>
  );
};

export default HeroPage;
