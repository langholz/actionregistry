var actionDetails = {
    "bookflight": {
        "friendlyName": "Book a Flight",
        "providers": [
            {
                "Kayak": {
                    "target": "http://www.kayak.com/flights/%origin%-%daddr%/%depart/%return%",
                    "friendlyName": "Kayak",
                    "params": [
                        {"origin": {"friendlyName": "Origin" }},
                        {"destination": {"friendlyName": "Destination" }},
                        {"depart":{ "friendlyName": "Depart Date" }},
                        {"return":{ "friendlyName": "Return Date" }}
                    ]
                }
            },
            {
                "Expedia": { "friendlyName": "Expedia" }
            }
        ]
    },
    "getdirections": {
        "friendlyName": "Get Directions",
        "providers": [
            {
                "GoogleMaps": {
                    "target": "https://maps.google.com/maps?daddr=%daddr%&saddr=%saddr%",
                    "friendlyName": "Google Maps",
                    "params": [
                        {"daddr": {"friendlyName": "Destination Address"}},
                        {"saddr": {"friendlyName": "Starting Address"}}
                    ]
                }
            },
            {
                "BingMaps": {"friendlyName": "Bing Maps" }
            }
        ]
    },
    "GetHotelReview": {},
    "PostHotelReview": {},
    "Like": {},
    "Share": {}
};

module.exports = actionDetails;
