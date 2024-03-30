"use client";

import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import customTheme from "@/theme/index.";

export const Provider = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box
        backgroundColor={useColorModeValue("black", "white")}
        color={useColorModeValue("white", "black")}
        minH={"100vh"}
      >
        {children}
      </Box>
    </ChakraProvider>
  );
};
