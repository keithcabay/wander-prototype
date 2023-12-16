import {
  Box,
  VStack,
  Text,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useState } from "react";

interface Day {
  time: string;
  description: string;
  location: string;
}

const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const dateActivity: Day[][] = [
  [
    {
      time: "4:00",
      description: "Board flight to Paris, France",
      location: "J.F.K Airport",
    },
    {
      time: "17:00",
      description: "Arrive in Paris, France",
      location: "C.D.G Airport",
    },
    {
      time: "19:30",
      description: "Get to hotel: Pullman Paris",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
    {
      time: "20:30",
      description: "Eat Dinner: Frame Restaurant",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
  ],
  [
    {
      time: "7:00",
      description: "Get Breakfast at Aux Cerises",
      location: "47 Av. De Suffren, 75007",
    },
    {
      time: "9:30",
      description:
        "Explore Trocadero Platform and take pictures with the Eiffel Tower",
      location: "Pl. du Trocadero et du 11 Novembre",
    },
    {
      time: "11:30",
      description: "Take a cab to the Arc de Triomphe",
      location: " ",
    },
    {
      time: "12:00",
      description: "Explore the Arc de Triomphe",
      location: "Arc de Triomphe, Pl. Charles de Gaulle",
    },
    {
      time: "14:00",
      description: "Lunch at Les Cocottes",
      location: "135 Rue Saint-Dominique, 75507 Paris",
    },
    {
      time: "16:00",
      description: "Explore and take pictures at Hotel des Invalides",
      location: "Hotel des Invalides, 75007 Paris",
    },
    {
      time: "19:00",
      description: "To the top of the Eiffel Tower",
      location: "Eiffel Tower, Champ de Mars, 5 Av. Anatole France",
    },
    {
      time: "21:00",
      description: "Eat dinner at the Eiffel Tower: Jules Verne",
      location: "Avenue Gustave Eiffel 2eme, Eiffel Tower, Av. Anatole France",
    },
  ],
  [
    {
      time: "4:00",
      description: "Board flight to Paris, France",
      location: "J.F.K Airport",
    },
    {
      time: "17:00",
      description: "Arrive in Paris, France",
      location: "C.D.G Airport",
    },
    {
      time: "19:30",
      description: "Get to hotel: Pullman Paris",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
    {
      time: "20:30",
      description: "Eat Dinner: Frame Restaurant",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
  ],
  [
    {
      time: "4:00",
      description: "Board flight to Paris, France",
      location: "J.F.K Airport",
    },
    {
      time: "17:00",
      description: "Arrive in Paris, France",
      location: "C.D.G Airport",
    },
    {
      time: "19:30",
      description: "Get to hotel: Pullman Paris",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
    {
      time: "20:30",
      description: "Eat Dinner: Frame Restaurant",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
  ],
  [
    {
      time: "4:00",
      description: "Board flight to Paris, France",
      location: "J.F.K Airport",
    },
    {
      time: "17:00",
      description: "Arrive in Paris, France",
      location: "C.D.G Airport",
    },
    {
      time: "19:30",
      description: "Get to hotel: Pullman Paris",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
    {
      time: "20:30",
      description: "Eat Dinner: Frame Restaurant",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
  ],
  [
    {
      time: "4:00",
      description: "Board flight to Paris, France",
      location: "J.F.K Airport",
    },
    {
      time: "17:00",
      description: "Arrive in Paris, France",
      location: "C.D.G Airport",
    },
    {
      time: "19:30",
      description: "Get to hotel: Pullman Paris",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
    {
      time: "20:30",
      description: "Eat Dinner: Frame Restaurant",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
  ],
  [
    {
      time: "4:00",
      description: "Board flight to Paris, France",
      location: "J.F.K Airport",
    },
    {
      time: "17:00",
      description: "Arrive in Paris, France",
      location: "C.D.G Airport",
    },
    {
      time: "19:30",
      description: "Get to hotel: Pullman Paris",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
    {
      time: "20:30",
      description: "Eat Dinner: Frame Restaurant",
      location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
    },
  ],
];

const Calendar = () => {
  const [currentDayActivity, setCurrentDayActivity] = useState<Day[][]>([[]]);
  const [selectedDate, setSelectedDate] = useState(15);

  const handleOnClick = (index: number) => {
    setSelectedDate(index);
    setCurrentDayActivity([dateActivity[index - 14]]);
  };

  return (
    <VStack maxW="1000px">
      <Box display="flex" flexWrap="wrap" maxW="450px" justifyContent="center">
        {dates.map((date, index) => {
          return (
            <Box
              key={index}
              flex="0 0 calc(14.28% - 10px)"
              textAlign="center"
              maxW="50px"
              borderWidth="1px"
              borderRadius="50%"
              margin="5px"
              padding="10px"
              justifyContent="flex-start"
              boxShadow="base"
              bg={date >= 15 && date <= 21 ? "#b3bab4" : "white"}
              onClick={() => handleOnClick(index)}
              _hover={
                date >= 15 && date <= 21
                  ? { cursor: "pointer", bg: "#8d948e", boxShadow: "lg" }
                  : {}
              }
            >
              <Text>{date}</Text>
            </Box>
          );
        })}
      </Box>
      <Box>
        <TableContainer>
          <Table>
            <TableCaption>{selectedDate}</TableCaption>
            <Thead>
              <Tr>
                <Th>Time</Th>
                <Th>Activity</Th>
                <Th>Location</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentDayActivity &&
                currentDayActivity.map(
                  (dayArray) =>
                    dayArray &&
                    dayArray.map(({ time, description, location }, index) => (
                      <Tr key={index}>
                        <Td>{time}</Td>
                        <Td>{description}</Td>
                        <Td>{location}</Td>
                      </Tr>
                    ))
                )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </VStack>
  );
};

export default Calendar;
