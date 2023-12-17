import { Box, Button, Flex, HStack, Image, Text, Icon } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import park from "./images/park.jpg";
import rome from "./images/rome.jpg";
import onSwing from "./images/onSwing.jpg";
import pool from "./images/pool.jpg";

const GalleryLanding = () => {
  return (
    <Box h="100vh">
      <Flex>
        <Button
          colorScheme="teal"
          m="30px 30px 20px auto"
          variant="outline"
          leftIcon={<Icon as={AddIcon} />}
        >
          Edit
        </Button>
      </Flex>
      <HStack>
        <Box
          maxW="250px"
          overflow="hidden"
          borderRadius="5px"
          boxShadow="lg"
          m="0 0 15px 15px"
          textAlign="center"
        >
          <Image
            src={park}
            alt="Greece"
            position="relative"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          <HStack display="flex" justify="center">
            <Text fontWeight="semibold" fontSize="25px">
              Yosemite
            </Text>
            <Button size="25px">{<DeleteIcon />}</Button>
          </HStack>
        </Box>
        <Box
          maxW="250px"
          overflow="hidden"
          borderRadius="5px"
          boxShadow="lg"
          m="0 0 15px 15px"
          textAlign="center"
        >
          <Image
            src={rome}
            alt="Greece"
            position="relative"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          <HStack display="flex" justify="center">
            <Text fontWeight="semibold" fontSize="25px">
              Italy
            </Text>
            <Button size="25px">{<DeleteIcon />}</Button>
          </HStack>
        </Box>

        <Box
          maxW="250px"
          overflow="hidden"
          borderRadius="5px"
          boxShadow="lg"
          m="0 0 15px 15px"
          textAlign="center"
        >
          <ChakraLink as={ReactRouterLink} to="/gallery/mexico">
            <Image
              src={pool}
              alt="Greece"
              position="relative"
              _hover={{
                transform: "scale(1.2)",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </ChakraLink>
          <HStack display="flex" justify="center">
            <Text fontWeight="semibold" fontSize="25px">
              Mexico
            </Text>
            <Button size="25px">{<DeleteIcon />}</Button>
          </HStack>
        </Box>

        <Box
          maxW="300px"
          overflow="hidden"
          borderRadius="5px"
          boxShadow="lg"
          m="0 0 15px 15px"
          textAlign="center"
        >
          <Image
            src={onSwing}
            alt="Greece"
            position="relative"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          <HStack display="flex" justify="center">
            <Text fontWeight="semibold" fontSize="25px">
              Domican Republic
            </Text>
            <Button size="25px">{<DeleteIcon />}</Button>
          </HStack>
        </Box>
        <Button ml="100px">{<AddIcon />}</Button>
      </HStack>
    </Box>
  );
};

export default GalleryLanding;
