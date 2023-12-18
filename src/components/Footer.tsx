import { Box, Text, VStack, Image, HStack } from "@chakra-ui/react";
import Logo from "../components/images/logo_black.png";

const Footer = () => {
  return (
    <Box h="500px" bg="#b3bab4">
      <VStack align="left" p="50px 0 0 200px">
        <VStack align="left">
          <Image src={Logo} w="200px" />
          <Text fontSize="20px">
            Dare to Dream, Choose to Wander: Begin Your Journey
          </Text>
        </VStack>
        <HStack pt="30px">
          <VStack>
            <Text fontSize="20px" pt="30px" fontWeight="bold">
              Learn More
            </Text>
            <Text fontSize="20px" pt="30px">
              About Us
            </Text>
            <Text fontSize="20px" pt="30px">
              Our Alogrithm
            </Text>
          </VStack>
          <VStack pl="200px">
            <Text fontSize="20px" pt="30px" fontWeight="bold">
              Join Us
            </Text>
            <Text fontSize="20px" pt="30px">
              Careers
            </Text>
            <Text fontSize="20px" pt="30px">
              Student Programs
            </Text>
          </VStack>
          <VStack pl="200px">
            <Text fontSize="20px" pt="30px" fontWeight="bold">
              Disclaimers
            </Text>
            <Text fontSize="20px" pt="30px">
              Terms and Conditions
            </Text>
            <Text fontSize="20px" pt="30px">
              Copyright Law
            </Text>
          </VStack>
          <VStack pl="200px">
            <Text fontSize="20px" pt="30px" fontWeight="bold">
              Contact Us
            </Text>
            <Text fontSize="20px" pt="30px">
              Twitter
            </Text>
            <Text fontSize="20px" pt="30px">
              Instagarm
            </Text>
          </VStack>
          <VStack pl="200px">
            <Text fontSize="20px" pt="30px" fontWeight="bold">
              Help
            </Text>
            <Text fontSize="20px" pt="30px">
              FAQs
            </Text>
            <Text fontSize="20px" pt="30px">
              Support
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
