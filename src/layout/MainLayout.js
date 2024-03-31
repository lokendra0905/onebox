import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MainHeader } from "./MainHeader";

export const MainLayout = ({ children }) => {
  return (
    <Flex w={"100%"} h={'100%'}>
      <Sidebar />
      <Box w={"100%"} h={'100%'}>
        <MainHeader />
        <Box h={'100%'} bg={useColorModeValue("black", "white")}>{children}</Box>
      </Box>
    </Flex>
  );
};
