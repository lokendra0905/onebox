import { Box, Center, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export const HomePage = () => {
  return (
    <Center minH={"88vh"} color={useColorModeValue("white", "black")}>
      <Box textAlign={"center"}>
        <Image src="/assets/no-message.png" alt="No Message" m={"auto"} />
        <Text fontWeight={"bold"} mt={5} fontSize={"x-large"}>
          It’s the beginning of a legendary sales pipeline
        </Text>
        <Text color={"#9E9E9E"} fontSize={"large"} mt={2}>
          When you have inbound E-mails <br /> you’ll see them here
        </Text>
      </Box>
    </Center>
  );
};
