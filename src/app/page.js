"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <Box className="Heade3">
      <Header />
      <Text>Lokendra</Text>
    </Box>
  );
}
