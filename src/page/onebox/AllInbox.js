/* eslint-disable react-hooks/rules-of-hooks */
import { useOneboxStore } from "@/store/onebox";
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { map } from "lodash";
import React, { useEffect } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";
import { TbReload } from "react-icons/tb";

export const AllInbox = () => {
  const { getListAction, getListStatus, oneboxData } = useOneboxStore((s) => ({
    getListAction: s.getListAction,
    getListStatus: s.getListStatus,
    oneboxData: s.oneboxData,
  }));

  useEffect(() => {
    getListAction();
  }, [getListAction]);

  console.log(oneboxData);

  return (
    <Box
      w={"25%"}
      p={5}
      borderRight={"1px solid #343A40"}
      minh={"100%"}
      color={useColorModeValue("white", "black")}
    >
      <HStack justify={"space-between"}>
        <HStack>
          <Text fontSize={"x-large"} fontWeight={600} color={"#4285F4"}>
            All Inbox(s)
          </Text>
          <Icon as={MdKeyboardArrowDown} fontSize={"x-large"} />
        </HStack>
        <Tooltip label="Reload" hasArrow>
          <IconButton
            icon={<TbReload />}
            size={"md"}
            fontSize={"x-large"}
            color={useColorModeValue("white", "#595A5B")}
            bg={useColorModeValue("#1E293B", "#E9EAEB")}
            _hover={{ bg: useColorModeValue("#1E293B", "#E9EAEB") }}
          />
        </Tooltip>
      </HStack>
      <Text fontWeight={"700"} fontSize={"14px"}>
        25/25
        <span style={{ fontSize: "14px", fontWeight: "400", color: "#7F7F7F", marginLeft: "6px" }}>
          inboxes selected
        </span>
      </Text>

      <InputGroup mt={3} bg={useColorModeValue("#1E293B", "#F4F6F8")}>
        <InputLeftElement>
          <Icon as={MdSearch} />
        </InputLeftElement>
        <Input
          placeholder="Search"
          border={"none"}
          _placeholder={{ color: useColorModeValue("gray", "black") }}
        />
      </InputGroup>
      <Box>
        <HStack borderBottom={"1px solid #343A40"} justify={"space-between"} py={3}>
          <HStack spacing={1}>
            <Tag size={"sm"} bg={"#1E293B"} color={"#4285F4"}>
              26
            </Tag>
            <Text fontSize={"14px"} fontWeight={"600"}>
              New Replies
            </Text>
          </HStack>
          <HStack>
            <Text fontSize={"14px"} fontWeight={"600"}>
              Newest
            </Text>
            <Icon as={MdKeyboardArrowDown} fontSize={"x-large"} />
          </HStack>
        </HStack>
        <Stack>
          {map(oneboxData, (list) => {
            const { fromName, fromEmail, toName, toEmail, threadId, id, sentAt, subject } =
              list || {};
            return (
              <Box key={id} py={3} px={2} borderBottom={"1px solid #343A40"}>
                {/* <Box h={3} w={3} bg={"#5C7CFA"} borderRadius={"full"}></Box> */}
                <HStack justify={"space-between"}>
                  <Text fontSize={"14px"}> {fromEmail} </Text>
                  <Text fontSize={"12px"} fontWeight={"400"} color={"#FCFCFC66"}>
                    {dayjs(sentAt).format("MMM D")}
                  </Text>
                </HStack>
                <Text
                  mt={2}
                  fontSize={"12px"}
                  color={useColorModeValue("#E1E0E0", "#172B4D")}
                  maxW={"80%"}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                >
                  <Tooltip label={subject}>{subject}</Tooltip>
                </Text>

                <HStack mt={3}>
                  <Tag variant="subtle" color={"#57E0A6"} bg={"#222426"} borderRadius={"20"} px={2}>
                    <TagLeftIcon as={GoDotFill} />
                    <TagLabel fontSize={"12px"}>Interested</TagLabel>
                  </Tag>
                  <Tag variant="subtle" bg={"#222426"} borderRadius={"20"} px={2}>
                    <TagLeftIcon color={"#AEAEAE"} as={BsFillSendFill} />
                    <TagLabel color={"white"} fontSize={"12px"}>
                      Campaign Name
                    </TagLabel>
                  </Tag>
                </HStack>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};
