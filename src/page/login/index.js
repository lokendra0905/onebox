import { STATUS } from "@/constants";
import { useAuthStore } from "@/store/auth";
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
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const [loading, setloading] = useState(false);

  const login = () => {
    setloading(true);
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://onebox-azure.vercel.app";
  };

  return (
    <Center minH={"88.5vh"}>
      <Card variant={"outline"} bg={"#111214"} border={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")} p={10} w={"30%"}>
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
          isLoading={loading}
          onClick={login}
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
