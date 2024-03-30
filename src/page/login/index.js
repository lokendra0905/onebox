import {
  Box,
  Button,
  Card,
  CardHeader,
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  return (
    <Center minH={"89vh"}>
      <Card variant={"outline"} bg={"#111214"} border={"1px solid #343A40"} p={10} w={"30%"}>
        <Text textAlign={"center"} color={useColorModeValue("white", "black")} fontSize={"x-large"}>
          Create a new Account
        </Text>
        <Button
          mt={5}
          leftIcon={<FcGoogle />}
          bg={"transparent"}
          color={useColorModeValue("white", "black")}
          _hover={{ bg: "none" }}
          border={"1px solid #707172"}
          size={"lg"}
        >
          Login With Google
        </Button>

        <Button
          mt={16}
          bg={"linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)"}
          color={"white"}
          _hover={{ bg: "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)" }}
          border={"none"}
          size={"lg"}
        >
          Create an Account
        </Button>
        <Text textAlign={"center"} color={"#909296"} mt={3}>
          Already have an Account? Sign In{" "}
        </Text>
      </Card>
    </Center>
  );
};
