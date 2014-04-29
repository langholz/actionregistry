var actionsByOGType = {
    "hotel": [
        "BookHotel",
        "GetHotelReview",
        "PostHotelReview",
        "GetDirections",
        "Like",
        "Share"
    ],
    "restaurant": [
        "BookTable",
        "GetDirections",
        "WriteReview",
        "GetReviews"
    ],
    "video.movie": [
        "WriteReview",
        "BuyTickets",
        "GetDirections",
        "Stream"
    ],
    "video.tv_show": [
        "WriteReview",
        "BuyTickets",
        "GetDirections",
        "AddToQueue"
    ]
};

module.exports = actionsByOGType;
