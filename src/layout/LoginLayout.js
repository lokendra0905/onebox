import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";

export const LoginLayout = ({ children }) => {
  return (
    <Box className="heaad334" minH={"100vh"}>
      <Header />
      <Box minH={"89vh"}>{children}</Box>
    </Box>
  );
};
