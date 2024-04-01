/* eslint-disable react-hooks/rules-of-hooks */
import { Box, HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { map } from "lodash";
import React from "react";

export const LeadDetails = ({ info }) => {
  const { fromName, fromEmail } = info || {};
  const FIELDS = [
    {
      key: "Name",
      value: fromEmail,
    },
    {
      key: "Contact No",
      value: "+54-9062827869",
    },
    {
      key: "Email Id",
      value: fromName,
    },
    {
      key: "LinkedIn",
      value: "linkedin.com/in/",
    },
    {
      key: "Company Name",
      value: "Reachinbox",
    },
  ];

  return (
    <Box w={"30%"} p={5}>
      <Box bg={useColorModeValue("#23272C", "#EEF1F4")} borderRadius={"8"} p={2} px={4}>
        <Text>Lead Details</Text>
      </Box>
      <Stack spacing={4} my={5}>
        {map(FIELDS, (el, index) => (
          <HStack key={index} w={"100%"} fontSize={"12px"} justify={"space-between"}>
            <Text>{el.key}</Text>
            <Text color={useColorModeValue("#B9B9B9")} textAlign={"right"}>
              {el.value}
            </Text>
          </HStack>
        ))}
      </Stack>

      <Box mt={10} bg={useColorModeValue("#23272C", "#EEF1F4")} borderRadius={"8"} p={2} px={4}>
        <Text>Activities</Text>
      </Box>
    </Box>
  );
};
