import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function WalletIcons({
  img,
  onOpen,
  setSelected,
  onClose,
  text,
}: {
  img: string | undefined;
  onOpen: any;
  setSelected: any;
  onClose: any;
  text: string | undefined;
}) {
  const openModal = () => {
    setSelected(img);
    onOpen();
    // setTimeout(() => {
    //   onClose();
    // }, 6000);
  };
  return (
    <Box
      w="8rem"
      h="8rem"
      overflow="hidden"
      bgColor="white"
      boxShadow="lg"
      cursor="pointer"
      p=".2rem"
      onClick={() => openModal()}
    >
      <Image src={img} w="80%" h="70%" mx="auto" objectFit="cover" />
      <Text textTransform="capitalize">{text}</Text>
    </Box>
  );
}

export default WalletIcons;
