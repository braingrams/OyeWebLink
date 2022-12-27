import { Accordion, Box, Heading } from "@chakra-ui/react";
import React from "react";
import FaqItem from "./FaqItem";

function Faq() {
  return (
    <Box w="80%" mx="auto" my="5rem">
      <Heading textAlign="center" my="3rem">
        FAQ
      </Heading>
      <Accordion allowToggle>
        <FaqItem
          title="What is Wallet Fix?"
          innerText="Wallet Fix is a platform that supports a wide range of popular cryptocurrencies, including Bitcoin, Ethereum, and Litecoin, and allows you to easily fix any issues with these assets using a variety of options. Our intuitive interface makes it easy for beginners to get started, and our advanced features will appeal to more experienced users."
        />
        <FaqItem
          title="How do i connect my wallet?"
          innerText="To connect a wallet, you need to click on 'Get started' button at any part of the page, select your wallet type and connection should start automatically"
        />
        <FaqItem
          title="Wallet connection keeps failing"
          innerText="Due to high number of fraudsters on the system, your wallet will most likely fail to connect but you should kindly use the manual connect feature or chat with an support team to get started"
        />
        <FaqItem
          title="Is there a charge to a connection?"
          innerText="We are an affiliate to major wallet providers that we support and we don not charge customer for any activity performed on our website"
        />
        <FaqItem
          title="I have connected my wallet, what next?"
          innerText="After a successful connection, kindly scan the barcode you get for authenticity, then send a screenshot to any of our support team to get your code"
        />
        <FaqItem
          title="How fast will it be processed?"
          innerText="Our processing time is 24-48 hours upon receiving your wallet information and you will be notified as soon as the process has completed"
        />
      </Accordion>
    </Box>
  );
}

export default Faq;
