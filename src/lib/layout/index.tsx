import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const name = "Wallet Fix";
  return (
    <Box margin="0 0" transition="0.5s ease-out">
      <Box>
        <Header name={name} />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer name={name} />
      </Box>
    </Box>
  );
};

export default Layout;
