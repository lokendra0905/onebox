import { STATUS } from "@/constants";
import { useOneboxStore } from "@/store/onebox";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsCaretDownFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export const ReplyBox = ({ setOnReply, fromEmail, toEmail, threadId }) => {
  const { handleSubmit, control } = useForm();

  const { addReplyAction, addReplyStatus, resetStatus } = useOneboxStore((s) => ({
    addReplyAction: s.addReplyAction,
    addReplyStatus: s.addReplyStatus,
    resetStatus: s.resetStatus,
  }));

  const submitReply = (data) => {
    addReplyAction(threadId, {
      to: toEmail,
      from: fromEmail,
      fromName: "Mitrajit",
      ...data,
    });
  };

  useEffect(() => {
    if (addReplyStatus === STATUS.SUCCESS) {
      resetStatus();
      setOnReply(false);
    }
  }, [addReplyStatus, resetStatus, setOnReply]);

  return (
    <Box
      bottom={0}
      position={"absolute"}
      h={"500px"}
      w={"47.7%"}
      border={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
      borderRadius={"8"}
      bg={useColorModeValue("#141517", "white")}
      color={useColorModeValue("white", "black")}
      boxShadow={"0 0 0 50vmax rgba(0,0,0,.5)"}
    >
      <HStack
        justify={"space-between"}
        bg={useColorModeValue("#23272C")}
        p={3}
        borderBottom={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
      >
        <Text color={useColorModeValue("#BAB9BD", "black")} fontWeight={"bold"}>
          Reply
        </Text>
        <Icon cursor={"pointer"} as={MdClose} fontSize={"20px"} onClick={() => setOnReply(false)} />
      </HStack>
      <Stack spacing={"0"} fontSize={"14px"}>
        <Box
          borderBottom={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
          px={5}
          py={2}
        >
          <Text color={"#BAB9BD"}>
            To : <span style={{ color: useColorModeValue("white", "black") }}>{toEmail} </span>
          </Text>
        </Box>
        <Box
          borderBottom={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
          px={5}
          py={2}
        >
          <Text color={"#BAB9BD"}>
            From : <span style={{ color: useColorModeValue("white", "black") }}>{fromEmail} </span>
          </Text>
        </Box>
        <form onSubmit={handleSubmit(submitReply)}>
          <Flex
            borderBottom={useColorModeValue("1px solid #343A40", "1px solid #DEDEDE")}
            px={5}
            py={2}
            gap={3}
          >
            <Text color={"#BAB9BD"} whiteSpace={"nowrap"}>
              Subject :
            </Text>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  style={{
                    resize: "none",
                    overflow: "auto",
                    border: "0px",
                    outline: "0px",
                    background: "transparent",
                    width: "90%",
                    height: "20px",
                  }}
                />
              )}
            />
          </Flex>
          <Box px={5} py={2}>
            <Controller
              name="body"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  style={{
                    resize: "none",
                    overflow: "auto",
                    border: "0px",
                    outline: "0px",
                    background: "transparent",
                    width: "90%",
                    height: "260px",
                  }}
                />
              )}
            />
          </Box>
          <HStack px={4}>
            <Button
              rightIcon={<BsCaretDownFill />}
              bg={"linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)"}
              color={"white"}
              _hover={{
                bg: "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
              }}
              border={"none"}
              size={"md"}
              w={"24"}
              isLoading={addReplyStatus === STATUS.FETCHING}
              type="submit"
            >
              Send
            </Button>
          </HStack>
        </form>
      </Stack>
    </Box>
  );
};
