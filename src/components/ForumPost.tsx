import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import profilePic from "./images/profilePic.jpeg";

interface PostProps {
  title: string;
  children: string;
  date: string;
  forum: string;
}

const ForumPost = ({ children, title, date, forum }: PostProps) => {
  return (
    <Box bg="white" w="75%" borderRadius="20px" mb="20px">
      <VStack align="start" justifyContent="flex-start">
        <Box m="20px 20px 20px 20px">
          <HStack>
            <Image
              src={profilePic}
              alt="profilePic"
              borderRadius="1000px"
              boxSize="40px"
            />
            <Text fontSize="20px" fontWeight="bold">
              {title}
            </Text>
            <VStack ml="auto" alignItems="left">
              <Text fontSize="15px">Date Posted: {date}</Text>
              <Text fontSize="15px">Forum: {forum} </Text>
            </VStack>
          </HStack>
          <Text pt="15px">{children}</Text>
        </Box>
        <HStack ml="auto">
          <Button colorScheme="gray" size="md">
            View comments
          </Button>
          <HStack p="10px 10px 10px 0">
            <Button colorScheme="green" size="md">
              Reply
            </Button>
            <Button colorScheme="red" size="md">
              Delete
            </Button>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ForumPost;
