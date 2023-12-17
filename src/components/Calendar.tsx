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
import dateActivity, { Day } from "./Data";
import MapSchedule from "../components/MapSchedule";

interface Location {
  lat: number;
  lng: number;
}

const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const Calendar = () => {
  const [currentDayActivity, setCurrentDayActivity] = useState<Day[][]>([[]]);
  const [selectedDate, setSelectedDate] = useState(14);
  const [currLocation, setCurrLocation] = useState<Location>({
    lat: 48.85997,
    lng: 2.34678,
  });

  const handleOnClick = (index: number) => {
    setSelectedDate(index);
    setCurrentDayActivity([dateActivity[index - 14]]);
  };

  const handleLocationClick = (day: number, activity: number) => {
    const currActivity = dateActivity[day][activity];

    setCurrLocation({
      lat: currActivity.latitude,
      lng: currActivity.longitude,
    });
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
        <TableContainer w="1200px">
          <Table>
            <TableCaption>March {selectedDate + 1}th</TableCaption>
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
                        <Td
                          onClick={() =>
                            handleLocationClick(selectedDate - 14, index)
                          }
                        >
                          {location}
                        </Td>
                      </Tr>
                    ))
                )}
            </Tbody>
          </Table>
        </TableContainer>
        {selectedDate >= 14 && selectedDate < 21 ? (
          <MapSchedule
            lat={currLocation.lat}
            lng={currLocation.lng}
            day={selectedDate - 14}
          />
        ) : (
          <></>
        )}
      </Box>
    </VStack>
  );
};

export default Calendar;
