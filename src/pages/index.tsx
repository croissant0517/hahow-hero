import { GetServerSideProps } from "next";

const Index = () => {
  return <></>;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  res.writeHead(302, { Location: "/heroes" });
  res.end();
  return { props: {} };
};
