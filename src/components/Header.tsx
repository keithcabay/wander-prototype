import { Box, HStack, Text, Image } from "@chakra-ui/react";
import Icon from "../components/images/icon_black.png";
import profilePic from "./images/profilePic.jpeg";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box boxShadow="base">
      <HStack
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="10px 25px 10px 25px"
      >
        <ChakraLink as={ReactRouterLink} to="/home">
          <HStack>
            <Image src={Icon} w="60px" />
          </HStack>
        </ChakraLink>

        <ChakraLink
          as={ReactRouterLink}
          to="/home"
          fontWeight="bold"
          fontSize="25px"
          pl="120px"
          _hover={{ color: "#b3bab4" }}
        >
          Wander
        </ChakraLink>
        <HStack>
          <ChakraLink
            as={ReactRouterLink}
            to="/forum"
            _hover={{ color: "#b3bab4" }}
          >
            <Text fontSize="15px">Forum</Text>
          </ChakraLink>
          <Text fontSize="15px" pl="15px">
            Start New
          </Text>
          <Image
            src={profilePic}
            alt="profilePic"
            borderRadius="1000px"
            boxSize="40px"
            ml="5px"
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
