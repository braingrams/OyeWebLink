import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineNearbyError } from "react-icons/md";
import { BiCheckDouble } from "react-icons/bi";
import { RiLockUnlockFill, RiFundsLine } from "react-icons/ri";
import { SiAcclaim, SiAirplayaudio } from "react-icons/si";
import { FaWonSign } from "react-icons/fa";
import {
  GiLightningSpanner,
  GiBlackBridge,
  GiStakesFence,
  GiBodySwapping,
  GiSlime,
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
          title="Claim"
          subtitle="Not checking the reputation of the exchanges before using - using unreliable exchanges can result in hacking and theft of crypto assets."
          icon={SiAcclaim}
        />
        <Card
          title="Bonus errors"
          subtitle="Not diversifying crypto portfolio - putting all assets in one currency can result in significant loss if the value of that currency drops."
          icon={FaWonSign}
        />
        <Card
          title="Airdrop issues"
          subtitle="Not understanding the technology - not fully understanding how cryptocurrency works can result in making poor investment decisions."
          icon={SiAirplayaudio}
        />
        <Card
          title="Missing token"
          subtitle="Falling for scams and phishing attacks - scam artists often use fake websites, emails, and social media to trick people into giving up their crypto assets. "
          icon={RiFundsLine}
        />
        <Card
          title="Slippage error"
          subtitle="Not keeping software up to date - outdated software can have vulnerabilities that hackers can exploit to steal crypto assets."
          icon={GiSlime}
        />
        <Card
          title="Swapping error"
          subtitle="Not understanding the tax implications - failing to properly report and pay taxes on crypto transactions can result in fines and penalties. "
          icon={GiBodySwapping}
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
