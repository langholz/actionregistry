var dict = require('dict');
var actionsByEntity = dict({
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
            "Kayak": {target: "http://www.kayak.com/flights/%origin%-%daddr%/%depart/%return%"},
            "Expedia": {target: ""}
        },
        GetDirections: {
            "GoogleMaps": {target: "https://maps.google.com/maps?daddr=%daddr%&saddr=%saddr%"},
            "BingMaps": {target: ""}
        },
        BookHotel: {},
        Like: {},
        Share: {}
    }
});

module.exports = actionsByEntity;
