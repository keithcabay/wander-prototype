import { Box, Flex } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

interface Props {
  lat: number;
  lng: number;
  day: number;
}

const MapSchedule = ({ lat, lng, day }: Props) => {
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const MAP_KEY = import.meta.env.VITE_REACT_APP_MAP_KEY;

  //const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ lat, lng });
  const [currentDay, setCurrentDay] = useState(dateActivity[day]);

  useEffect(() => {
    setCurrentDay(dateActivity[day]);
  }, [day]);

  useEffect(() => {
    setPosition({ lat, lng });
  }, [lat, lng]);

  return (
    <APIProvider apiKey={API_KEY}>
      <Flex justifyContent="center">
        <Box h="500px" w="1200px">
          <Map zoom={12} center={position} mapId={MAP_KEY}>
            {currentDay.map(({ latitude, longitude, color }) => {
              return (
                <AdvancedMarker
                  position={{ lat: latitude, lng: longitude }}
                  //onClick={() => setOpen(true)}
                >
                  <Pin
                    background={color}
                    borderColor="black"
                    glyphColor={"black"}
                  />
                  {/* {open && (
                    <InfoWindow
                      position={{ lat: latitude, lng: longitude }}
                      onCloseClick={() => setOpen(false)}
                    >
                      <Text>This is Paris!</Text>
                    </InfoWindow>
                  )} */}
                </AdvancedMarker>
              );
            })}
          </Map>
        </Box>
      </Flex>
    </APIProvider>
  );
};

export default MapSchedule;
