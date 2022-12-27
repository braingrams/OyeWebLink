import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineNearbyError } from "react-icons/md";
import { BiCheckDouble } from "react-icons/bi";
import { RiLockUnlockFill } from "react-icons/ri";
import { GrStakeholder } from "react-icons/gr";
import {
  GiLightningSpanner,
  GiBlackBridge,
  GiStakesFence,
} from "react-icons/gi";
import Card from "./Card";

function Services() {
  return (
    <Box w="80%" mx="auto">
      <Heading textAlign="center" my="3rem">
        Our Solution
      </Heading>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(3,1fr)"]}
        gap="4rem 2rem"
      >
        <Card
          title="Rectification"
          subtitle="Rectification support warranties completely decentralized"
          icon={GiLightningSpanner}
        />
        <Card
          title="Validation"
          subtitle="Validation completely decentralized supports wallet"
          icon={BiCheckDouble}
        />
        <Card
          title="Recovery"
          subtitle="Recovery wallet TATs Dapps with Blockchain and DeFi
          Recovery"
          icon={RiLockUnlockFill}
        />
        <Card
          title="Staking"
          subtitle="Interaction between mobile apps and mobile browsers are supported via mobile deep linking Having complete control of your staking"
          icon={GiStakesFence}
        />
        <Card
          title="Bridge"
          subtitle="Enables applications built on different blockchains to communicate with and interact with each other, something which was never before possible, therefore unlocks a groundbreaking development for the blockchain space as a whole. "
          icon={GiBlackBridge}
        />
        <Card
          title="Other errors"
          subtitle="On launch, Ethereum, BSC, Avalanche, and Polygon - four of the leading blockchains and protocols - are supported, with capabilities to add new blockchains built-in to the Alliance Bridge protocol."
          icon={MdOutlineNearbyError}
        />
      </Grid>
    </Box>
  );
}

export default Services;
