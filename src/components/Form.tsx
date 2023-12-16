import {
  Box,
  Text,
  FormControl,
  FormLabel,
  VStack,
  RadioGroup,
  Radio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Progress,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const Form = () => {

  const progressPercent = 25;

  return (
    <Box>
      <FormControl>
        <FormLabel fontSize="25px" p="30px 0 0 50px">
          What Climate Do You Want To Explore?
        </FormLabel>
        <RadioGroup>
          <VStack align="flex-start" pl="50px">
            <Radio value="Tropical">Tropical (&gt;85F Humid)</Radio>
            <Radio value="Warm">Warm (&gt;80F)</Radio>
            <Radio value="Cool">Cool (&lt;50F)</Radio>
            <Radio value="Not Sure">Not Sure / Any</Radio>
          </VStack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel fontSize="25px" p="30px 0 0 50px">
          What Interests You?
        </FormLabel>
        <RadioGroup>
          <VStack align="flex-start" pl="50px">
            <Radio value="Hiking">Hiking/Walking</Radio>
            <Radio value="Water">
              Water Activities (Swimming, Diving, etc.)
            </Radio>
            <Radio value="History">
              History (Museum, Historical Landmarks, etc.)
            </Radio>
            <Radio value="Nature">Nature (Animals, Plants, etc.)</Radio>
            <Radio value="Relax">I just want to relax 😅</Radio>
          </VStack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel fontSize="25px" p="30px 0 0 50px">
          How Long Can You Be Away?
        </FormLabel>
        <RadioGroup>
          <VStack align="flex-start" pl="50px">
            <Radio value="5-days">5 Days</Radio>
            <Radio value="7-days">7 Days</Radio>
            <Radio value="10-days">10 Days</Radio>
            <Radio value="14-days">14 Days</Radio>
            <Radio value="longer-days">Longer</Radio>
          </VStack>
        </RadioGroup>
      </FormControl>
      <Box maxW="600px" m="30px 0 0 50px">
        <Text fontSize="25px">What Is Your Budget For This Trip?</Text>
        <Text fontSize="15px" mt="10px">
          Enter A Value Between $500-$20,000
        </Text>
        <NumberInput defaultValue={0} min={500} max={20000}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
      <ChakraLink as={ReactRouterLink} to="/schedule">
        <Flex justify="center" p="15px 0 0 0">
          <Button colorScheme="teal">Submit</Button>
        </Flex>
      </ChakraLink>
      <Box position="relative" p="50px 50px 30px 50px">
        <Progress
          value={progressPercent}
          position="absolute"
          height="3px"
          width="full"
          top="10px"
          zIndex={1}
        />
      </Box>
    </Box>
  );
};

export default Form;
