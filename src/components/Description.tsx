import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box pt="60px">
      <Flex justify="center" textAlign="center">
        <Text maxW="700px">
          Don't know exactly where you want to go, but have a dream vacation?
          Don't worry type your dream vacation and Wander will take care of the
          rest!
        </Text>
      </Flex>
      <Flex pt="60px">
        <Textarea
          placeholder="Type your dream vacation here..."
          maxW="1000px"
          h="500px"
          m="auto"
        />
      </Flex>
      <ChakraLink as={ReactRouterLink} to="/schedule">
        <Flex justify="center" p="30px 0 182px">
          <Button colorScheme="teal">Submit</Button>
        </Flex>
      </ChakraLink>
    </Box>
  );
};

export default Description;
