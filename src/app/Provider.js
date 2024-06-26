"use client";

import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import React, { Suspense } from "react";
import customTheme from "@/theme/index.";
import { AuthProvider } from "@/context/Auth";

export const Provider = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Suspense>
        <AuthProvider>
          <Box
            backgroundColor={useColorModeValue("black", "white")}
            color={useColorModeValue("white", "black")}
            minH={"100vh"}
          >
            {children}
          </Box>
        </AuthProvider>
      </Suspense>
    </ChakraProvider>
  );
};
