import { Box, Center, Divider, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box  width={"100%"} height={'100%'} className="Header">
      <Center h={'10vh'} p={5} bgColor={useColorModeValue("#121212", "white")}>
        <Image src="/assets/logo.png" alt="logo" />
      </Center>
      <Divider />
    </Box>
  );
};
