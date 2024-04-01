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
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg={useColorModeValue("linear-gradient(180deg, #141517 0%, #232528 100%)", "white")}
        color={useColorModeValue("white", "black")}
      >
        <ModalCloseButton />
        <ModalBody>
          <Center py={10}>
            <Stack spacing={5} textAlign={"center"}>
              <Heading>Are you sure?</Heading>
              <Text>Your selected email will be deleted.</Text>
              <HStack justify={"space-around"}>
                <Button size={"lg"} mr={3} colorScheme={useColorModeValue('gray', 'white')} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  size={"lg"}
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
