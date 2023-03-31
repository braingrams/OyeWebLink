import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ProgressBar } from "react-loader-spinner";

function ConnectModal({
  isOpen,
  onClose,
  selected,
}: {
  isOpen: any;
  onClose: any;
  selected: any;
}) {
  const [showError, setShowError] = useState(false);
  setTimeout(() => {
    setShowError(true);
  }, 6000);
  const select = selected?.replace("/icons/", "").replace(".png", "");
  const router = useRouter();
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton
          onClick={() => {
            onClose();
            setShowError(false);
          }}
        />
        <ModalBody w="full" mt="3rem">
          {showError ? (
            <Text textAlign="center">
              Connection to {select} server failed. Try manual connect or chat
              with our live support
            </Text>
          ) : (
            <Box>
              <Text textTransform="capitalize">
                Connecting {select} to server, Please wait...
              </Text>
              <ProgressBar
                height="30"
                width="100%"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor="transparent"
                barColor="#51E5FF"
              />
            </Box>
          )}
        </ModalBody>

        <ModalFooter>
          {showError ? (
            <HStack w="full">
              <Link passHref href="/manual-connect" style={{ width: "100%" }}>
                <Button colorScheme="blue" mr={3} w="full">
                  Manual Connect
                </Button>
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_TAWK_TO_URL as string}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme="blue" mr={3} onClick={onClose} w="full">
                  Live chat
                </Button>
              </Link>
            </HStack>
          ) : (
            <Button colorScheme="blue" mr={3} onClick={onClose} w="full">
              Close
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ConnectModal;
