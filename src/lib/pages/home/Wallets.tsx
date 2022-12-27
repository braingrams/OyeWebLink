import { Box, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { WalletType } from "lib/components/types/WalletType";
import WalletIcons from "./Icons";
import ConnectModal from "./ConnectModal";
import wallet from "./wallet.json";

function Wallets() {
  const [selected, setSelected] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const popular = wallet.slice(0, 4);
  const all = wallet.slice(4);
  return (
    <Box bgColor="white" color="black" pb="3rem">
      <Box w="80%" mx="auto" textAlign="center">
        <Box py="2rem">
          <Heading>Select Your Wallet</Heading>
          <Text>
            Below is a list of all wallets we currently provide support for
          </Text>
        </Box>
        <Box mb="2rem">
          <Text
            bgColor="brand.100"
            color="white"
            fontSize="1.1rem"
            fontWeight="500"
            p="1rem 2rem"
            // w="fit-content"
            mb="1rem"
          >
            Popular Wallet
          </Text>
          <Flex flexWrap="wrap" gap="3rem">
            {popular.map((x: WalletType) => (
              <WalletIcons
                key={x.name}
                img={x.img}
                text={x.name}
                onOpen={onOpen}
                setSelected={setSelected}
                onClose={onClose}
              />
            ))}
          </Flex>
        </Box>
        <Box mb="2rem">
          <Text
            bgColor="brand.100"
            color="white"
            fontSize="1.1rem"
            fontWeight="500"
            p="1rem 2rem"
            // w="fit-content"
            mb="1rem"
          >
            Other Wallet
          </Text>
        </Box>
        <Flex flexWrap="wrap" gap="3rem">
          {all.map((x: WalletType) => (
            <WalletIcons
              img={x.img}
              text={x.name}
              onOpen={onOpen}
              setSelected={setSelected}
              onClose={onClose}
            />
          ))}
        </Flex>
      </Box>
      <ConnectModal isOpen={isOpen} onClose={onClose} selected={selected} />
    </Box>
  );
}

export default Wallets;
