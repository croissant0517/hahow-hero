import { Wrapper } from "./Layout.style";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
