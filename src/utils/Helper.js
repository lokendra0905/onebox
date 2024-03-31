import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export function SuccessAlert(message = "") {
  toast({
    title: "SUCCESS",
    description: message,
    status: "success",
    duration: 2000,
    isClosable: true,
    position: "top",
  });
}

export function ErrorAlert(message = "") {
  toast({
    title: "FAILED",
    description: message,
    status: "error",
    duration: 3000,
    isClosable: true,
  });
}
