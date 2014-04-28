var dict = require('dict');
var actionsByEntity = dict({
    "/thewestinseattlehotel": {
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
    "/pages/seattle-washington/110843418940484": {
        BookFlight: [
            {},
            {}
        ],
        BookHotel: [
            {},
            {}
        ],
        GetDirections: [
            {},
            {}
        ],
        Like: [
            {}
        ],
        Share: [
            {},
            {}
        ]
    }
});

module.exports = actionsByEntity;
