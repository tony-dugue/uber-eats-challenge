const localRestaurants = [
  {
    name: "Beachside Bar (Rennes)",
    image_url: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
    location: {
      city: "Rennes",
    }
  },
  {
    name: "Restaurant de l'écluse (Dinard)",
    image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$",
    reviews: 1244,
    rating: 3.7,
    location: {
      city: "Dinard",
    }
  },
  {
    name: "India's Grill (Dinan)",
    image_url: "https://media.istockphoto.com/photos/empty-restaurant-interior-picture-id1290237592?b=1&k=20&m=1290237592&s=170667a&w=0&h=fgXWrrQ7qWpbiO8O_dpEVlS4JsTZYH8e3FoZ4UeoQH8=",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
    location: {
      city: "Dinan",
    }
  },
  // modèle Yelp
  {
    rating: 4.5,
    price: "$$",
    phone: "+14154212337",
    id: "molinari-delicatessen-san-francisco",
    categories: [
      {
        "alias": "delis",
        "title": "Delis"
      }
    ],
    review_count: 910,
    name: "Molinari Delicatessen (Rennes)",
    url: "https://www.yelp.com/biz/molinari-delicatessen-san-francisco",
    coordinates: {
      latitude: 37.7983818054199,
      longitude: -122.407821655273
    },
    image_url: "http://s3-media4.fl.yelpcdn.com/bphoto/6He-NlZrAv2mDV-yg6jW3g/o.jpg",
    location: {
      city: "Rennes",
      country: "US",
      address2: "",
      address3: "",
      state: "CA",
      address1: "373 Columbus Ave",
      zip_code: "94133"
    }
  },
];

export default localRestaurants
