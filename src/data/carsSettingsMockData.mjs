export const mockData = {
  company: {
    company_id: "1",
    name: "Компания АБС",
    short_link: "http://89.108.99.163/~HA9D4KXLWG",
    balance: '550',
  },
  cars: [
    {
      car_id: "1",
      name: "VW Passat",
      pic: 'https://leaflet-server-igorgmail.vercel.app/pics/car1.png',//"http://89.108.99.163/pics/car1.png",
      imei: "350612070317373",
      alter_imei: '350612070317373'
    },
    {
      car_id: "2",
      name: "Renault Master",
      pic: 'https://leaflet-server-igorgmail.vercel.app/pics/car2.png',//"http://89.108.99.163/pics/car2.png",
      imei: "333",
      alter_imei: "444"
    },
    {
      car_id: "33",
      name: "Ларгус Иванов",
      pic: "https://leaflet-server-igorgmail.vercel.app/pics/car3.png",//'/img/car3.png',//"http://89.108.99.163/pics/car3.png",
      imei: "eeer",
      alter_imei: null
    }
  ],
  points: [
    {
      point_id: "1",
      name: "home",
      lat: "53.882645",
      lng: "27.5217466",
      radius: "100"
    },
    {
      point_id: "2",
      name: "работа",
      lat: "53.883464",
      lng: "27.564312",
      radius: "50"
    },
    {
      point_id: "3",
      name: "точка 1",
      lat: "53.982645",
      lng: "27.2217466",
      radius: "5"
    },
    {
      point_id: "4",
      name: "точка 2",
      lat: "53.653464",
      lng: "27.494312",
      radius: "300"
    },
    {
      point_id: "6",
      name: "Скотобаза2",
      lat: "50",
      lng: "33",
      radius: "1000"
    }
  ],
  events: [
    {
      event_id: "1",
      company_id: "1",
      car_id: "1",
      point_id: "1",
      event: "IN",
      time_response_sec: "0"
    },
    {
      event_id: "2",
      company_id: "1",
      car_id: "1",
      point_id: "1",
      event: "OUT",
      time_response_sec: "20"
    },
    {
      event_id: "3",
      company_id: "1",
      car_id: "2",
      point_id: "2",
      event: "IN",
      time_response_sec: "0"
    },
    {
      event_id: "4",
      company_id: "1",
      car_id: "33",
      point_id: "6",
      event: "IN",
      time_response_sec: "10"
    },
  ],
  type_of_events: [
    "IN",
    "OUT"
  ],
  icons: [
    {
      icon_id: "1",
      url: "https://leaflet-server-igorgmail.vercel.app/pics/car1.png" //"http://89.108.99.163/pics/car1.png"
    },
    {
      icon_id: "2",
      url: "https://leaflet-server-igorgmail.vercel.app/pics/car2.png" //"http://89.108.99.163/pics/car2.png"
    },
    {
      icon_id: "3",
      url: "https://leaflet-server-igorgmail.vercel.app/pics/car3.png" //"http://89.108.99.163/pics/car3.png"
    },
    {
      icon_id: "4",
      url: "https://leaflet-server-igorgmail.vercel.app/pics/car4.png" //"http://89.108.99.163/pics/car4.png"
    },
    {
      icon_id: "5",
      url: "https://leaflet-server-igorgmail.vercel.app/pics/car5.png" //"http://89.108.99.163/pics/car5.png"
    },
    {
      icon_id: "6",
      url: "https://leaflet-server-igorgmail.vercel.app/pics/car6.png" //"http://89.108.99.163/pics/car6.png"
    },
    {
      icon_id: "7",
      url: "https://leaflet-server-igorgmail.vercel.app/pics/car7.png" //"http://89.108.99.163/pics/car7.png"
    },
    {
      icon_id: "8",
      url: "https://leaflet-server-igorgmail.vercel.app/pics/car8.png" //"http://89.108.99.163/pics/car8.png"
    },
    {
      icon_id: "9",
      url: "https://leaflet-server-igorgmail.vercel.app/pics/car9.png" //"http://89.108.99.163/pics/car9.png"
    }
  ],
  users: [
    {
      user_id: '1',
      email: 'kenherli@gmail.com',
      role: 'admin'
    },
    {
      user_id: '2',
      email: 'petrov@mail.pl',
      role: 'user'
    },

  ]
}

export const mockUserData = {
  users: [
    {
      id: '1',
      email: 'kenherli@gmail.com',
      role: 'admin'
    },
    {
      id: '2',
      email: 'petrov@mail.pl',
      role: 'user'
    },

  ]
}