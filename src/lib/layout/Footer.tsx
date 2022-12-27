import { Circle, Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { RiInstagramFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

const Footer = ({ name }: { name?: string }) => {
  const date = new Date().getFullYear();
  return (
    <VStack pt="4" align="start" spacing="5" w="80%" m="2rem auto">
      <Text
        borderBottom="1px solid"
        py="4"
        borderTop="1px solid"
        w="full"
        textAlign="justify"
        fontSize={{ base: "14", lg: "16" }}
      >
        {name} is a product of {name} Limited. Our platform supports a wide
        range of popular cryptocurrencies, including Bitcoin, Ethereum, and
        Litecoin, and allows you to easily fix any issues with these assets using a
        variety of options. Our intuitive interface makes it easy for
        beginners to get started, and our advanced features will appeal to more
        experienced users.
      </Text>
      <Flex justify="space-between" w="full">
        <Text fontSize="14" textAlign="center">
          © {date} {name} Limited. All rights reserved.
        </Text>
        <HStack spacing={[2, 3]}>
          <Circle as="a" href="" size="32px">
            <RiInstagramFill />
          </Circle>
          <Circle as="a" href="" size="32px">
            <RiTwitterFill />
          </Circle>
          <Circle as="a" href="" size="32px">
            <RiLinkedinFill />
          </Circle>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Footer;
