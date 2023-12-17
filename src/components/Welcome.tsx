import { Box, Text, Image } from "@chakra-ui/react";
import introPic from "./images/introPic.jpg";

const WelcomeBox = () => {
  return (
    <Box position="relative">
      <Image src={introPic} w="100%" />
      <Text
        color="#faf7f7"
        fontSize={{ base: "35px", lg: "50px" }}
        fontWeight="bold"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        Welcome Back to Wander
      </Text>
      <Text
        color="lightgray"
        fontSize={{ base: "10px", lg: "20px" }}
        fontWeight="bold"
        position="absolute"
        top="55%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        Your one stop for all your travel needs.
      </Text>
    </Box>
  );
};

export default WelcomeBox;
