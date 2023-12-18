import Header from "../components/Header";
import ForumPost from "../components/ForumPost";
import ForumTopics from "../components/ForumTopics";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";

const Forum = () => {
  return (
    <Box>
      <Header />

      <VStack bg="#b3bab4" h="100%">
        <ForumTopics />
        <HStack justifyContent="space-between" w="75%" p="0 10px 0 10px">
          <Text fontWeight="bold" fontSize="20px">
            My Posts
          </Text>
          <Button>New Post</Button>
        </HStack>
        <ForumPost
          title="I'm going to Los Angeles next week. What are the best burger
              spots?"
          date="12/15/2023"
          forum="LosAngelesLocals"
        >
          I consider myself a big fan of burgers. I'm always looking to try the
          best burgers everywhere I travel. I have a ranked list of the best
          burgers I've tried and its a pretty good list. So if anyone can
          recommend a really good burger spot. Let me know. I heard about Burger
          She Wrote and Hi-Ho, so i'll be trying those, but if there are any
          other ones to try let me know.
        </ForumPost>
        <ForumPost
          title="Where the best place to stay in Los Angeles?"
          date="12/10/2023"
          forum="LosAngelesLocals"
        >
          I was wondering where is the best place to stay in LA. I was thinks
          West Hollywood or maybe by the beach? Santa Monica? I'm looking for a
          nice place I can go out and meet new people. So just trying to find
          advice from people that live there or visited and had a good time.
          Thanks!
        </ForumPost>
        <ForumPost
          title="What's your opinion of AirBNB vs Hotels?"
          date="12/5/2023"
          forum="Airbnb"
        >
          I'm going on a trip soon and I was thinking what is better hotels or
          airbnb? I mean i know airbnb are nice because you get more space, but
          hotels have all the amenities and you have people that clean your room
          for you. I've been at some airbnb too where they look nice in the
          picture, but when you get there you got 1 pillow for 3 people. I mean
          I guess you can always bring you own pillows, but in my opinion I just
          see hotels are better. Please let me know to if I just don't know how
          to look for the right airbnb.
        </ForumPost>
      </VStack>
    </Box>
  );
};

export default Forum;
