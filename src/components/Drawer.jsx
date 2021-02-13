import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Flex,
  Text,
  Spacer,
} from "@chakra-ui/react";

import {} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

export const DrawerButton = ({ btnRef, onOpen }) => {
  return (
    <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
      <FaBars />
    </Button>
  );
};

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Flex
        w="100%"
        h="10vh"
        // bg="blue.300"
        justify="space-evenly"
        align="center"
        shadow="base"
      >
        <Flex w="30%" justify="space-evenly" align="center">
          <DrawerButton btnRef={btnRef} onOpen={onOpen} />
          <Text fontSize="2xl">Your Name</Text>
        </Flex>
        <Spacer />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
