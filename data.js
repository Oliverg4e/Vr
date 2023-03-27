var APP_DATA = {
  "scenes": [
    {
      "id": "0-2-jardin-banca",
      "name": "2-jardin banca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.6135784625048757,
        "pitch": 0.05542579764132327,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.32396262651372787,
          "pitch": 0.17842590894356647,
          "rotation": 0,
          "target": "1-3-jardin-puesto-observacion"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.589880970395761,
          "pitch": 0,
          "title": "Frutos",
          "text": "Árbol de frutos rojos"
        },
        {
          "yaw": -2.1260099130148298,
          "pitch": 0.20889129681355456,
          "title": "Torote&nbsp;",
          "text": "Arbol de corteza blanca"
        }
      ]
    },
    {
      "id": "1-3-jardin-puesto-observacion",
      "name": "3-jardin puesto observacion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17709254575541422,
          "pitch": -0.17184766619875802,
          "rotation": 0.7853981633974483,
          "target": "0-2-jardin-banca"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5750538358825992,
          "pitch": -0.4326032018557946,
          "title": "Puesto de observación&nbsp;",
          "text": "Desde aquí se pueden observar aves"
        }
      ]
    }
  ],
  "name": "Jardin Guyaqui",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
