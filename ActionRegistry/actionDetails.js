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
    "bookhotel": {
        "friendlyName": "Book Hotel",
        "providers": [
            {
                "Kayak": {
                    "target": "http://www.kayak.com/Seattle-Hotels-Four-Seasons-Hotel-Seattle.204154.ksp",
                    "friendlyName": "Kayak",
                    "params": []
                },
                "Hipmunk": {
                    "target": "http://www.hipmunk.com/hotel/Seattle-WA/Four-Seasons-Hotel-Seattle-509bfe2766edc8466101d507",
                    "friendlyName": "Hipmunk",
                    "params": []
                }
            }
        ]
    },
    "gethotelreview": {
        "friendlyName": "Get Hotel Review",
        "providers": [
            {
                "TripAdvisor": {
                    "target": "http://www.tripadvisor.com/Hotel_Review-g60878-d1152288-Reviews-Four_Seasons_Hotel_Seattle-Seattle_Washington.html#REVIEWS",
                    "friendlyName": "Trip Advisor",
                    "params": []
                },
                "Yelp": {
                    "target": "http://www.yelp.com/biz/four-seasons-hotel-seattle-seattle",
                    "friendlyName": "Yelp",
                    "params": []
                }
            }
        ]
    },
    "posthotelreview": {},
    "like": {},
    "share": {}
};

module.exports = actionDetails;
