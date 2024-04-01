/* eslint-disable react-hooks/rules-of-hooks */
import { useOneboxStore } from "@/store/onebox";
import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { find, map } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { BsClock, BsFillPersonDashFill, BsFillReplyFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  MdDelete,
  MdKeyboardArrowDown,
  MdModeEditOutline,
  MdOutlineMarkunreadMailbox,
} from "react-icons/md";
import { LeadDetails } from "./LeadDetails";
import { ReplyBox } from "./ReplyBox";
import { STATUS } from "@/constants";
import { ConfirmAlert } from "@/common/ConfirmAlert";

const MAILMENU = [
  {
    title: "Mark as unread",
    icon: <MdOutlineMarkunreadMailbox />,
  },
  {
    title: "Edit Lead",
    icon: <MdModeEditOutline />,
  },
  {
    title: "Remove Lead",
    icon: <BsFillPersonDashFill />,
  },
  {
    title: "Set Reminder",
    icon: <BsClock />,
  },
  {
    title: "Delete",
    icon: <MdDelete />,
  },
];

export const MailDesc = ({ threadId }) => {
  const [onReply, setOnReply] = useState(false);
  const { onOpen, onClose, isOpen } = useDisclosure();

  const { getThreadAction, getThreadStatus, threadDetails, oneboxData } = useOneboxStore((s) => ({
    getThreadAction: s.getThreadAction,
    getThreadStatus: s.getThreadStatus,
    threadDetails: s.threadDetails,
    oneboxData: s.oneboxData,
  }));

  useEffect(() => {
    const handleDelete = (event) => {
      if (!onReply) {
        if (event.key === "d" || event.key === "D") {
          onOpen();
        }
      }
    };
    document.addEventListener("keydown", handleDelete);
    return () => {
      document.removeEventListener("keydown", handleDelete);
    };
  }, [onOpen, onReply]);

  useEffect(() => {
    const handleReply = (event) => {
      if (event.key === "r" || event.key === "R") {
        setOnReply(true);
      }
    };
    document.addEventListener("keydown", handleReply);
    return () => {
      document.removeEventListener("keydown", handleReply);
    };
  }, []);

  useEffect(() => {
    if (threadId) {
      getThreadAction(threadId);
    }
  }, [threadId, getThreadAction]);

  const senderInfo = useMemo(
    () => find(oneboxData, (onebox) => onebox.threadId == threadId),
    [oneboxData, threadId]
  );

  const { fromName, fromEmail, toEmail } = senderInfo || {};

  return getThreadStatus === STATUS.FETCHING ? (
    <Center w={"100%"}>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
    </Center>
  ) : (
    <Flex w={"100%"} color={useColorModeValue("white", "black")}>
      <Box
        overflowY={"scroll"}
        w={"70%"}
        // maxH={'100%'}
        borderRight={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
      >
        <HStack
          p={7}
          h={20}
          justify={"space-between"}
          borderBottom={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
        >
          <Box>
            <Text fontWeight={"600"} fontSize={"large"}>
              {fromName}
            </Text>
            <Text
              mt={1}
              fontSize={"12px"}
              fontWeight={"500"}
              color={useColorModeValue("#FFFFFF66", "#172B4D")}
            >
              {fromEmail}
            </Text>
          </Box>
          <HStack>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                border={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
                _focus={{ boxShadow: "outline" }}
              >
                <HStack>
                  <Icon as={GoDotFill} color={"#57E0A6"} />
                  <Text>Intrested</Text>
                  <Icon as={MdKeyboardArrowDown} />
                </HStack>
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                border={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
                _focus={{ boxShadow: "outline" }}
              >
                <HStack>
                  <Text>Move</Text>
                  <Icon as={MdKeyboardArrowDown} />
                </HStack>
              </MenuButton>
            </Menu>
            <Menu direction="rtl" flip>
              <MenuButton
                as={IconButton}
                icon={<HiOutlineDotsVertical />}
                variant="outline"
                border={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
                _hover={{ bg: "none" }}
                _expanded={{ bg: useColorModeValue("gray.800", "gray.200 #343A40") }}
                color={useColorModeValue("white", "black")}
              />
              <MenuList bg={useColorModeValue("black", "white")}>
                {map(MAILMENU, (menu, index) => (
                  <MenuItem
                    _hover={{ bg: "gray.700" }}
                    bg={useColorModeValue("black", "white")}
                    key={index}
                    icon={menu.icon}
                  >
                    {menu.title}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
        <Box
          p={4}
          minH={"100%"}
          bg={useColorModeValue("black", "#EEF1F4")}
          //   color={useColorModeValue("black", "white")}
        >
          <Box position={"relative"} py={2}>
            <Divider border={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")} />
            <AbsoluteCenter
              color={useColorModeValue("white", "#637381")}
              bg={useColorModeValue("#171819", "#EEF1F4")}
              px={2}
            >
              Today
            </AbsoluteCenter>
          </Box>
          <Stack mt={2}>
            {map(threadDetails, (thread) => (
              <MessageCard key={thread.id} thread={thread} />
            ))}
          </Stack>
          <Button
            mt={5}
            leftIcon={<BsFillReplyFill />}
            bg={"linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)"}
            color={"white"}
            _hover={{
              bg: "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
            }}
            border={"none"}
            size={"lg"}
            onClick={() => setOnReply(true)}
          >
            Reply
          </Button>
          {onReply && (
            <ReplyBox
              setOnReply={setOnReply}
              toEmail={fromEmail}
              fromEmail={toEmail}
              threadId={threadId}
            />
          )}
        </Box>
      </Box>
      <LeadDetails info={senderInfo} />
      {isOpen && <ConfirmAlert isOpen={isOpen} onClose={onClose} threadId={threadId} />}
    </Flex>
  );
};

export const MessageCard = ({ thread }) => {
  const { fromEmail, toEmail, subject, body, sentAt, id } = thread || {};

  return (
    <Card
      variant={"outline"}
      bg={useColorModeValue("#141517", "white")}
      border={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
      color={useColorModeValue("white", "black")}
      p={2}
      mt={2}
      key={id}
      fontSize={"14px"}
    >
      <HStack justify={"space-between"}>
        <Text fontWeight={"600"}>{subject}</Text>
        <Text color={"#7F7F7F"}>{dayjs(sentAt).format("D MMMM YYYY, h:mm A")}</Text>
      </HStack>
      <Box mt={2} color={"#AEAEAE"}>
        <Text>from : {fromEmail}</Text>
        <Text>to : {toEmail}</Text>
      </Box>

      <Box
        mt={3}
        color={useColorModeValue("#E1E0E0")}
        dangerouslySetInnerHTML={{ __html: body }}
      ></Box>
    </Card>
  );
};
