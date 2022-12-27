import {
  Box,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Icon,
  Stack,
  Text,
  Card,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Cards({
  icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle: string;
}) {
  //   const router = useRouter();
  //   const doAction = () => {
  //     router.push("/all-wallets");
  //   };
  return (
    <Card w="full" boxShadow="lg" bgColor="white" color="black">
      <CardBody p="0" borderRadius="10px" overflow="hidden">
        <Flex
          w="full"
          h="200px"
          justify="center"
          align="center"
          bgColor="brand.100"
          color="white"
          _hover={{
            bgColor: "brand.100",
            color: "white",
          }}
          cursor="pointer"
        >
          <Icon as={icon} borderRadius="lg" fontSize="5rem" />
        </Flex>
        <Stack mt="6" spacing="3" p="1rem">
          <Heading size="md">{title}</Heading>
          <Text>{subtitle}</Text>
        </Stack>
      </CardBody>
      <Divider bgColor="gray.300" />
      <CardFooter>
        <Link passHref href="/all-wallets" style={{ width: "100%" }}>
          <Button
            variant="solid"
            //   colorScheme="blue"
            bgColor="brand.100"
            color="white"
            w="full"
            borderRadius="0"
            h="3rem"
          >
            Get started
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Cards;
