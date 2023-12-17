export interface Day {
    time: string;
    description: string;
    location: string;
    latitude: number;
    longitude: number;
    color: string;
  }

const dateActivity: Day[][] = [
    [
      {
        time: "4:00",
        description: "Board flight to Paris, France",
        location: "J.F.K Airport",
        latitude: 48.85,
        longitude: 2.35,
        color: "#FAEED1"
      },
      {
        time: "17:00",
        description: "Arrive in Paris, France",
        location: "C.D.G Airport",
        latitude: 49.01,
        longitude: 2.55,
        color: "#9A3B3B"
      },
      {
        time: "20:30",
        description: "Get to hotel: Pullman Paris",
        location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
        latitude: 48.85575137333703,
        longitude: 2.2928969984304812,
        color: "#A9B388"
      },
      {
        time: "21:30",
        description: "Eat Dinner: Frame Restaurant",
        location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
        latitude: 48.856045329356874,
        longitude: 2.2932334999383763,
        color: "#B99470"
      },
    ],
    [
      {
        time: "7:00",
        description: "Get Breakfast at Aux Cerises",
        location: "47 Av. De Suffren, 75007",
        latitude: 48.85382667529758,
        longitude: 2.2972725756872805,
        color: "#9A3B3B"
      },
      {
        time: "9:30",
        description:
          "Explore Palasis de Chaillot and take pictures with the Eiffel Tower",
        location: "Palais de Chaillot, 1 Pl. du Trocadéro et du 11 Novembre",
        latitude: 48.86238275007815,
        longitude: 2.288102214351393,
        color: "#5F6F52"
      },
      {
        time: "11:30",
        description: "Take a cab to the Arc de Triomphe",
        location: "",
        latitude: 48.86230,
        longitude: 2.28827,
        color: "#A9B388"
      },
      {
        time: "12:00",
        description: "Explore the Arc de Triomphe",
        location: "Arc de Triomphe, Pl. Charles de Gaulle",
        latitude: 48.87395047253323,
        longitude: 2.294984584529037,
        color: "#DED0B6"
      },
      {
        time: "14:00",
        description: "Lunch at Les Cocottes",
        location: "135 Rue Saint-Dominique, 75507 Paris",
        latitude: 48.87518,
        longitude: 2.30118,
        color: "#B99470"
      },
      {
        time: "16:00",
        description: "Explore and take pictures at Hotel des Invalides",
        location: "Hotel des Invalides, 75007 Paris",
        latitude: 48.85676,
        longitude: 2.31265,
        color: "#9BA17B"
      },
      {
        time: "19:00",
        description: "To the top of the Eiffel Tower",
        location: "Eiffel Tower, Champ de Mars, 5 Av. Anatole France",
        latitude: 48.85821,
        longitude: 2.29458,
        color: "#CFB997"
      },
      {
        time: "21:00",
        description: "Eat dinner at the Eiffel Tower: Jules Verne",
        location: "Avenue Gustave Eiffel 2eme, Eiffel Tower, Av. Anatole France",
        latitude: 48.85853,
        longitude: 2.29441,
        color: "#61764B"
      },
    ],
    [
        {
          time: "4:00",
          description: "Board flight to Paris, France",
          location: "J.F.K Airport",
          latitude: 48.85,
          longitude: 2.35,
          color: "#61764B"
        },
        {
          time: "17:00",
          description: "Arrive in Paris, France",
          location: "C.D.G Airport",
          latitude: 49.01,
          longitude: 2.55,
          color: "red"
        },
        {
          time: "19:30",
          description: "Get to hotel: Pullman Paris",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.292,
          color: "red"
        },
        {
          time: "20:30",
          description: "Eat Dinner: Frame Restaurant",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.293,
          color: "red"
        },
      ],
      [
        {
          time: "4:00",
          description: "Board flight to Paris, France",
          location: "J.F.K Airport",
          latitude: 48.85,
          longitude: 2.35,
          color: "red"
        },
        {
          time: "17:00",
          description: "Arrive in Paris, France",
          location: "C.D.G Airport",
          latitude: 49.01,
          longitude: 2.55,
          color: "red"
        },
        {
          time: "19:30",
          description: "Get to hotel: Pullman Paris",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.292,
          color: "red"
        },
        {
          time: "20:30",
          description: "Eat Dinner: Frame Restaurant",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.293,
          color: "red"
        },
      ],
      [
        {
          time: "4:00",
          description: "Board flight to Paris, France",
          location: "J.F.K Airport",
          latitude: 48.85,
          longitude: 2.35,
          color: "red"
        },
        {
          time: "17:00",
          description: "Arrive in Paris, France",
          location: "C.D.G Airport",
          latitude: 49.01,
          longitude: 2.55,
          color: "red"
        },
        {
          time: "19:30",
          description: "Get to hotel: Pullman Paris",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.292,
          color: "red"
        },
        {
          time: "20:30",
          description: "Eat Dinner: Frame Restaurant",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.293,
          color: "red"
        },
      ],
      [
        {
          time: "4:00",
          description: "Board flight to Paris, France",
          location: "J.F.K Airport",
          latitude: 48.85,
          longitude: 2.35,
          color: "red"
        },
        {
          time: "17:00",
          description: "Arrive in Paris, France",
          location: "C.D.G Airport",
          latitude: 49.01,
          longitude: 2.55,
          color: "red"
        },
        {
          time: "19:30",
          description: "Get to hotel: Pullman Paris",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.292,
          color: "red"
        },
        {
          time: "20:30",
          description: "Eat Dinner: Frame Restaurant",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.293,
          color: "red"
        },
      ],
      [
        {
          time: "4:00",
          description: "Board flight to Paris, France",
          location: "J.F.K Airport",
          latitude: 48.85,
          longitude: 2.35,
          color: "red"
        },
        {
          time: "17:00",
          description: "Arrive in Paris, France",
          location: "C.D.G Airport",
          latitude: 49.01,
          longitude: 2.55,
          color: "red"
        },
        {
          time: "19:30",
          description: "Get to hotel: Pullman Paris",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.292,
          color: "red"
        },
        {
          time: "20:30",
          description: "Eat Dinner: Frame Restaurant",
          location: "18 Avenue De Suffren, 22 Rue Jean Rey Entree Au",
          latitude: 48.85,
          longitude: 2.293,
          color: "red"
        },
      ],
  ];

  export default dateActivity;