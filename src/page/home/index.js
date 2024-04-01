import { useOneboxStore } from "@/store/onebox";
import { Box, Center, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";

export const HomePage = () => {
  const { resetOneboxAction } = useOneboxStore((s) => ({
    resetOneboxAction: s.resetOneboxAction,
  }));

  useEffect(() => {
    resetOneboxAction();
  }, [resetOneboxAction]);

  return (
    <Center minH={"88.5vh"} color={useColorModeValue("white", "black")}>
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
