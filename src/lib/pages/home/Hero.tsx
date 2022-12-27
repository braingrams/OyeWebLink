import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <Box
      w="full"
      bgColor="brand.100"
      clipPath="polygon(0 0, 100% 0%, 100% 85%, 0 100%)"
      h="80vh"
    >
      <Flex
        alignItems="center"
        justifyContent={["center", "space-between"]}
        w="80%"
        h="full"
        mx="auto"
        flexDir={["column", "row"]}
      >
        <VStack w="full" alignItems="flex-start" spacing="1.5rem" color="white">
          <Heading>A Smart way to fix all wallets</Heading>
          <Text>
            Overall, our digital wallet solution provides a secure and
            convenient way to store and manage your wallet and resolve all
            errors
          </Text>
          <HStack w="full">
            <Link passHref href="/all-wallets" style={{ width: "100%" }}>
              <Button
                bgColor="white"
                w={["100%", "40%"]}
                color="black"
                borderRadius="0"
                h="3rem"
              >
                Get started
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Box w="full">
          <Image src="/img2.png" />
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
