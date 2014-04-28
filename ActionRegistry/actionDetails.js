var dict = require('dict');
var actionDetails = dict({
    "bookflight": {
        "friendlyName": "Book a Flight",
        "providers": [
            {
                "Kayak": {
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
    }
});

module.exports = actionDetails;
