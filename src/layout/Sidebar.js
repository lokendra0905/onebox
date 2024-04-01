/* eslint-disable react-hooks/rules-of-hooks */
import { NAVLINKS } from "@/constants";
import {
  Avatar,
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Tooltip,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { map } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <Box
      w={"20"}
      h={"100vh"}
      bg={useColorModeValue("#121212", "white")}
      borderRight={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
    >
      <Flex justify={"space-between"} direction={"column"} h={"100%"} py={4}>
        <Box>
          <Center>
            <Image src="/assets/logo_sm.png" alt="logo_sm" boxSize={"10"} />
          </Center>
          <VStack mt={20} spacing={5}>
            {map(NAVLINKS, (nav, index) => (
              <Tooltip key={index} hasArrow label={nav.title} placement="right">
                <Link href={nav.route}>
                  <IconButton
                    icon={<nav.icons />}
                    size={"lg"}
                    fontSize={"x-large"}
                    color={useColorModeValue("white", "#595A5B")}
                    bg={pathname == nav.route ? useColorModeValue("#1E293B", "#E9EAEB") : "none"}
                    _hover={{ bg: useColorModeValue("#1E293B", "#E9EAEB") }}
                  />
                </Link>
              </Tooltip>
            ))}
          </VStack>
        </Box>
        <Center>
          <Avatar name="Lokendra Shekhawat" />
        </Center>
      </Flex>
    </Box>
  );
};
