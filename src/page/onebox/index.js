import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AllInbox } from "./AllInbox";

export const Onebox = () => {
  return (
    <Box h={'88vh'}>
      <Flex h={'100%'}>
        <AllInbox />
      </Flex>
    </Box>
  );
};
