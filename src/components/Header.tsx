import { Box, HStack, Text, Image } from "@chakra-ui/react";
import Icon from "../components/images/icon_black.png";
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
          <Text fontSize="15px">Forum</Text>
          <Text fontSize="15px" pl="15px">
            Start New
          </Text>
          <Text fontSize="15px" pl="15px">
            Log In
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
