import { Box, Button, Flex, HStack, Image, Text, Icon } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import pool from "./images/pool.jpg";
import girlPyramid from "./images/girlPyramid.jpg";
import cliff from "./images/cliff.jpg";
import pyramid from "./images/mexicoPyamid.jpg";

const MexicoGallery = () => {
  return (
    <div>
      <HStack>
        <Text fontWeight="semibold" fontSize="40px" pl="30px">
          Mexico
        </Text>
        <Button
          colorScheme="teal"
          m="30px 30px 30px auto"
          variant="outline"
          leftIcon={<Icon as={AddIcon} />}
        >
          Edit
        </Button>
      </HStack>
      <HStack>
        <Box
          maxW="250px"
          overflow="hidden"
          borderRadius="5px"
          boxShadow="lg"
          m="0 0 15px 30px"
          textAlign="center"
        >
          <Image
            src={pool}
            alt="Greece"
            position="relative"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          <HStack display="flex" justify="center">
            <Text fontWeight="semibold" fontSize="25px">
              By The Pool
            </Text>
            <Button size="25px">{<DeleteIcon />}</Button>
          </HStack>
        </Box>
        <Box
          maxW="280px"
          overflow="hidden"
          borderRadius="5px"
          boxShadow="lg"
          m="0 0 15px 15px"
          textAlign="center"
        >
          <Image
            src={cliff}
            alt="Greece"
            position="relative"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          <HStack display="flex" justify="center">
            <Text fontWeight="semibold" fontSize="25px">
              The Beatiful Sea
            </Text>
            <Button size="25px">{<DeleteIcon />}</Button>
          </HStack>
        </Box>

        <Box
          maxW="210px"
          overflow="hidden"
          borderRadius="5px"
          boxShadow="lg"
          m="0 0 15px 15px"
          textAlign="center"
        >
          <ChakraLink as={ReactRouterLink} to="/gallery/mexico">
            <Image
              src={pyramid}
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
              Chitzen-Itza
            </Text>
            <Button size="25px">{<DeleteIcon />}</Button>
          </HStack>
        </Box>

        <Box
          maxW="245px"
          overflow="hidden"
          borderRadius="5px"
          boxShadow="lg"
          m="0 0 15px 15px"
          textAlign="center"
        >
          <Image
            src={girlPyramid}
            alt="Greece"
            position="relative"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          <HStack display="flex" justify="center">
            <Text fontWeight="semibold" fontSize="25px">
              By The Pyramid
            </Text>
            <Button size="25px">{<DeleteIcon />}</Button>
          </HStack>
        </Box>
        <Button ml="100px">{<AddIcon />}</Button>
      </HStack>
    </div>
  );
};

export default MexicoGallery;
