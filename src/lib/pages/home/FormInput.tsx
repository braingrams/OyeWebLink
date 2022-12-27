import { Text, Input, Box } from "@chakra-ui/react";
import React from "react";

function FormInput({ title, name }: { title: string; name: string }) {
  return (
    <Box mb="2rem">
      <Text mb=".5rem">{title}</Text>
      <Input type="text" name={name} h="3rem" borderRadius="0" />
    </Box>
  );
}

export default FormInput;
