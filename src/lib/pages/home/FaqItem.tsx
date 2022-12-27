import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

function FaqItem({ innerText, title }: { innerText: string; title: string }) {
  return (
    <AccordionItem
      bgColor="white"
      color="black"
      //   borderBottom="1px solid gray"
      mb=".5rem"
    >
      <h2>
        <AccordionButton
          _expanded={{ bg: "brand.100", color: "white" }}
          h="3.5rem"
        >
          <Box as="span" flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{innerText}</AccordionPanel>
    </AccordionItem>
  );
}

export default FaqItem;
