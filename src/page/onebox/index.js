import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AllInbox } from "./AllInbox";
import { MailDesc } from "./MailDesc";

export const Onebox = ({ threadId }) => {
  return (
    <Box h={"88.5vh"}>
      <Flex h={"100%"}>
        <AllInbox msgId={threadId} />
        {threadId && <MailDesc threadId={threadId} />}
      </Flex>
    </Box>
  );
};
