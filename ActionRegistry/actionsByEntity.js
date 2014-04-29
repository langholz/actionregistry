var actionsByEntity = {
    "http://facebook.com/thewestinseattlehotel": {
        BookHotel: [
            {},
            {}
        ],
        GetHotelReview: [
            {},
            {}
        ],
        PostHotelReview: [
            {},
            {}
        ],
        GetDirection: [
            {},
            {}
        ],
        Like: [
            {},
            {}
        ],
        Share: [
            {},
            {}
        ]
    },
    "http://facebook.com/pages/seattle-washington/110843418940484": {
        BookFlight: {
            Kayak: {
          target: "http://www.kayak.com/flights/%origin%-%daddr%/%depart/%return%"
        },
            Expedia: {
          target: ""
        }
        },
        GetDirections: {
            GoogleMaps: {
          target: "https://maps.google.com/maps?daddr=%daddr%&saddr=%saddr%"
        },
            BingMaps: {
          target: ""
        }
        },
      BookHotel: {
        Expedia: {
          target: "http://www.expedia.com/Seattle-Hotels-The-Westin-Seattle.h16673.Hotel-Information"
        }
      }
    }
};

module.exports = actionsByEntity;
