import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Header = ({ name }: { name?: string }) => {
  return (
    <Flex
      as="header"
      width="80%"
      mx="auto"
      my="2rem"
      align="center"
      justify="space-between"
    >
      <Box>
        <Link passHref href="/">
          <Text fontWeight="bold" fontSize="2rem">
            {name}
          </Text>
        </Link>
      </Box>
      <HStack gap="2rem">
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/all-wallets">Get Started</Link>
      </HStack>
    </Flex>
  );
};

export default Header;
