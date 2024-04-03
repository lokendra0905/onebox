/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  HStack,
  Icon,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { map } from "lodash";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

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

  const steps = [
    { title: "Step 1  : Email", description: "Sent 3rd, Feb", icon: BsFillSendFill },
    { title: "Step 2  : Email", description: "Opened 5th, Feb", icon: HiOutlineMailOpen },
    { title: "Step 3  : Email", description: "Opened 5th, Feb", icon: HiOutlineMailOpen },
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
      <Text mt={3}>Campaign Name</Text>
      <Text mt={3}>3 Steps | 5 Days in sequence</Text>

      <Stepper orientation="vertical" h={200} gap={0} mt={5} colorScheme={"gray"}>
        {map(steps, (step, index) => (
          <Step key={index}>
            <StepIndicator boxSize={8}>
              <StepStatus complete={<StepIcon />} incomplete={<MdEmail />} active={<MdEmail />} />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>
                <Icon as={step.icon} /> {step.description}
              </StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
