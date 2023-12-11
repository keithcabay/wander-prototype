import {
  Box,
  HStack,
  Text,
  Image,
  Flex,
  Button,
  useDisclosure,
  Collapse,
  Fade,
} from "@chakra-ui/react";

import paris from "./images/paris.jpg";
import arch from "./images/arch.jpg";
import street from "./images/street.jpg";
import Calendar from "./Calendar";

const ScheduleImageGallery = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Box pt="100px" textAlign="center" pb="80px">
        <Text fontSize="2xl" pb="30px">
          Based On Your Responses Wander Thinks You Might Like...
        </Text>
        <Button onClick={onToggle} colorScheme="teal" bg="#b3bab4">
          Click To Reveal
        </Button>
        <Fade in={isOpen} transition={{ enter: { duration: 3 } }}>
          <Text fontSize="4xl" pt="40px">
            PARIS
          </Text>
          <Flex justify="center" align="center" h="100%">
            <HStack>
              <Box
                maxW="250px"
                overflow="hidden"
                borderRadius="10px"
                boxShadow="lg"
              >
                <Image src={arch} alt="Greece" position="relative" />
                <Text fontWeight="semibold">Arc de Triomphe</Text>
              </Box>
              <Box
                maxW="300px"
                overflow="hidden"
                borderRadius="10px"
                boxShadow="lg"
              >
                <Image src={street} alt="Greece" position="relative" />
                <Text fontWeight="semibold">Street Restaurant</Text>
              </Box>
              <Box
                maxW="250px"
                overflow="hidden"
                borderRadius="10px"
                boxShadow="lg"
              >
                <Image src={paris} alt="Greece" position="relative" />
                <Text fontWeight="semibold">Eiffel Tower</Text>
              </Box>
            </HStack>
          </Flex>
          <Flex justify="center">
            <Box mt="60px" maxW="1000px">
              <Text fontSize="25px">March</Text>
              <Calendar />
            </Box>
          </Flex>
        </Fade>
      </Box>
    </div>
  );
};

export default ScheduleImageGallery;
