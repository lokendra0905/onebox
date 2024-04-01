/* eslint-disable react-hooks/rules-of-hooks */
import { NAVLINKS } from "@/constants";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { find } from "lodash";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

export const MainHeader = () => {
  const pathname = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();
  const Heading = useMemo(
    () => find(NAVLINKS, (nav) => pathname.split("/")[1] === nav.route.split("/")[1]),
    [pathname]
  );
  return (
    <Flex
      p={5}
      bgColor={useColorModeValue("#121212", "white")}
      borderBottom={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
      justify={"space-between"}
      align={"center"}
      color={useColorModeValue("white", "black")}
    >
      <Text fontSize={"x-large"} fontWeight={"bold"}>
        {Heading?.title}
      </Text>
      <HStack spacing={8}>
        <Button
          onClick={toggleColorMode}
          _focus={{ boxShadow: "none" }}
          color={"#E8C364"}
          fontWeight={"bold"}
          bg={useColorModeValue("#1E293B", "#E9EAEB")}
          _hover={{ bg: useColorModeValue("#1E293B", "#E9EAEB") }}
        >
          {colorMode !== "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
        <HStack>
          <Text fontWeight={"600"}>Tim&apos;s WorkSpace</Text>
          <Icon as={MdKeyboardArrowDown} fontSize={"x-large"} />
        </HStack>
      </HStack>
    </Flex>
  );
};
