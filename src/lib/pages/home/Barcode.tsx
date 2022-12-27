import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Barcode() {
  return (
    <Flex w="full" bgColor="white">
      <Box w="80%" mx="auto" pt="3rem">
        <Box w="40%" h="auto" mx="auto">
          <Image src="/barcode.png" w="full" h="auto" />
        </Box>
        <Text
          color="red"
          textAlign="center"
          fontSize="1.2rem"
          fontWeight="600"
          bgColor="black"
          p="1rem 2rem"
          my="2rem"
          w="fit-content"
          mx="auto"
        >
          Chat Admin/Support for Authentication Code
        </Text>
      </Box>
    </Flex>
  );
}

export default Barcode;
