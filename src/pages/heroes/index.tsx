import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <div>
      <h1
      // onClick={() => {
      //   router.push("/heroes/1");
      // }}
      >
        Heroes
      </h1>
    </div>
  );
};

export default Index;