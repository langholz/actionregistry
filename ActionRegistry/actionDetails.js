var actionDetails = {
    "bookflight": {
        "friendlyName": "Book a Flight",
        "providers": [
            {
                "Kayak": {
                    // http://www.kayak.com/flights/SFO-SEA/2014-04-30/2014-05-22
                    "target": "http://www.kayak.com/flights/%origin%-%destination%/%depart/%return%",
                    "friendlyName": "Kayak",
                    "params": [
                        {"origin": {"friendlyName": "Origin" }},
                        {"destination": {"friendlyName": "Destination" }},
                        {"depart":{ "friendlyName": "Depart Date" }},
                        {"return":{ "friendlyName": "Return Date" }}
                    ]
                }
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
    "gethotelreview": {},
    "posthotelreview": {},
    "like": {},
    "share": {}
};

module.exports = actionDetails;
