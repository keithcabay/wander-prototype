import { Box, Text, Flex } from "@chakra-ui/react";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const MapSchedule = () => {
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const MAP_KEY = import.meta.env.VITE_REACT_APP_MAP_KEY;

  const position = { lat: 48.85, lng: 2.35 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={API_KEY}>
      <Flex justifyContent="center">
        <Box h="500px" w="500px">
          <Map zoom={12} center={position} mapId={MAP_KEY}>
            <AdvancedMarker position={position} onClick={() => setOpen(true)}>
              <Pin borderColor="black" glyphColor={"black"} />
            </AdvancedMarker>
            {open && (
              <InfoWindow
                position={position}
                onCloseClick={() => setOpen(false)}
              >
                <Text>This is Paris!</Text>
              </InfoWindow>
            )}
          </Map>
        </Box>
      </Flex>
    </APIProvider>
  );
};

export default MapSchedule;
