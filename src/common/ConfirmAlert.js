import { STATUS } from "@/constants";
import { useOneboxStore } from "@/store/onebox";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorModeValue,
  Heading,
  Text,
  HStack,
  Center,
  Box,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const ConfirmAlert = ({ isOpen, onClose, threadId }) => {
  const router = useRouter();
  const { deleteThreadAction, deleteThreadStatus, resetStatus } = useOneboxStore((s) => ({
    deleteThreadAction: s.deleteThreadAction,
    deleteThreadStatus: s.deleteThreadStatus,
    resetStatus: s.resetStatus,
  }));

  const handleDelete = () => {
    deleteThreadAction(threadId);
  };

  useEffect(() => {
    if (deleteThreadStatus === STATUS.SUCCESS) {
      resetStatus();
      onClose();
      router.push("/onebox");
    }
  }, [deleteThreadStatus, resetStatus, onClose, router]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={'lg'}> 
      <ModalOverlay />
      <ModalContent
        bg={useColorModeValue("linear-gradient(180deg, #141517 0%, #232528 100%)", "white")}
        color={useColorModeValue("white", "black")}
      >
        <ModalBody>
          <Center py={10}>
            <Stack spacing={5} textAlign={"center"}>
              <Heading>Are you sure?</Heading>
              <Text mt={5} color={useColorModeValue("#E8E8E8", "gray")}>
                Your selected email will be deleted.
              </Text>
              <HStack justify={"space-between"} spacing={10} mt={5}>
                <Button
                  size={"lg"}
                  mr={3}
                  bg={"#25262B"}
                  color={useColorModeValue("white", "white")}
                  _hover={{ bg: "trasparent" }}
                  _focus={{ bg: "transparent" }}
                  onClick={onClose}
                  px={12}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  bg={"linear-gradient(91.73deg, #FA5252 -2.99%, #A91919 95.8%)"}
                  _hover={{ bg: "linear-gradient(91.73deg, #FA5252 -2.99%, #A91919 95.8%)" }}
                  size={"lg"}
                  px={12}
                  onClick={handleDelete}
                  isLoading={deleteThreadStatus === STATUS.FETCHING}
                >
                  Delete
                </Button>
              </HStack>
            </Stack>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
