import { Box, HStack, Text, Image } from "@chakra-ui/react";
import Airplane from "../components/images/airplane.png";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box p="10px 30px 10px 30px" boxShadow="base">
      <HStack>
        <HStack>
          <Image
            src={Airplane}
            w="80px"
            mt="20px"
            style={{ transform: "rotate(-10deg" }}
          />
        </HStack>
        <ChakraLink
          as={ReactRouterLink}
          to="/home"
          pl="115px"
          ml="auto"
          fontWeight="bold"
          fontSize="25px"
          _hover={{ color: "#b3bab4" }}
        >
          Wander
        </ChakraLink>
        <HStack marginLeft="auto">
          <Text fontSize="15px">Forum</Text>
          <Text fontSize="15px" pl="10px">
            Start New
          </Text>
          <Text fontSize="15px" pl="10px">
            Log In
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
