import { Box, HStack, Text, Image, Flex, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import onSwing from "./images/onSwing.jpg";
import park from "./images/park.jpg";
import pool from "./images/pool.jpg";

const Gallery = () => {
  return (
    <Box pt="150px" textAlign="center" pb="150px">
      <Text fontSize="2xl">Explore Your Gallery</Text>
      <Flex justify="center" align="center" h="700px">
        <HStack>
          <Box
            maxW="405px"
            overflow="hidden"
            borderRadius="10px"
            boxShadow="lg"
          >
            <Image src={park} alt="Greece" position="relative" />
            <Text fontWeight="semibold">Yosemite - 03/15/2022</Text>
          </Box>
          <Box
            maxW="485px"
            overflow="hidden"
            borderRadius="10px"
            boxShadow="lg"
          >
            <Image src={onSwing} alt="Greece" position="relative" />
            <Text fontWeight="semibold">Dominican Republic - 04/10/2023</Text>
          </Box>
          <Box
            maxW="405px"
            overflow="hidden"
            borderRadius="10px"
            boxShadow="lg"
          >
            <Image src={pool} alt="Greece" position="relative" />
            <Text fontWeight="semibold">Mexico - 08/23/2023</Text>
          </Box>
        </HStack>
      </Flex>
      <ChakraLink as={ReactRouterLink} to="/gallery">
        <Flex justify="center">
          <Button colorScheme="teal">View Gallery</Button>
        </Flex>
      </ChakraLink>
    </Box>
  );
};

export default Gallery;
