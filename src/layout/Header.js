import { Box, Center, Divider, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Center
      h={"10vh"}
      p={5}
      bgColor={useColorModeValue("#121212", "white")}
      borderBottom={"1px solid #343A40"}
    >
      <Image src="/assets/logo.png" alt="logo" />
    </Center>
  );
};
