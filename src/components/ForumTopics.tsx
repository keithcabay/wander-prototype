import { Box, HStack, Image, Text } from "@chakra-ui/react";
import JapanFlag from "./images/JapanFlag.png";
import GreeceFlag from "./images/greeceFlag.png";
import ItalyFlag from "./images/ItalyFlag.avif";
import MexicoFlag from "./images/MexicoFlag.png";

const ForumTopics = () => {
  return (
    <Box
      m="20px 30px 0px 20px"
      bg="lightgray"
      borderRadius="25px"
      w="75%"
      mb="30px"
    >
      <HStack p="15px 30px 15px 30px">
        <Box w="25%" pos="relative">
          <Image src={JapanFlag} style={{ filter: "brightness(.5" }} />
          <Text
            pos="absolute"
            top="45%"
            left="50%"
            transform="translateX(-50%)"
            color="white"
            fontWeight="bold"
            fontSize="20px"
          >
            JAPAN{" "}
          </Text>
        </Box>
        <Box w="25%" pos="relative">
          <Image src={GreeceFlag} style={{ filter: "brightness(.5" }} />
          <Text
            pos="absolute"
            top="45%"
            left="50%"
            transform="translateX(-50%)"
            color="white"
            fontWeight="bold"
            fontSize="20px"
          >
            GREECE{" "}
          </Text>
        </Box>
        <Box w="25%" pos="relative">
          <Image src={ItalyFlag} style={{ filter: "brightness(.5" }} />
          <Text
            pos="absolute"
            top="45%"
            left="50%"
            transform="translateX(-50%)"
            color="white"
            fontWeight="bold"
            fontSize="20px"
          >
            ITALY{" "}
          </Text>
        </Box>
        <Box w="29.25%" pos="relative">
          <Image src={MexicoFlag} style={{ filter: "brightness(.5" }} />
          <Text
            pos="absolute"
            top="45%"
            left="50%"
            transform="translateX(-50%)"
            color="white"
            fontWeight="bold"
            fontSize="20px"
          >
            MEXICO{" "}
          </Text>
        </Box>
      </HStack>
      <Text fontWeight="bold" fontSize="15px" p="0 0 10px 40px">
        Trending
      </Text>
    </Box>
  );
};

export default ForumTopics;
