import { Box, HStack, Text, Image, Flex, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import greece from "./images/greece.jpg";
import paris from "./images/paris.jpg";
import maldive from "./images/maldive.jpg";

const GetStarted = () => {
  return (
    <Box pt="200px" textAlign="center">
      <Text fontSize="2xl">Begin Your New Journey</Text>
      <Flex justify="center" align="center" h="700px">
        <HStack>
          <Box
            maxW="405px"
            overflow="hidden"
            borderRadius="10px"
            boxShadow="lg"
          >
            <Image src={greece} alt="Greece" position="relative" />
            <Text fontWeight="semibold">Santorini, Greece</Text>
          </Box>
          <Box
            maxW="360px"
            overflow="hidden"
            borderRadius="10px"
            boxShadow="lg"
          >
            <Image src={paris} alt="Greece" position="relative" />
            <Text fontWeight="semibold">Paris, France</Text>
          </Box>
          <Box
            maxW="433px"
            overflow="hidden"
            borderRadius="10px"
            boxShadow="lg"
          >
            <Image src={maldive} alt="Greece" position="relative" />
            <Text fontWeight="semibold">Maldives</Text>
          </Box>
        </HStack>
      </Flex>
      <Flex pb="40px" justify="center">
        <Text maxW="500px">
          Begin your new adventure with Wander. You don't need to have a
          destination just an itch to get away. Fill out our multiple choice
          form or give us a description of the vacaction you desire.
        </Text>
      </Flex>
      <Flex justify="center">
        <HStack>
          <ChakraLink as={ReactRouterLink} to="/form">
            <Button colorScheme="teal">Fill Out Form</Button>
          </ChakraLink>
          <Text>or</Text>
          <ChakraLink as={ReactRouterLink} to="/description">
            <Button colorScheme="teal">Type Description</Button>
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default GetStarted;
