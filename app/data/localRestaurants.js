const localRestaurants = [
  {
    name: "Beachside Bar (Rennes)",
    image_url: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: [{ title: "Café"}, {title: "Bar"}],
    price: "€",
    review_count: 1244,
    rating: 4.5,
    location: {
      city: "Rennes",
    },
    service: ["à emporter"]
  },
  {
    name: "Restaurant de l'écluse (Dinard)",
    image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: [{ title: "Café"}, {title: "Bar"}],
    price: "",
    review_count: 1244,
    rating: 3.7,
    location: {
      city: "Dinard",
    },
    service: ["livraison", "à emporter"]
  },
  {
    name: "India's Grill (Dinan)",
    image_url: "https://media.istockphoto.com/photos/empty-restaurant-interior-picture-id1290237592?b=1&k=20&m=1290237592&s=170667a&w=0&h=fgXWrrQ7qWpbiO8O_dpEVlS4JsTZYH8e3FoZ4UeoQH8=",
    categories: [{ title: "Indien"}, {title: "Bar"}],
    price: "€",
    review_count: 700,
    rating: 4.9,
    location: {
      city: "Dinan",
    },
    service: ["livraison", "à emporter"]
  },
  // modèle Yelp
  {
    rating: 4.5,
    price: "€",
    phone: "+14154212337",
    id: "molinari-delicatessen-san-francisco",
    categories: [{alias: "delis", title: "Epicerie fine"}],
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
    },
    service: ["livraison", "à emporter"]
  },
  {
    id: "2zWWZEUWMk39R1doOTHzaA",
    alias: "la-table-de-bernadette-dinan-2",
    name: "La Table de Bernadette",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/a8H_M0sQrtyqgyMzUfWO2Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-table-de-bernadette-dinan-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.4542941014474,
      longitude: -2.04894548407554
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "2 rue Haute Voie",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22",
      country: "FR",
      state: "22",
      display_address: [
        "2 rue Haute Voie",
        "22 Dinan",
        "France"
      ]
    },
    phone: "",
    display_phone: "",
    distance: 856.6420068426646,
    service: ["livraison", "à emporter"]
  },
  {
    id: "JHNITmpIm0OdoBvdjfHhZg",
    alias: "la-courtine-dinan",
    name: "La Courtine",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/wEw0S6Jq5ilG4lDWWVvPqQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-courtine-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 12,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.45465,
      longitude: -2.0477599
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "6 rue de la Croix",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "6 rue de la Croix",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296397441",
    display_phone: "+33 2 96 39 74 41",
    distance: 931.1726280309153,
    service: ["à emporter"]
  },
  {
    id: "bsq2jJOA4toSVKSjPSzvyQ",
    alias: "le-cosy-grill-dinan-2",
    name: "Le Cosy Grill",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/oI5U3o15NEi5Z7YSpGXWGw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-cosy-grill-dinan-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.45394,
      longitude: -2.04341
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "11 rue de la Poissonnerie",
      address2: "",
      address3: "",
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "11 rue de la Poissonnerie",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296850650",
    display_phone: "+33 2 96 85 06 50",
    distance: 1053.0137061872017,
    service: ["livraison", "à emporter"]
  },
  {
    id: "e_606H3GmvXHnK99l-Rurg",
    alias: "le-saint-louis-dinan",
    name: "Le Saint-Louis",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/J6AKUYOpKRTIM1RSExeUSg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-saint-louis-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.4504978,
      longitude: -2.0432249
    },
    transactions: [],
    price: "€",
    location: {
      address1: "9 rue de Léhon",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "9 rue de Léhon",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296398950",
    display_phone: "+33 2 96 39 89 50",
    distance: 836.9803663730646,
    service: ["livraison", "à emporter"]
  },
  {
    id: "IiS7pKC99xdxlpkiGZwovA",
    alias: "la-fleur-de-sel-dinan",
    name: "La Fleur de Sel",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/4ZZOSRKeqWXuXiCGWBQb_w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-fleur-de-sel-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 7,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "mediterranean",
        title: "Mediterranean"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.45244,
      longitude: -2.04356
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "7 rue Sainte-Claire",
      address2: "",
      address3: "",
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "7 rue Sainte-Claire",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296851514",
    display_phone: "+33 2 96 85 15 14",
    distance: 932.6473565972888,
    service: ["livraison"]
  },
  {
    id: "QPnD_mwt6P3F1GkP1qi6NA",
    alias: "l-atelier-gourmand-dinan-2",
    name: "L'Atelier Gourmand",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/WrEnL66nTL-CXi1pk8E4lQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-atelier-gourmand-dinan-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 14,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "sud_ouest",
        title: "Spécialité sud-ouest"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.455327,
      longitude: -2.038758
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "4 rue Quai",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "4 rue Quai",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296851418",
    display_phone: "+33 2 96 85 14 18",
    distance: 1410.0744564684449,
    service: ["livraison", "à emporter"]
  },
  {
    id: "P6nHltEXCVD-Dr1onUOigg",
    alias: "mr-robert-dinan",
    name: "Mr Robert",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/cpzoWMuT3qQtGAX5WtteLA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/mr-robert-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.45402,
      longitude: -2.04479
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "11 place des Cordeliers",
      address2: "",
      address3: "",
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "11 place des Cordeliers",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296852037",
    display_phone: "+33 2 96 85 20 37",
    distance: 983.2099309364977,
    service: ["livraison"]
  },
  {
    id: "uUWrEmNyEPIm_d1b9jX3NA",
    alias: "crêperie-ahna-dinan-2",
    name: "Crêperie Ahna",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/eNlY5-CzEMDWH1SVMbig2w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/cr%C3%AAperie-ahna-dinan-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 34,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.45403,
      longitude: -2.04356
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "7 rue Poissonnerie",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "7 rue Poissonnerie",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296390913",
    display_phone: "+33 2 96 39 09 13",
    distance: 1045.4423163841043,
    service: ["à emporter"]
  },
  {
    id: "CG_6PEQY5wy08y6RrYNNJg",
    alias: "le-cantorbery-dinan",
    name: "Le Cantorbery",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-cantorbery-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 5,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.45255,
      longitude: -2.04299
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "6 Rue Ste Claire",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "6 Rue Ste Claire",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296390252",
    display_phone: "+33 2 96 39 02 52",
    distance: 973.2151710981868,
    service: ["livraison", "à emporter"]
  },
  {
    id: "-_Mpx8QmhNc3urNq38r9Zw",
    alias: "la-lycorne-dinan",
    name: "La Lycorne",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/pNNPapR8vuWRxccydIOsug/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-lycorne-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 10,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.45422,
      longitude: -2.04342
    },
    transactions: [],
    location: {
      address1: "6 Rue Poissonnerie",
      address2: "",
      address3: "",
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "6 Rue Poissonnerie",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296390813",
    display_phone: "+33 2 96 39 08 13",
    distance: 1074.9431817626494,
    service: ["livraison", "à emporter"]
  },
  {
    id: "fIenaaQr_fttalL-Vc4hCQ",
    alias: "atypique-dinan",
    name: "Atypique",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/GRVjxEy6RF0BG4z2YGT87w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/atypique-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.4541372381779,
      longitude: -2.04351543155445
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "16 rue de la Poissonerie",
      address2: "",
      address3: "",
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "16 rue de la Poissonerie",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296805208",
    display_phone: "+33 2 96 80 52 08",
    distance: 1063.4195608005234,
    service: ["livraison"]
  },
  {
    id: "1oiAjNBYP-nWP_3s3tEIRA",
    alias: "les-trois-lunes-dinan",
    name: "Les Trois Lunes",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/Gb_lzyc5Z8gnpRSJymJBIQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/les-trois-lunes-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 9,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.45433,
      longitude: -2.044668
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "22 rue de la Lainerie",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "22 rue de la Lainerie",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33967191032",
    display_phone: "+33 9 67 19 10 32",
    distance: 1023.5185951199162,
    service: ["à emporter"]
  },
  {
    id: "44Y7NEVaUAruCqzmP_MB2w",
    alias: "la-duchesse-anne-dinan",
    name: "La Duchesse Anne",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-duchesse-anne-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.45099,
      longitude: -2.0434899
    },
    transactions: [],
    location: {
      address1: "10 place Duguesclin",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "10 place Duguesclin",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296395976",
    display_phone: "+33 2 96 39 59 76",
    distance: 840.0744967707781,
    service: ["livraison", "à emporter"]
  },
  {
    id: "MwqcFo8FRI8mBZ1-meCmjQ",
    alias: "la-bigoudène-dinan-2",
    name: "La Bigoudène",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/Dl6Co2VINQLgmHyY7KXExA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-bigoud%C3%A8ne-dinan-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.4541688666048,
      longitude: -2.0447012497375
    },
    transactions: [],
    price: "€",
    location: {
      address1: "17 Place Cordeliers",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "17 Place Cordeliers",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296398557",
    display_phone: "+33 2 96 39 85 57",
    distance: 1008.1056341973783,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Ij-C-rsJxTPAVy3ITc70Jw",
    alias: "le-zag-dinan",
    name: "Le Zag",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/OWzjcHrlomTXq4lR4qiqsg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-zag-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      },
      {
        alias: "italian",
        title: "Italien"
      },
      {
        alias: "lounges",
        title: "Lounges"
      },
      {
        alias: "vegetarian",
        title: "Végétarien"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.455109,
      longitude: -2.038973
    },
    transactions: [],
    location: {
      address1: "7 rue du Port",
      address2: "",
      address3: "",
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "01",
      display_address: [
        "7 rue du Port",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296805584",
    display_phone: "+33 2 96 80 55 84",
    distance: 1382.3797053372814,
    service: ["à emporter"]
  },
  {
    id: "OXQkbwuVoCP4Uw-x5gEwbg",
    alias: "l-ami-louis-dinan",
    name: "L'Ami Louis",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/EjDt9WG6vs30CkE3bOxOaA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-ami-louis-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "gastropubs",
        title: "Gastropubs"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.4563580309315,
      longitude: -2.0388535616035
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "78 rue du Petit Fort",
      address2: "",
      address3: "",
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "78 rue du Petit Fort",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296879670",
    display_phone: "+33 2 96 87 96 70",
    distance: 1481.177434681238,
    service: ["livraison", "à emporter"]
  },
  {
    id: "4m6TbZfvlv59Bdkr25pMCg",
    alias: "chez-la-mère-pourcel-dinan-4",
    name: "Chez La Mère Pourcel",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/BuS6FuzDs0pAPy6GA25l0w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/chez-la-m%C3%A8re-pourcel-dinan-4?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 18,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.45369,
      longitude: -2.04394
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "3 Place Merciers",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "3 Place Merciers",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296390380",
    display_phone: "+33 2 96 39 03 80",
    distance: 1005.8285764100088,
    service: ["livraison"]
  },
  {
    id: "CpOLGqsKt8AZroHSebnEeg",
    alias: "hôtel-restaurant-la-marmite-dinan",
    name: "Hôtel Restaurant La Marmite",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/h%C3%B4tel-restaurant-la-marmite-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      },
      {
        alias: "hotels",
        title: "Hotels"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.4522029,
      longitude: -2.0601011
    },
    transactions: [],
    location: {
      address1: "91 Rue Brest",
      address2: null,
      address3: null,
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "91 Rue Brest",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296390442",
    display_phone: "+33 2 96 39 04 42",
    distance: 744.8972203737845,
    service: ["livraison", "à emporter"]
  },
  {
    id: "kcPlELCMpjzM_MfJw74rcg",
    alias: "le-bistrot-du-viaduc-lanvallay",
    name: "Le Bistrot du Viaduc",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-bistrot-du-viaduc-lanvallay?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 7,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.4556065,
      longitude: -2.0352657
    },
    transactions: [],
    location: {
      address1: "22 Rue Lion d'Or",
      address2: null,
      address3: null,
      city: "Lanvallay",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "22 Rue Lion d'Or",
        "22100 Lanvallay",
        "France"
      ]
    },
    phone: "+33296859500",
    display_phone: "+33 2 96 85 95 00",
    distance: 1633.6023919622617,
    service: ["à emporter"]
  },
  {
    id: "m7T2dy2FIw3qn6gc6v016A",
    alias: "d-ici-delà-dinan",
    name: "D'Ici Delà",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/L_3dbkS0jtHuyE64JNsvtA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/d-ici-del%C3%A0-dinan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.4542,
      longitude: -2.05044
    },
    transactions: [],
    location: {
      address1: "14 rue des Rouairies",
      address2: null,
      address3: "",
      city: "Dinan",
      zip_code: "22100",
      country: "FR",
      state: "22",
      display_address: [
        "14 rue des Rouairies",
        "22100 Dinan",
        "France"
      ]
    },
    phone: "+33296391304",
    display_phone: "+33 2 96 39 13 04",
    distance: 816.0680487287891,
    service: ["livraison", "à emporter"]
  },
  {
    id: "akcEFQqpVxK_l0oWSpPS2A",
    alias: "le-petit-resto-du-port-dinard",
    name: "Le Petit Resto du Port",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/zq1Grhkh01GfrOs5cEGr0A/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-petit-resto-du-port-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 15,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.6312,
      longitude: -2.05118
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "Quai Perle",
      address2: null,
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "Quai Perle",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299461641",
    display_phone: "+33 2 99 46 16 41",
    distance: 710.585314090059,
    service: ["livraison"]
  },
  {
    id: "iLlHS7OC_FQfWltd6Mmk-Q",
    alias: "le-citrus-dinard",
    name: "Le Citrus",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-citrus-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "brasseries",
        title: "Brasseries"
      },
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.634325217246,
      longitude: -2.05637206878669
    },
    transactions: [],
    location: {
      address1: "14 rue Yves Verney",
      address2: "",
      address3: "",
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "14 rue Yves Verney",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33290040354",
    display_phone: "+33 2 90 04 03 54",
    distance: 654.1272573458012,
    service: ["livraison", "à emporter"]
  },
  {
    id: "ujMSGoFDmXZy3kXsXXNOCQ",
    alias: "restaurant-à-l-hotel-didier-meril-dinard",
    name: "Restaurant à l'Hotel Didier Meril",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/CzScuwougv0wmVDlvTV_9Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/restaurant-%C3%A0-l-hotel-didier-meril-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.6274469,
      longitude: -2.0555362
    },
    transactions: [],
    price: "€€€€",
    location: {
      address1: "1 place du Général de Gaulle",
      address2: null,
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "1 place du Général de Gaulle",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299469574",
    display_phone: "+33 2 99 46 95 74",
    distance: 391.0371727929356,
    service: ["livraison", "à emporter"]
  },
  {
    id: "sMqOI0ZjDvWpmRYSB62_iA",
    alias: "le-mouillage-dinard",
    name: "Le Mouillage",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/KKnDhHiTb1qI9h6cZhhqFw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-mouillage-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      },
      {
        alias: "bars",
        title: "Bar"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.6309548,
      longitude: -2.0525023
    },
    transactions: [],
    location: {
      address1: "57 Avenue George V",
      address2: null,
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "57 Avenue George V",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299469240",
    display_phone: "+33 2 99 46 92 40",
    distance: 609.956404578659,
    service: ["à emporter"]
  },
  {
    id: "VJJ3R7czfJsggUAgHgoJPw",
    alias: "l-arganier-dinard",
    name: "L'Arganier",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/WbYFMzhQMU86EdnVcIzoKQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-arganier-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 6,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.6349744,
      longitude: -2.0526478
    },
    transactions: [],
    location: {
      address1: "3 Rue Winston Churchill",
      address2: null,
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "3 Rue Winston Churchill",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299169039",
    display_phone: "+33 2 99 16 90 39",
    distance: 866.0483616873381,
    service: ["livraison", "à emporter"]
  },
  {
    id: "3BEzbL-x4IxwQ38Byl_-qg",
    alias: "l-attiseur-dinard",
    name: "L’Attiseur",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/M743YVUEov8l-_Qv1a69fA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-attiseur-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.6338821059873,
      longitude: -2.05622
    },
    transactions: [],
    location: {
      address1: "2 bis place de la République",
      address2: "",
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "2 bis place de la République",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299160001",
    display_phone: "+33 2 99 16 00 01",
    distance: 615.5799574287751,
    service: ["livraison", "à emporter"]
  },
  {
    id: "T5gl39Wtfy40Dnrx6OQ_uA",
    alias: "l-escale-à-corto-dinard",
    name: "L'escale à Corto",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/MuNADyNGVroD6iutQBmv5w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-escale-%C3%A0-corto-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 5,
    categories: [
      {
        alias: "seafood",
        title: "Fruit de mer"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.6359262,
      longitude: -2.0492353
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "12 ave George V",
      address2: "",
      address3: "",
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "12 ave George V",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299467857",
    display_phone: "+33 2 99 46 78 57",
    distance: 1115.8417885545916,
    service: ["livraison", "à emporter"]
  },
  {
    id: "BmUKJ1WKozxIFOZ-wtBUeQ",
    alias: "vents-et-marées-dinard-2",
    name: "Vents et Marées",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/2XtPBXlx3veWmNz7qI2MtA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/vents-et-mar%C3%A9es-dinard-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.63631,
      longitude: -2.06773
    },
    transactions: [],
    location: {
      address1: "66 boulevard Albert Lacroix",
      address2: null,
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "66 boulevard Albert Lacroix",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299164874",
    display_phone: "+33 2 99 16 48 74",
    distance: 990.424818315655,
    service: ["à emporter"]
  },
  {
    id: "PBCLjOxyBmJ_5QekRbYOxw",
    alias: "le-marégraphe-dinard",
    name: "Le Marégraphe",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/8y3lQ4jeBWrJrhiRTKqxtg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-mar%C3%A9graphe-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      },
      {
        alias: "food",
        title: "Cuisine variée"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.6348483,
      longitude: -2.0623139
    },
    transactions: [],
    price: "€€",
    location: {
      address1: null,
      address2: "Saint Enogat",
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "Saint Enogat",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "",
    display_phone: "",
    distance: 662.9535803443948,
    service: ["livraison", "à emporter"]
  },
  {
    id: "2zpt6sFfWq5I54agW7N3qA",
    alias: "le-balafon-dinard",
    name: "Le Balafon",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/xWssySXufCULKI3Z4qOxcw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-balafon-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 5,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.631223,
      longitude: -2.057283
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "31 rue de la Vallée",
      address2: null,
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "31 rue de la Vallée",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299461481",
    display_phone: "+33 2 99 46 14 81",
    distance: 327.7830284883923,
    service: ["livraison", "à emporter"]
  },
  {
    id: "ekrazwC0lv8yY6t8iWRKfg",
    alias: "castor-bellux-dinard-2",
    name: "Castor Bellux",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/26gAfoT43h5QTHDJMQNbLg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/castor-bellux-dinard-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 11,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      },
      {
        alias: "italian",
        title: "Italien"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.634803,
      longitude: -2.052676
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "5 rue Winston Churchill",
      address2: null,
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "5 rue Winston Churchill",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299462572",
    display_phone: "+33 2 99 46 25 72",
    distance: 850.252791839922,
    service: ["livraison", "à emporter"]
  },
  {
    id: "ucMg0DRLxdXzeL23UG1Y4Q",
    alias: "chez-ma-pomme-dinard",
    name: "Chez Ma Pomme",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/3GH3pssUf4ANZIyk9g4ueQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/chez-ma-pomme-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 7,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.634741,
      longitude: -2.055778
    },
    transactions: [],
    location: {
      address1: "6 rue Yves Verney",
      address2: null,
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "6 rue Yves Verney",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299468190",
    display_phone: "+33 2 99 46 81 90",
    distance: 715.0827415780561,
    service: ["livraison", "à emporter"]
  },
  {
    id: "NW3r587Ao-g4RNB1qQq9YQ",
    alias: "homard-et-chips-dinard",
    name: "Homard & Chips",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/3J1Ng0Z31ay85hcl_eGUdQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/homard-et-chips-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "fishnchips",
        title: "Fish & Chips"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.6350901917306,
      longitude: -2.05319512635469
    },
    transactions: [],
    location: {
      address1: "19 bd Wilson",
      address2: "",
      address3: "",
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "19 bd Wilson",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299203040",
    display_phone: "+33 2 99 20 30 40",
    distance: 850.7044012506566,
    service: ["livraison", "à emporter"]
  },
  {
    id: "TLDVkklDUXDipMBHT0BZOg",
    alias: "la-cour-de-récré-dinard",
    name: "La Cour de Récré",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/QzrXpIxKVrlNUylWYcSAwA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-cour-de-r%C3%A9cr%C3%A9-dinard?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 5,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.6328812,
      longitude: -2.0537801
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "30 rue du Marechal Leclerc",
      address2: "",
      address3: "",
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "30 rue du Marechal Leclerc",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299806385",
    display_phone: "+33 2 99 80 63 85",
    distance: 638.6879446833697,
    service: ["livraison", "à emporter"]
  },
  {
    id: "dMHqjlNdioOygiPOAO0ibg",
    alias: "le-sadi-carnot-dinard-2",
    name: "Le Sadi Carnot",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/c7KB4fsXPlYN7Ks95FlhHg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-sadi-carnot-dinard-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 5,
    categories: [
      {
        alias: "mexican",
        title: "Mexicain"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.6339,
      longitude: -2.05784
    },
    transactions: [],
    price: "€",
    location: {
      address1: "14 rue St Enogat",
      address2: null,
      address3: null,
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "14 rue St Enogat",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299468725",
    display_phone: "+33 2 99 46 87 25",
    distance: 569.4031448660319,
    service: ["livraison", "à emporter"]
  },
  {
    id: "fxMgRs0Bs0X-lWeLHTf5FQ",
    alias: "le-bistrot-de-solidor-st-malo",
    name: "Le Bistrot de Solidor",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/4E2l60NL0sSPD-bHMEXLnw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-bistrot-de-solidor-st-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 8,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      },
      {
        alias: "castles",
        title: "Chateau"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.6367,
      longitude: -2.02645
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "1 Place St Pierre",
      address2: null,
      address3: null,
      city: "St Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "1 Place St Pierre",
        "35400 St Malo",
        "France"
      ]
    },
    phone: "+33299210487",
    display_phone: "+33 2 99 21 04 87",
    distance: 2627.9126705643425,
    service: ["à emporter"]
  },
  {
    id: "LrkqN-5RWVlXBg8aX5pU4g",
    alias: "le-cafe-rouge-dinard-3",
    name: "Le Cafe Rouge",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/LA2uv8bkjEXlh8-zT-LVrg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-cafe-rouge-dinard-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.63471,
      longitude: -2.05445
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "3 Boulevard Feart",
      address2: "",
      address3: "",
      city: "Dinard",
      zip_code: "35800",
      country: "FR",
      state: "35",
      display_address: [
        "3 Boulevard Feart",
        "35800 Dinard",
        "France"
      ]
    },
    phone: "+33299467052",
    display_phone: "+33 2 99 46 70 52",
    distance: 762.2874337725,
    service: ["livraison", "à emporter"]
  },
  {
    id: "3jWAJ7N7uie5VyHxJYd1Yg",
    alias: "l-absinthe-st-malo-2",
    name: "L'Absinthe",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/zii9_WbkIyxjFZCT7baYsA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-absinthe-st-malo-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 12,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.647945,
      longitude: -2.024896
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "1 rue Orme",
      address2: null,
      address3: null,
      city: "St Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "1 rue Orme",
        "35400 St Malo",
        "France"
      ]
    },
    phone: "+33299402615",
    display_phone: "+33 2 99 40 26 15",
    distance: 3343.4766246670492,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Is3q7B9BEyKX4yWi7O0zGw",
    alias: "o-tapas-breton-saint-malo",
    name: "O Tapas Breton",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/wQlvPrmUJm8KdRueq_ZRoA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/o-tapas-breton-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "seafood",
        title: "Fruit de mer"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.6481265085999,
      longitude: -2.02493286202442
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "4 rue de l'Orme",
      address2: "",
      address3: "",
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "4 rue de l'Orme",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33299481985",
    display_phone: "+33 2 99 48 19 85",
    distance: 3354.101577535785,
    service: ["livraison", "à emporter"]
  },
  {
    id: "E9ntzgHLBZPWPEDH2no8_A",
    alias: "le-bistrot-de-jean-st-malo",
    name: "le Bistrot de  Jean",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/oBDfP0HvlezQAo0_SgY6VQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-bistrot-de-jean-st-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 20,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.6503465,
      longitude: -2.0248173
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "6 rue de la Corne de Cerf",
      address2: "intra muros",
      address3: null,
      city: "St Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "6 rue de la Corne de Cerf",
        "intra muros",
        "35400 St Malo",
        "France"
      ]
    },
    phone: "+33299409868",
    display_phone: "+33 2 99 40 98 68",
    distance: 3521.7360183187966,
    service: ["livraison", "à emporter"]
  },
  {
    id: "t4zdpL7AiF7g3wnp1mwz1A",
    alias: "le-haute-seve-fougères-2",
    name: "Le Haute Seve",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/VUpl0Xo9manHpPA1upwrww/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-haute-seve-foug%C3%A8res-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.35158,
      longitude: -1.19767
    },
    transactions: [],
    location: {
      address1: "37 bd Jean Jaurès",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "37 bd Jean Jaurès",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299942339",
    display_phone: "+33 2 99 94 23 39",
    distance: 162.83523551473561,
    service: ["livraison", "à emporter"]
  },
  {
    id: "422ZjuharD-20yx6uMojLg",
    alias: "le-p-tit-bouchon-fougères",
    name: "Le P'tit Bouchon",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/pHpV6sJVyA6ChIsS5sInww/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-p-tit-bouchon-foug%C3%A8res?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "fondue",
        title: "Fondue"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.353882,
      longitude: -1.203046
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "13 Rue Chateaubriand",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "13 Rue Chateaubriand",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299997598",
    display_phone: "+33 2 99 99 75 98",
    distance: 634.6654328138527,
    service: ["livraison", "à emporter"]
  },
  {
    id: "VO-MOjELXaBnU7ReBb55Xg",
    alias: "l-halte-gourmande-fougères-2",
    name: "L'Halte Gourmande",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/UjSK2BcLbX1b94tas3NuoA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-halte-gourmande-foug%C3%A8res-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.34925,
      longitude: -1.1949399
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "22 place République",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "22 place République",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299990700",
    display_phone: "+33 2 99 99 07 00",
    distance: 227.10511422455673,
    service: ["livraison", "à emporter"]
  },
  {
    id: "BEKJM2Pj21Zm3LqEP_ETvQ",
    alias: "terre-happy-fougeres-2",
    name: "Terre Happy",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/DgqvIOpzzEj1w0Mp4qXdrA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/terre-happy-fougeres-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.35262,
      longitude: -1.20439
    },
    transactions: [],
    price: "€",
    location: {
      address1: "59 Rue Nationale",
      address2: "",
      address3: "",
      city: "Fougeres",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "59 Rue Nationale",
        "35300 Fougeres",
        "France"
      ]
    },
    phone: "+33299942049",
    display_phone: "+33 2 99 94 20 49",
    distance: 678.7707019480899,
    service: ["livraison"]
  },
  {
    id: "3p28EJjDfybpo48vsOZQog",
    alias: "crêperie-tivabro-fougères-3",
    name: "Crêperie Tivabro",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/YyfQJ8f_L81Ydj_hqtnrSg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/cr%C3%AAperie-tivabro-foug%C3%A8res-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 8,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.3515609,
      longitude: -1.204626
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "13 Place Marchix",
      address2: "13 place du marchix Budget moins de 15Eur Une belle crêperie",
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "13 Place Marchix",
        "13 place du marchix Budget moins de 15Eur Une belle crêperie",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299172090",
    display_phone: "+33 2 99 17 20 90",
    distance: 679.1486713920658,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Je0JAiaS46V_p9ZCkY2hjA",
    alias: "le-capri-fougères",
    name: "Le Capri",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/no679D0FtCCcNxdN2LQb0A/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-capri-foug%C3%A8res?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      },
      {
        alias: "steak",
        title: "Steakhouses"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.3636668,
      longitude: -1.2096226
    },
    transactions: [],
    location: {
      address1: "9 route de Saint James",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "9 route de Saint James",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299942210",
    display_phone: "+33 2 99 94 22 10",
    distance: 1735.693046606344,
    service: ["livraison", "à emporter"]
  },
  {
    id: "whj5abyCmWc5VwMuZt6JXQ",
    alias: "restaurant-le-saint-léonard-fougères",
    name: "Restaurant Le Saint Léonard",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/restaurant-le-saint-l%C3%A9onard-foug%C3%A8res?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.3534565,
      longitude: -1.2039122
    },
    transactions: [],
    location: {
      address1: "20 Rue Nationale",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "20 Rue Nationale",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299943623",
    display_phone: "+33 2 99 94 36 23",
    distance: 673.0281423569124,
    service: ["livraison", "à emporter"]
  },
  {
    id: "UA8p10NVW7HppQAxMK_-kw",
    alias: "hotel-des-voyageurs-best-western-fougères",
    name: "Hotel des Voyageurs BEST WESTERN",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/AbwcRWpj3v_519qZ0K_k6w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/hotel-des-voyageurs-best-western-foug%C3%A8res?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.3549004,
      longitude: -1.20118
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "10 place Gambetta",
      address2: "",
      address3: "",
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "10 place Gambetta",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299990820",
    display_phone: "+33 2 99 99 08 20",
    distance: 594.254398030568,
    service: ["livraison", "à emporter"]
  },
  {
    id: "E9hfcm4QdxObQmELaDeJLA",
    alias: "court-circuit-fougères",
    name: "Court Circuit",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/court-circuit-foug%C3%A8res?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "brasseries",
        title: "Brasseries"
      },
      {
        alias: "pubs",
        title: "Pubs"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.35223,
      longitude: -1.2044299
    },
    transactions: [],
    location: {
      address1: "59 rue Nationale",
      address2: "",
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "59 rue Nationale",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33256471477",
    display_phone: "+33 2 56 47 14 77",
    distance: 671.0297175908645,
    service: ["livraison", "à emporter"]
  },
  {
    id: "8Ai23qb2RRQX5-jnS5pTgA",
    alias: "buffalo-grill-fougères-2",
    name: "Buffalo Grill",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/0XBmYt4CoU7T7hVEEoTRKA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/buffalo-grill-foug%C3%A8res-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.3460875,
      longitude: -1.1797191
    },
    transactions: [],
    price: "€",
    location: {
      address1: "5 Rue Français Libres",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "5 Rue Français Libres",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299948060",
    display_phone: "+33 2 99 94 80 60",
    distance: 1294.9451811691683,
    service: ["livraison", "à emporter"]
  },
  {
    id: "OEWxKXYlBR0yowkxq0uVig",
    alias: "a-la-galette-d-antan-fougères-2",
    name: "A La Galette D'Antan",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/muKlu2eSu5dVREjCiSUZPw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/a-la-galette-d-antan-foug%C3%A8res-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.35321,
      longitude: -1.19635
    },
    transactions: [],
    location: {
      address1: "28 rue Feuteries",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "28 rue Feuteries",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299993223",
    display_phone: "+33 2 99 99 32 23",
    distance: 231.29754667629237,
    service: ["livraison", "à emporter"]
  },
  {
    id: "0oFKDg7MzlQu6hbIiQ2CSg",
    alias: "la-lanterne-fougères",
    name: "La Lanterne",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/aTRUXSxV-Dh0KH7dIIG82w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-lanterne-foug%C3%A8res?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "bedbreakfast",
        title: "Bed & Breakfast"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.3546751,
      longitude: -1.207581
    },
    transactions: [],
    location: {
      address1: "110 rue de la Pinterie",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "110 rue de la Pinterie",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299995880",
    display_phone: "+33 2 99 99 58 80",
    distance: 975.3490855612877,
    service: ["livraison", "à emporter"]
  },
  {
    id: "NV7YSeIhPI4yittuk3-CVQ",
    alias: "crêperie-des-remparts-fougères-4",
    name: "Crêperie des Remparts",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/k-3PyW-BfE92dKwD0pSFoA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/cr%C3%AAperie-des-remparts-foug%C3%A8res-4?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.35461,
      longitude: -1.20621
    },
    transactions: [],
    price: "€",
    location: {
      address1: "102 Rue Pinterie",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "102 Rue Pinterie",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299945353",
    display_phone: "+33 2 99 94 53 53",
    distance: 880.0170206386448,
    service: ["livraison"]
  },
  {
    id: "eY7ZF2HXy6tewqneuqAyJw",
    alias: "le-farfadet-gourmand-fougères",
    name: "Le Farfadet Gourmand",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/djv7zbsoOtIcmYItDMf_sw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-farfadet-gourmand-foug%C3%A8res?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.354757,
      longitude: -1.20069
    },
    transactions: [],
    location: {
      address1: "1 boulevard du Général Leclerc",
      address2: "",
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "1 boulevard du Général Leclerc",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33223516211",
    display_phone: "+33 2 23 51 62 11",
    distance: 552.0570973915076,
    service: ["livraison", "à emporter"]
  },
  {
    id: "dxL_7P8b-ayNl-LzfQw5Vw",
    alias: "restaurant-asiatique-le-pékin-fougères-2",
    name: "Restaurant Asiatique Le Pékin",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/restaurant-asiatique-le-p%C3%A9kin-foug%C3%A8res-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.3548,
      longitude: -1.20628
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "68 rue Pinterie",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "68 rue Pinterie",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299997308",
    display_phone: "+33 2 99 99 73 08",
    distance: 895.6088793062742,
    service: ["livraison", "à emporter"]
  },
  {
    id: "0JXcN6QBQGZwpf8RIOPkTQ",
    alias: "taverne-de-maître-kanter-fougeres-2",
    name: "Taverne de Maître Kanter",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/taverne-de-ma%C3%AEtre-kanter-fougeres-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "hotels",
        title: "Hotels"
      },
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.348099,
      longitude: -1.1947302
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "5 Rue Ashford",
      address2: null,
      address3: null,
      city: "Fougeres",
      zip_code: "35115",
      country: "FR",
      state: "35",
      display_address: [
        "5 Rue Ashford",
        "35115 Fougeres",
        "France"
      ]
    },
    phone: "+33299944040",
    display_phone: "+33 2 99 94 40 40",
    distance: 350.90043299270417,
    service: ["livraison", "à emporter"]
  },
  {
    id: "7W2uZIl55uLEUdD2oGNLCQ",
    alias: "l-hippocampe-fougères-3",
    name: "L'Hippocampe",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/A34enoJvuoZSVo9_aDVHyg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-hippocampe-foug%C3%A8res-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.356057,
      longitude: -1.200192
    },
    transactions: [],
    location: {
      address1: "38 Rue de la Forêt",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "38 Rue de la Forêt",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299993001",
    display_phone: "+33 2 99 99 30 01",
    distance: 642.0868076693265,
    service: ["livraison", "à emporter"]
  },
  {
    id: "-_y1yGugAcl9U1MHM-6oMA",
    alias: "au-cellier-landéan-3",
    name: "Au Cellier",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/au-cellier-land%C3%A9an-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.4140325,
      longitude: -1.1524981
    },
    transactions: [],
    location: {
      address1: "29 Rue Victor Hugo",
      address2: null,
      address3: null,
      city: "Landéan",
      zip_code: "35133",
      country: "FR",
      state: "35",
      display_address: [
        "29 Rue Victor Hugo",
        "35133 Landéan",
        "France"
      ]
    },
    phone: "+33299972050",
    display_phone: "+33 2 99 97 20 50",
    distance: 7671.142802105802,
    service: ["livraison", "à emporter"]
  },
  {
    id: "5w9QMNTz6_7ji4uf8qbohQ",
    alias: "la-naiade-pizzeria-fougères",
    name: "La Naiade, Pizzeria",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-naiade-pizzeria-foug%C3%A8res?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.3547992,
      longitude: -1.2027798
    },
    transactions: [],
    location: {
      address1: "9 Place du Théâtre",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "9 Place du Théâtre",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "",
    display_phone: "",
    distance: 672.247558095187,
    service: ["livraison", "à emporter"]
  },
  {
    id: "i6KHRyvnJSUXPACiLAyu-A",
    alias: "les-vins-et-une-fourchette-fougères-2",
    name: "Les Vins et une Fourchette",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/les-vins-et-une-fourchette-foug%C3%A8res-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 2.5,
    coordinates: {
      latitude: 48.3542646,
      longitude: -1.2077375
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "Rue Fourchette",
      address2: null,
      address3: null,
      city: "Fougères",
      zip_code: "35300",
      country: "FR",
      state: "35",
      display_address: [
        "Rue Fourchette",
        "35300 Fougères",
        "France"
      ]
    },
    phone: "+33299945588",
    display_phone: "+33 2 99 94 55 88",
    distance: 969.1089015293592,
    service: ["livraison", "à emporter"]
  },
  {
    id: "u3mopYMKZ8blC19_Wy28JA",
    alias: "restaurant-l-ardoise-bédée",
    name: "Restaurant l'Ardoise",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/restaurant-l-ardoise-b%C3%A9d%C3%A9e?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "hotels",
        title: "Hotels"
      },
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.1800455,
      longitude: -1.9452957
    },
    transactions: [],
    price: "€",
    location: {
      address1: "14 Place Eglise",
      address2: null,
      address3: null,
      city: "Bédée",
      zip_code: "35137",
      country: "FR",
      state: "35",
      display_address: [
        "14 Place Eglise",
        "35137 Bédée",
        "France"
      ]
    },
    phone: "+33299071897",
    display_phone: "+33 2 99 07 18 97",
    distance: 5937.353261300051,
    service: ["livraison", "à emporter"]
  },
  {
    id: "L8M-aF3ui5vkP_1LBgYYdQ",
    alias: "l-horloge-bédée",
    name: "L'Horloge",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/hNF9Rp9w0Jdlb6s_U169_Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-horloge-b%C3%A9d%C3%A9e?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.184431,
      longitude: -1.918662
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "7 Place de l'Eglise",
      address2: null,
      address3: null,
      city: "Bédée",
      zip_code: "35137",
      country: "FR",
      state: "35",
      display_address: [
        "7 Place de l'Eglise",
        "35137 Bédée",
        "France"
      ]
    },
    phone: "+33299070025",
    display_phone: "+33 2 99 07 00 25",
    distance: 6994.428804012909,
    service: ["livraison"]
  },
  {
    id: "3iyEnw6DsxDoI0O3G3lSnw",
    alias: "la-table-ronde-montauban-de-bretagne",
    name: "La Table Ronde",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-table-ronde-montauban-de-bretagne?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.19073,
      longitude: -2.05371
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "2 Place De La Gare",
      address2: null,
      address3: null,
      city: "Montauban De Bretagne",
      zip_code: "35360",
      country: "FR",
      state: "35",
      display_address: [
        "2 Place De La Gare",
        "35360 Montauban De Bretagne",
        "France"
      ]
    },
    phone: "+33299065673",
    display_phone: "+33 2 99 06 56 73",
    distance: 9986.034753236085,
    service: ["livraison", "à emporter"]
  },
  {
    id: "RSHI3bADf_vJ3om5fHw4GA",
    alias: "mcdonalds-bréal-sous-montfort",
    name: "McDonald's",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/zLbsVcGIokM85huhxLqzmA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/mcdonalds-br%C3%A9al-sous-montfort?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "hotdogs",
        title: "Fast Food"
      },
      {
        alias: "burgers",
        title: "Burgers"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.059221,
      longitude: -1.880203
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "1 rue du Domaine",
      address2: "",
      address3: "Parc d'Activité du HIndré",
      city: "Bréal-sous-Montfort",
      zip_code: "35310",
      country: "FR",
      state: "35",
      display_address: [
        "1 rue du Domaine",
        "Parc d'Activité du HIndré",
        "35310 Bréal-sous-Montfort",
        "France"
      ]
    },
    phone: "+33223411994",
    display_phone: "+33 2 23 41 19 94",
    distance: 9542.57488413442,
    service: ["livraison", "à emporter"]
  },
  {
    id: "OXzQ5L3-oYuTnqRdq9dCzQ",
    alias: "la-speranza-pleumeleuc",
    name: "La Speranza",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-speranza-pleumeleuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      }
    ],
    rating: 2.5,
    coordinates: {
      latitude: 48.1843622772513,
      longitude: -1.91938330185235
    },
    transactions: [],
    price: "€",
    location: {
      address1: "15 place de l'Église",
      address2: null,
      address3: null,
      city: "Pleumeleuc",
      zip_code: "35137",
      country: "FR",
      state: "35",
      display_address: [
        "15 place de l'Église",
        "35137 Pleumeleuc",
        "France"
      ]
    },
    phone: "+33299071968",
    display_phone: "+33 2 99 07 19 68",
    distance: 6965.14425850814,
    service: ["livraison", "à emporter"]
  },
  {
    id: "nEVppc9quOTY7NUv1my5ag",
    alias: "mc-donald-pleumeleuc",
    name: "Mc Donald",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/HWm9EocVnGzaC0i5qaJiaw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/mc-donald-pleumeleuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 6,
    categories: [
      {
        alias: "burgers",
        title: "Burgers"
      }
    ],
    rating: 2.5,
    coordinates: {
      latitude: 48.1766891,
      longitude: -1.91944
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "Rue Galilée",
      address2: "",
      address3: "",
      city: "Pleumeleuc",
      zip_code: "35137",
      country: "FR",
      state: "35",
      display_address: [
        "Rue Galilée",
        "35137 Pleumeleuc",
        "France"
      ]
    },
    phone: "+33299612450",
    display_phone: "+33 2 99 61 24 50",
    distance: 6148.8553635601675,
    service: ["livraison", "à emporter"]
  },
  {
    id: "MTdO3PTRCqFFiBiWP7xrrQ",
    alias: "le-clos-dine-la-chapelle-thouarault",
    name: "Le Clos Dine",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-clos-dine-la-chapelle-thouarault?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 3.0,
    coordinates: {
      latitude: 48.1241121,
      longitude: -1.8660629
    },
    transactions: [],
    location: {
      address1: "6 rue du commerce",
      address2: null,
      address3: null,
      city: "La Chapelle Thouarault",
      zip_code: "35590",
      country: "FR",
      state: "35",
      display_address: [
        "6 rue du commerce",
        "35590 La Chapelle Thouarault",
        "France"
      ]
    },
    phone: "+33299076073",
    display_phone: "+33 2 99 07 60 73",
    distance: 6856.536416256663,
    service: ["livraison", "à emporter"]
  },
  {
    id: "SUFuOwz8xb0yu7x6wY69Ng",
    alias: "aire-de-pays-de-rennes-rennes",
    name: "Aire de pays de Rennes",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/aire-de-pays-de-rennes-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "hotdogs",
        title: "Fast Food"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.1799202,
      longitude: -1.94213
    },
    transactions: [],
    location: {
      address1: null,
      address2: "",
      address3: "",
      city: "Rennes",
      zip_code: "35137",
      country: "FR",
      state: "35",
      display_address: [
        "35137 Rennes",
        "France"
      ]
    },
    phone: "",
    display_phone: "",
    distance: 7644.5398676632885,
    service: ["livraison", "à emporter"]
  },
  {
    id: "fArwl5oz17mF8foBTJRywQ",
    alias: "bar-tabac-presse-la-tulipe-pleumeleuc",
    name: "Bar Tabac Presse La Tulipe",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/bar-tabac-presse-la-tulipe-pleumeleuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      },
      {
        alias: "bars",
        title: "Bar"
      }
    ],
    rating: 1.5,
    coordinates: {
      latitude: 48.1781,
      longitude: -1.91915
    },
    transactions: [],
    location: {
      address1: "3 rue Epinette",
      address2: null,
      address3: null,
      city: "Pleumeleuc",
      zip_code: "35137",
      country: "FR",
      state: "35",
      display_address: [
        "3 rue Epinette",
        "35137 Pleumeleuc",
        "France"
      ]
    },
    phone: "",
    display_phone: "",
    distance: 6346.042751665408,
    service: ["livraison"]
  },
  {
    id: "a7OxWe8DkyKQoqcnfOSxkw",
    alias: "le-bocal-rennes",
    name: "Le Bocal",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/dmzuISe_8UNQ8oFr9Rt7MA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-bocal-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 30,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.109675,
      longitude: -1.681175
    },
    transactions: [],
    location: {
      address1: "6 Rue d'Argentré",
      address2: null,
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "6 Rue d'Argentré",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299783410",
    display_phone: "+33 2 99 78 34 10",
    distance: 216.7858160529864,
    service: ["livraison", "à emporter"]
  },
  {
    id: "oUdvXPdM3sItZ1zhh8Cjgw",
    alias: "l-ambassade-rennes",
    name: "L'Ambassade",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/PRQlRdV5kWa1Te2ZjVQP-g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-ambassade-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 32,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.10912,
      longitude: -1.68062
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "12 rue de la Parcheminerie",
      address2: "",
      address3: "",
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "12 rue de la Parcheminerie",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299783401",
    display_phone: "+33 2 99 78 34 01",
    distance: 225.7319771764123,
    service: ["livraison", "à emporter"]
  },
  {
    id: "NL0ROvACBWrwYv1BZxBWtQ",
    alias: "la-saint-georges-rennes",
    name: "La Saint Georges",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/G2G0l-XRgcwez9kFEoYq3g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-saint-georges-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 90,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.11106,
      longitude: -1.68223
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "11 rue du Chapitre",
      address2: "",
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "11 rue du Chapitre",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299388704",
    display_phone: "+33 2 99 38 87 04",
    distance: 275.3567465000122,
    service: ["livraison", "à emporter"]
  },
  {
    id: "pOmEiXtXihnqYA9vQDT_pw",
    alias: "fox-and-friends-rennes",
    name: "Fox and Friends",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/RTfh9UQvROWWfxV8cA1rhw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/fox-and-friends-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 5,
    categories: [
      {
        alias: "burgers",
        title: "Burgers"
      },
      {
        alias: "pubs",
        title: "Pubs"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.11208,
      longitude: -1.68327
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "13 rue de la Monnaie",
      address2: "",
      address3: "",
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "13 rue de la Monnaie",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299793315",
    display_phone: "+33 2 99 79 33 15",
    distance: 385.2431817392406,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Cz3p2vhUcKbIuqOXgpMhMA",
    alias: "bds-restaurant-rennes",
    name: "BDS Restaurant",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/JnhLOvSweVC8S-NTPMePSQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/bds-restaurant-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "bars",
        title: "Bar"
      },
      {
        alias: "breakfast_brunch",
        title: "Breakfast & Brunch"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.1098,
      longitude: -1.68046
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "1 quai Lamennais",
      address2: "",
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "1 quai Lamennais",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299793479",
    display_phone: "+33 2 99 79 34 79",
    distance: 162.0329062683083,
    service: ["livraison", "à emporter"]
  },
  {
    id: "RW2PeJ0OZzJ7VYr7iZRf6A",
    alias: "oh-my-biche-rennes",
    name: "Oh My Biche",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/82bVxhOlahI-NpnoHHga3A/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/oh-my-biche-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "breakfast_brunch",
        title: "Breakfast & Brunch"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.10576,
      longitude: -1.68152
    },
    transactions: [],
    location: {
      address1: "3 rue du Puits Mauger",
      address2: "",
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "3 rue du Puits Mauger",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33986675040",
    display_phone: "+33 9 86 67 50 40",
    distance: 572.4090815364593,
    service: ["livraison", "à emporter"]
  },
  {
    id: "NG_wvEaUTrqDoFwO7upWbw",
    alias: "les-brocanteurs-rennes-2",
    name: "Les Brocanteurs",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/ZyKyomur9W2BIL_Phl8eVA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/les-brocanteurs-rennes-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 13,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "burgers",
        title: "Burgers"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.1109,
      longitude: -1.68104
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "2 place du Calvaire",
      address2: null,
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "2 place du Calvaire",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299790111",
    display_phone: "+33 2 99 79 01 11",
    distance: 185.23477378684163,
    service: ["livraison", "à emporter"]
  },
  {
    id: "VsoE33Op9S7VsW97iX1C5Q",
    alias: "barexpo-rennes",
    name: "Barexpo",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/ME4d9R0qCIj6PDj_WJ0bnA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/barexpo-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "bars",
        title: "Bar"
      },
      {
        alias: "bistros",
        title: "Bistro"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.10918,
      longitude: -1.67939
    },
    transactions: [],
    location: {
      address1: "2 rue Jules Simon",
      address2: null,
      address3: "",
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "2 rue Jules Simon",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33223610705",
    display_phone: "+33 2 23 61 07 05",
    distance: 177.1781485032077,
    service: ["livraison", "à emporter"]
  },
  {
    id: "BLeK5QCbVGYRmMFsaze_mA",
    alias: "la-kitchenette-rennes",
    name: "La Kitchenette",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/xB9eqB4kViFuJcV0TKSYuw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-kitchenette-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "bistros",
        title: "Bistro"
      },
      {
        alias: "cafes",
        title: "Cafes"
      },
      {
        alias: "brasseries",
        title: "Brasseries"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.10885,
      longitude: -1.679391
    },
    transactions: [],
    location: {
      address1: "2 rue Jules Simon",
      address2: "",
      address3: "",
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "2 rue Jules Simon",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33981727660",
    display_phone: "+33 9 81 72 76 60",
    distance: 201.60354578310418,
    service: ["livraison", "à emporter"]
  },
  {
    id: "VMI6765jxSukB4yFKp1cow",
    alias: "monsieur-est-servi-rennes",
    name: "Monsieur Est Servi",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/5WGvc99nOLNSUiRd-H6MSQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/monsieur-est-servi-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 23,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.1106,
      longitude: -1.68322
    },
    transactions: [],
    location: {
      address1: "3 rue Dames",
      address2: null,
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "3 rue Dames",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299306511",
    display_phone: "+33 2 99 30 65 11",
    distance: 343.69866389302575,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Uj4kWFtdg9h-I_9j0IlJ_w",
    alias: "le-tire-bouchon-rennes",
    name: "Le Tire Bouchon",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/pAVjC528ewqeejeL2W8zeA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-tire-bouchon-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 26,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.1110821347001,
      longitude: -1.68151562579499
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "2 rue du Chapitre",
      address2: null,
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "2 rue du Chapitre",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299794343",
    display_phone: "+33 2 99 79 43 43",
    distance: 224.14523420392746,
    service: ["livraison", "à emporter"]
  },
  {
    id: "abdl6J6tJG32-fuV5sx6EQ",
    alias: "la-chop-rennes-2",
    name: "La Chop",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/t_HByON8vt081PXpGknqOg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-chop-rennes-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 37,
    categories: [
      {
        alias: "steak",
        title: "Steakhouses"
      },
      {
        alias: "brasseries",
        title: "Brasseries"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.10935,
      longitude: -1.68085
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "3 rue de la Chalotais",
      address2: "",
      address3: "",
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "3 rue de la Chalotais",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299793454",
    display_phone: "+33 2 99 79 34 54",
    distance: 216.60786065142358,
    service: ["livraison", "à emporter"]
  },
  {
    id: "T8KPtQb04DXr5A5riyUHyQ",
    alias: "chez-paul-rennes",
    name: "Chez Paul",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/e-ccuBEaxBwNVJkX-04e6g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/chez-paul-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 12,
    categories: [
      {
        alias: "bistros",
        title: "Bistro"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.10861,
      longitude: -1.681964
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "30 rue Poullain Duparc",
      address2: "",
      address3: "",
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "30 rue Poullain Duparc",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299782249",
    display_phone: "+33 2 99 78 22 49",
    distance: 332.91518387340494,
    service: ["livraison", "à emporter"]
  },
  {
    id: "L-0yJu9znTlyAzIPCJnVoQ",
    alias: "le-haricot-rouge-rennes",
    name: "Le Haricot Rouge",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/rmJ9mbt9aVeMLp6kab68Xg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-haricot-rouge-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 28,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "juicebars",
        title: "Juice Bars & Smoothies"
      },
      {
        alias: "tea",
        title: "Tea Rooms"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.11058,
      longitude: -1.67865
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "10 rue Baudrairie",
      address2: null,
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "10 rue Baudrairie",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299793623",
    display_phone: "+33 2 99 79 36 23",
    distance: 4.406253571320202,
    service: ["livraison", "à emporter"]
  },
  {
    id: "pVwQhBprOvyGP8m7ERUCEA",
    alias: "aladdin-rennes",
    name: "Aladdin",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/_WYvNVSktY1Mm_f5auQr5Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/aladdin-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 8,
    categories: [
      {
        alias: "lebanese",
        title: "Lebanese"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.108549,
      longitude: -1.676772
    },
    transactions: [],
    location: {
      address1: "36 Rue Vasselot",
      address2: null,
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "36 Rue Vasselot",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299798989",
    display_phone: "+33 2 99 79 89 89",
    distance: 263.3721974641608,
    service: ["livraison", "à emporter"]
  },
  {
    id: "We7SZrq2Lz_xbXQpCzr6FQ",
    alias: "le-nabuchodonosor-rennes",
    name: "Le Nabuchodonosor",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/6Y2VkcbJRoZYzHbiPKFQ9Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-nabuchodonosor-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 28,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.11322,
      longitude: -1.67726
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "12 rue Hoche",
      address2: null,
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "12 rue Hoche",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299270758",
    display_phone: "+33 2 99 27 07 58",
    distance: 312.0503470922013,
    service: ["livraison", "à emporter"]
  },
  {
    id: "3tI261qLlVQuq_5jli_faw",
    alias: "back-to-the-60s-rennes",
    name: "Back to the 60's",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/j8earQ1CWHn5TY6B5KcENw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/back-to-the-60s-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 28,
    categories: [
      {
        alias: "diners",
        title: "Diners"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.116042,
      longitude: -1.680935
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "5 bis rue de Saint-Malo",
      address2: "",
      address3: "",
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "5 bis rue de Saint-Malo",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33760501960",
    display_phone: "+33 7 60 50 19 60",
    distance: 631.5171223972258,
    service: ["livraison", "à emporter"]
  },
  {
    id: "DpchD8uPc6AMt5fEtbaj7g",
    alias: "roadside-rennes",
    name: "Roadside",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/az1cnO7kSy2BrUb5RtHm3A/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/roadside-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 10,
    categories: [
      {
        alias: "hotdogs",
        title: "Fast Food"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.10876,
      longitude: -1.67783
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "13 rue du Marechal Joffre",
      address2: "",
      address3: "",
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "13 rue du Marechal Joffre",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299502606",
    display_phone: "+33 2 99 50 26 06",
    distance: 210.38198997443465,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Co2AUj25qpFL4-oeoShMZw",
    alias: "chawp-shop-rennes",
    name: "Chawp Shop",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/LGJ3m5haazVgoupTEuy2Mg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/chawp-shop-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 6,
    categories: [
      {
        alias: "vietnamese",
        title: "Vietnamese"
      },
      {
        alias: "thai",
        title: "Thai"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.11433,
      longitude: -1.68077
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "13 rue de Penhoët",
      address2: "",
      address3: "",
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "13 rue de Penhoët",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299782129",
    display_phone: "+33 2 99 78 21 29",
    distance: 447.0038035440595,
    service: ["livraison", "à emporter"]
  },
  {
    id: "VDgzPNJYBYZMYuhrSlFUeQ",
    alias: "le-baron-rouge-rennes",
    name: "Le Baron Rouge",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/UWNS65-LtGCHBt8vK9BAVw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-baron-rouge-rennes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 28,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.111091,
      longitude: -1.68255
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "15 et 17 Rue du Chapitre",
      address2: null,
      address3: null,
      city: "Rennes",
      zip_code: "35000",
      country: "FR",
      state: "35",
      display_address: [
        "15 et 17 Rue du Chapitre",
        "35000 Rennes",
        "France"
      ]
    },
    phone: "+33299790809",
    display_phone: "+33 2 99 79 08 09",
    distance: 299.33593410159335,
    service: ["livraison"]
  },
  {
    id: "jrWHPftUg844-qZ_L00aSw",
    alias: "l-air-du-temps-st-brieuc",
    name: "L'Air du Temps",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/4SFzOAyeASdGFfD2FWRywg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-air-du-temps-st-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 9,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.5152502,
      longitude: -2.7630325
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "4 rue Gouët",
      address2: null,
      address3: null,
      city: "St Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "4 rue Gouët",
        "22000 St Brieuc",
        "France"
      ]
    },
    phone: "+33296685840",
    display_phone: "+33 2 96 68 58 40",
    distance: 551.3613835442625,
    service: ["livraison", "à emporter"]
  },
  {
    id: "jxNAE_AHT7jgX_3_3-y_Bw",
    alias: "le-koadenn-st-brieuc",
    name: "Le Koadenn",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/eBN_2pVLe_vlcjkOaisbtw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-koadenn-st-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.51367,
      longitude: -2.75994
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "9 Rue Saint Guillaume",
      address2: null,
      address3: null,
      city: "St Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "9 Rue Saint Guillaume",
        "22000 St Brieuc",
        "France"
      ]
    },
    phone: "+33662389685",
    display_phone: "+33 6 62 38 96 85",
    distance: 547.6980083106718,
    service: ["livraison", "à emporter"]
  },
  {
    id: "cewsyfIgQr_YfWiyF6zrfQ",
    alias: "brasserie-brei-z-saint-brieuc",
    name: "Brasserie Brei'Z",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/brasserie-brei-z-saint-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "brasseries",
        title: "Brasseries"
      },
      {
        alias: "seafood",
        title: "Fruit de mer"
      },
      {
        alias: "breakfast_brunch",
        title: "Breakfast & Brunch"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.5114071,
      longitude: -2.760971
    },
    transactions: [],
    location: {
      address1: "1 place Salavador Allende",
      address2: "",
      address3: null,
      city: "Saint-Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "1 place Salavador Allende",
        "22000 Saint-Brieuc",
        "France"
      ]
    },
    phone: "+33296772754",
    display_phone: "+33 2 96 77 27 54",
    distance: 366.2531396447218,
    service: ["livraison", "à emporter"]
  },
  {
    id: "ZojTKM9RkJVHtjyn5uZeMA",
    alias: "l-arbalaise-st-brieuc",
    name: "L'Arbalaise",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/SNSFuiAE6Z5w4GxRUuA20Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-arbalaise-st-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.5132,
      longitude: -2.76182
    },
    transactions: [],
    location: {
      address1: "12 Rue Michelet",
      address2: null,
      address3: null,
      city: "St Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "12 Rue Michelet",
        "22000 St Brieuc",
        "France"
      ]
    },
    phone: "+33296330230",
    display_phone: "+33 2 96 33 02 30",
    distance: 408.66278244402304,
    service: ["livraison", "à emporter"]
  },
  {
    id: "2BcChjwFsXWj8XAVJ78iDg",
    alias: "le-bistrot-du-marin-plérin",
    name: "Le Bistrot du Marin",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/bQBBVvBVWmhpgielroNCtg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-bistrot-du-marin-pl%C3%A9rin?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "fishnchips",
        title: "Fish & Chips"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.52955,
      longitude: -2.73035
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "1 rue de la Tour",
      address2: "",
      address3: "",
      city: "Plérin",
      zip_code: "22190",
      country: "FR",
      state: "22",
      display_address: [
        "1 rue de la Tour",
        "22190 Plérin",
        "France"
      ]
    },
    phone: "+33296332869",
    display_phone: "+33 2 96 33 28 69",
    distance: 3352.4463424240184,
    service: ["livraison", "à emporter"]
  },
  {
    id: "GQRAL2cpl2M-iPyPzunYWg",
    alias: "ô-saveurs-saint-brieuc",
    name: "Ô saveurs",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/gc71AWFEFObwoX5WHaQQKA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/%C3%B4-saveurs-saint-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.5058324,
      longitude: -2.7664543
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "10 Rue Jules Ferry",
      address2: null,
      address3: null,
      city: "Saint-Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "10 Rue Jules Ferry",
        "22000 Saint-Brieuc",
        "France"
      ]
    },
    phone: "+33296940534",
    display_phone: "+33 2 96 94 05 34",
    distance: 537.2708675505057,
    service: ["livraison", "à emporter"]
  },
  {
    id: "5P7CPv8TGt6vb_UErgd2Gg",
    alias: "au-p-tit-bedon-st-brieuc",
    name: "Au P'tit Bedon",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/IkyPOTh-3E1AfmEbUZV2Tg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/au-p-tit-bedon-st-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 7,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.5136148,
      longitude: -2.7621976
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "1 Place Lin",
      address2: null,
      address3: null,
      city: "St Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "1 Place Lin",
        "22000 St Brieuc",
        "France"
      ]
    },
    phone: "+33296622137",
    display_phone: "+33 2 96 62 21 37",
    distance: 423.9914941046367,
    service: ["livraison", "à emporter"]
  },
  {
    id: "puyRQU2fhMVJTnhsbJIOWw",
    alias: "la-vieille-tour-plérin",
    name: "La Vieille Tour",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/-tyR5c_paNYpw5TDn7iydw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-vieille-tour-pl%C3%A9rin?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 12,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "modern_european",
        title: "Modern European"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.5307786172477,
      longitude: -2.7262376342449
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "75 rue de la Tour",
      address2: "",
      address3: null,
      city: "Plérin",
      zip_code: "22190",
      country: "FR",
      state: "22",
      display_address: [
        "75 rue de la Tour",
        "22190 Plérin",
        "France"
      ]
    },
    phone: "+33296331030",
    display_phone: "+33 2 96 33 10 30",
    distance: 3674.969057481357,
    service: ["livraison", "à emporter"]
  },
  {
    id: "BWKd7qPU9JZ3Ms5KdBDdMg",
    alias: "le-fût-chantant-saint-brieuc",
    name: "Le Fût Chantant",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/WIUrkh8vBkufeppEKqXrxA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-f%C3%BBt-chantant-saint-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "wine_bars",
        title: "Wine Bars"
      },
      {
        alias: "italian",
        title: "Italien"
      },
      {
        alias: "brasseries",
        title: "Brasseries"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.514725,
      longitude: -2.761956
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "2 bis place haute du Chai",
      address2: "",
      address3: "",
      city: "Saint-Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "2 bis place haute du Chai",
        "22000 Saint-Brieuc",
        "France"
      ]
    },
    phone: "+33296330563",
    display_phone: "+33 2 96 33 05 63",
    distance: 535.0852248534612,
    service: ["livraison", "à emporter"]
  },
  {
    id: "SQk0qAIaugpuHff31sS7qg",
    alias: "les-relais-d-alsace-saint-brieuc",
    name: "Les Relais d'Alsace",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/di0TfdNS2ONZxVtcWOn-gg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/les-relais-d-alsace-saint-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "brasseries",
        title: "Brasseries"
      },
      {
        alias: "alsatian",
        title: "Alsatian"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.51186,
      longitude: -2.75875
    },
    transactions: [],
    location: {
      address1: "2 place Dugesclin",
      address2: null,
      address3: "",
      city: "Saint-Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "2 place Dugesclin",
        "22000 Saint-Brieuc",
        "France"
      ]
    },
    phone: "+33296339313",
    display_phone: "+33 2 96 33 93 13",
    distance: 527.141114411028,
    service: ["livraison", "à emporter"]
  },
  {
    id: "mvr74KrGe8g7VLWBB-s2JQ",
    alias: "sushi-xpress-st-brieuc",
    name: "sushi xpress",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/589UbGXoWTzkXX--MqfXkw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/sushi-xpress-st-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 6,
    categories: [
      {
        alias: "japanese",
        title: "Japanese"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.51418,
      longitude: -2.765835
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "7 rue saint gilles",
      address2: "proche de la cathédrale",
      address3: null,
      city: "St Brieuc",
      zip_code: "",
      country: "FR",
      state: "22",
      display_address: [
        "7 rue saint gilles",
        "proche de la cathédrale",
        "St Brieuc, Côtes-d'Armor",
        "France"
      ]
    },
    phone: "+33296525985",
    display_phone: "+33 2 96 52 59 85",
    distance: 393.0569410786364,
    service: ["livraison"]
  },
  {
    id: "vALXeWHyfWmbe1mdamzzDg",
    alias: "la-cuisine-du-marxhé-st-brieuc",
    name: "La Cuisine Du Marxhé",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/hInQC5qvFpEN_wFPQjGOEQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-cuisine-du-marxh%C3%A9-st-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      },
      {
        alias: "bars",
        title: "Bar"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.514,
      longitude: -2.7624094
    },
    transactions: [],
    location: {
      address1: "4 Rue Saint-Gouéno",
      address2: null,
      address3: null,
      city: "St Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "4 Rue Saint-Gouéno",
        "22000 St Brieuc",
        "France"
      ]
    },
    phone: "",
    display_phone: "",
    distance: 449.25978288418173,
    service: ["à emporter"]
  },
  {
    id: "m9x8lVyKk7Vlh6yF-a0pfg",
    alias: "la-vigna-saint-brieuc",
    name: "La Vigna",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/2LPFrp9KO4Xhw7EJfGsRow/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-vigna-saint-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "italian",
        title: "Italien"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.51503,
      longitude: -2.76516
    },
    transactions: [],
    location: {
      address1: "19 rue Fardel",
      address2: "",
      address3: null,
      city: "Saint-Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "19 rue Fardel",
        "22000 Saint-Brieuc",
        "France"
      ]
    },
    phone: "+33296620628",
    display_phone: "+33 2 96 62 06 28",
    distance: 482.33210271509535,
    service: ["livraison", "à emporter"]
  },
  {
    id: "DDbVHymTEyJQPsJA3GSFiQ",
    alias: "le-bistrot-du-port-saint-brieuc",
    name: "Le Bistrot du Port",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/m75xnNeHU3K4Oam2zwh3-w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-bistrot-du-port-saint-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 26,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "seafood",
        title: "Fruit de mer"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.5159609120477,
      longitude: -2.76427460615162
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "15 rue des 3 Frères le Goff",
      address2: null,
      address3: null,
      city: "Saint-Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "15 rue des 3 Frères le Goff",
        "22000 Saint-Brieuc",
        "France"
      ]
    },
    phone: "+33296338303",
    display_phone: "+33 2 96 33 83 03",
    distance: 601.7767919362879,
    service: ["livraison", "à emporter"]
  },
  {
    id: "f8COfdKm6YDe62SR9fHlcg",
    alias: "la-proue-st-brieuc",
    name: "La Proue",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/Qm75yOKpBAwbgFMbTBjVMA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-proue-st-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 18,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.51467,
      longitude: -2.76428
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "7 rue Fardel",
      address2: "",
      address3: "",
      city: "St Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "7 rue Fardel",
        "22000 St Brieuc",
        "France"
      ]
    },
    phone: "+33296611757",
    display_phone: "+33 2 96 61 17 57",
    distance: 461.4759516824217,
    service: ["livraison", "à emporter"]
  },
  {
    id: "vd4-5XYZXGlTfeqsUlJylg",
    alias: "la-cabane-à-crabbe-binic-2",
    name: "La cabane à crabbe",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/-8en5ihJHd8qXsNcP8CXkw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-cabane-%C3%A0-crabbe-binic-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "seafood",
        title: "Fruit de mer"
      },
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.602566643295,
      longitude: -2.81943662841521
    },
    transactions: [],
    location: {
      address1: "8 quai Surcouf",
      address2: "",
      address3: null,
      city: "Binic",
      zip_code: "22520",
      country: "FR",
      state: "22",
      display_address: [
        "8 quai Surcouf",
        "22520 Binic",
        "France"
      ]
    },
    phone: "+33973210018",
    display_phone: "+33 9 73 21 00 18",
    distance: 10956.77471938883,
    service: ["livraison", "à emporter"]
  },
  {
    id: "6MaT7kWVNpS0UCfslRrBJA",
    alias: "la-guérande-charner-saint-brieuc-3",
    name: "La Guérande Charner",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-gu%C3%A9rande-charner-saint-brieuc-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.50786,
      longitude: -2.7637
    },
    transactions: [],
    location: {
      address1: "12 bd Charner",
      address2: null,
      address3: null,
      city: "Saint Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "12 bd Charner",
        "22000 Saint Brieuc",
        "France"
      ]
    },
    phone: "+33296941689",
    display_phone: "+33 2 96 94 16 89",
    distance: 346.4544012101429,
    service: ["livraison", "à emporter"]
  },
  {
    id: "tEYJjez-bFNf7JoIhrJeMA",
    alias: "l-olivier-saint-brieuc",
    name: "L'Olivier",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-olivier-saint-brieuc?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.512522,
      longitude: -2.758854
    },
    transactions: [],
    location: {
      address1: "2 Passage Saint-Guillaume",
      address2: null,
      address3: null,
      city: "Saint-Brieuc",
      zip_code: "22000",
      country: "FR",
      state: "22",
      display_address: [
        "2 Passage Saint-Guillaume",
        "22000 Saint-Brieuc",
        "France"
      ]
    },
    phone: "+33296621010",
    display_phone: "+33 2 96 62 10 10",
    distance: 553.1392095040684,
    service: ["livraison", "à emporter"]
  },
  {
    id: "J9amwqldDVrPdiPEDiHe3w",
    alias: "le-west-coast-plérin",
    name: "Le West Coast",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/g1SbsTAAglMlLC3atwlDtg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-west-coast-pl%C3%A9rin?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.56331,
      longitude: -2.75599
    },
    transactions: [],
    location: {
      address1: "11 Boulevard Roi D'ys",
      address2: null,
      address3: null,
      city: "Plérin",
      zip_code: "22190",
      country: "FR",
      state: "22",
      display_address: [
        "11 Boulevard Roi D'ys",
        "22190 Plérin",
        "France"
      ]
    },
    phone: "+33296580753",
    display_phone: "+33 2 96 58 07 53",
    distance: 5900.499320280681,
    service: ["livraison", "à emporter"]
  },
  {
    id: "_yevuO2z6swaj26x3XgjvQ",
    alias: "le-brezoune-ploufragan",
    name: "Le Brezoune",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/-iMw6o4bIu6pxOEfNSGgZg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-brezoune-ploufragan?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.489,
      longitude: -2.79292
    },
    transactions: [],
    location: {
      address1: "15 Rue Poste",
      address2: null,
      address3: null,
      city: "Ploufragan",
      zip_code: "22440",
      country: "FR",
      state: "22",
      display_address: [
        "15 Rue Poste",
        "22440 Ploufragan",
        "France"
      ]
    },
    phone: "+33296015937",
    display_phone: "+33 2 96 01 59 37",
    distance: 3127.824613698617,
    service: ["livraison", "à emporter"]
  },
  {
    id: "395ipjd029htf6Dm3vxnyQ",
    alias: "le-lion-d-or-saint-malo",
    name: "Le Lion d'Or",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/Qe8rf19P2QgC0gpDUlf5_Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-lion-d-or-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 26,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.65073,
      longitude: -2.02344
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "1 place Châteaubriand",
      address2: null,
      address3: null,
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "1 place Châteaubriand",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33967151342",
    display_phone: "+33 9 67 15 13 42",
    distance: 830.587511775786,
    service: ["livraison", "à emporter"]
  },
  {
    id: "LmCTmVeozXnQt-LW29_Haw",
    alias: "brasserie-du-sillon-st-malo",
    name: "Brasserie du Sillon",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/i7GmqHXlO7CLl21LAV10IQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/brasserie-du-sillon-st-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 36,
    categories: [
      {
        alias: "seafood",
        title: "Fruit de mer"
      },
      {
        alias: "brasseries",
        title: "Brasseries"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.6543077,
      longitude: -2.0091548
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "3 Chaussée du Sillon",
      address2: null,
      address3: null,
      city: "St Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "3 Chaussée du Sillon",
        "35400 St Malo",
        "France"
      ]
    },
    phone: "+33299561074",
    display_phone: "+33 2 99 56 10 74",
    distance: 325.74502611956945,
    service: ["livraison", "à emporter"]
  },
  {
    id: "EhePX2VYqE-BpSD-QFh6nQ",
    alias: "la-table-d-henri-st-malo",
    name: "La Table d'Henri",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/HijHRLwMkfU8rjFxkjeFLQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-table-d-henri-st-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 21,
    categories: [
      {
        alias: "brasseries",
        title: "Brasseries"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.6519329,
      longitude: -2.018086
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "4 Chaussée du Sillon",
      address2: null,
      address3: null,
      city: "St Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "4 Chaussée du Sillon",
        "35400 St Malo",
        "France"
      ]
    },
    phone: "+33299405093",
    display_phone: "+33 2 99 40 50 93",
    distance: 420.69190145291043,
    service: ["livraison"]
  },
  {
    id: "atsEdcffye6cce7sxdJ_jA",
    alias: "cosa-nostra-saint-malo",
    name: "Cosa Nostra",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/17DPRBu76DyDPnde_ikWvQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/cosa-nostra-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "italian",
        title: "Italien"
      },
      {
        alias: "pizza",
        title: "Pizza"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.65289254247,
      longitude: -2.01276436997868
    },
    transactions: [],
    location: {
      address1: "56 chaussée du Sillon",
      address2: "",
      address3: "",
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "56 chaussée du Sillon",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33299402129",
    display_phone: "+33 2 99 40 21 29",
    distance: 71.34231279300023,
    service: ["livraison", "à emporter"]
  },
  {
    id: "kc03yeQv36HUZjpOXjeGUw",
    alias: "la-java-st-malo",
    name: "La Java",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/aP2PIngqFVyiQUOPWHFrTg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-java-st-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 13,
    categories: [
      {
        alias: "cafes",
        title: "Cafes"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.65001,
      longitude: -2.02399
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "3 rue Sainte-Barbe",
      address2: "",
      address3: "",
      city: "St Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "3 rue Sainte-Barbe",
        "35400 St Malo",
        "France"
      ]
    },
    phone: "+33299564190",
    display_phone: "+33 2 99 56 41 90",
    distance: 880.1930824497834,
    service: ["à emporter"]
  },
  {
    id: "N3ufzFjUdOaCbvN-bcDr4A",
    alias: "le-cap-horn-saint-malo",
    name: "Le Cap Horn",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/0RXJMY29xBQRGATNuqE-0A/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-cap-horn-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 6,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.65793,
      longitude: -1.99912
    },
    transactions: [],
    location: {
      address1: "100 boulevard Hébert",
      address2: "",
      address3: "",
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "100 boulevard Hébert",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33299407540",
    display_phone: "+33 2 99 40 75 40",
    distance: 1123.4317045951227,
    service: ["livraison", "à emporter"]
  },
  {
    id: "9HZIxuWTc5TXHHeFXBz9GQ",
    alias: "les-7-mers-saint-malo",
    name: "Les 7 Mers",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/993MwroNWs6bKmtLo504rQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/les-7-mers-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.653435,
      longitude: -2.010954
    },
    transactions: [],
    price: "€€€€",
    location: {
      address1: "64 Chaussée du Sillon",
      address2: "",
      address3: "",
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "64 Chaussée du Sillon",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33299208141",
    display_phone: "+33 2 99 20 81 41",
    distance: 164.17881398484332,
    service: ["livraison", "à emporter"]
  },
  {
    id: "E9ntzgHLBZPWPEDH2no8_A",
    alias: "le-bistrot-de-jean-st-malo",
    name: "le Bistrot de  Jean",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/oBDfP0HvlezQAo0_SgY6VQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-bistrot-de-jean-st-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 20,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.6503465,
      longitude: -2.0248173
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "6 rue de la Corne de Cerf",
      address2: "intra muros",
      address3: null,
      city: "St Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "6 rue de la Corne de Cerf",
        "intra muros",
        "35400 St Malo",
        "France"
      ]
    },
    phone: "+33299409868",
    display_phone: "+33 2 99 40 98 68",
    distance: 938.6954559727425,
    service: ["livraison", "à emporter"]
  },
  {
    id: "3jWAJ7N7uie5VyHxJYd1Yg",
    alias: "l-absinthe-st-malo-2",
    name: "L'Absinthe",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/zii9_WbkIyxjFZCT7baYsA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-absinthe-st-malo-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 12,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.647945,
      longitude: -2.024896
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "1 rue Orme",
      address2: null,
      address3: null,
      city: "St Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "1 rue Orme",
        "35400 St Malo",
        "France"
      ]
    },
    phone: "+33299402615",
    display_phone: "+33 2 99 40 26 15",
    distance: 1038.8410003307483,
    service: ["livraison", "à emporter"]
  },
  {
    id: "izInnwacLMO5RdHu2UVq1g",
    alias: "restaurant-taverne-du-commerce-saint-malo-2",
    name: "Restaurant Taverne du Commerce",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/EetQLpg6xOEsL_vaRLnXkQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/restaurant-taverne-du-commerce-saint-malo-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 5,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.65536,
      longitude: -2.00501
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "132 Chaussée Sillon",
      address2: null,
      address3: null,
      city: "Saint Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "132 Chaussée Sillon",
        "35400 Saint Malo",
        "France"
      ]
    },
    phone: "+33299561156",
    display_phone: "+33 2 99 56 11 56",
    distance: 639.7208104760094,
    service: ["livraison", "à emporter"]
  },
  {
    id: "4yrJDWHcAXojmCTyXgklhQ",
    alias: "les-embruns-st-malo-2",
    name: "Les Embruns",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/JGU48_Y1P0AaesqERBe31Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/les-embruns-st-malo-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 10,
    categories: [
      {
        alias: "seafood",
        title: "Fruit de mer"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.6552,
      longitude: -2.00563
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "120 chaussée du Sillon",
      address2: null,
      address3: null,
      city: "St Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "120 chaussée du Sillon",
        "35400 St Malo",
        "France"
      ]
    },
    phone: "+33299563357",
    display_phone: "+33 2 99 56 33 57",
    distance: 591.7599457328924,
    service: ["livraison", "à emporter"]
  },
  {
    id: "hmi2XaJuug4yw29yvOf4Yg",
    alias: "margaux-saint-malo",
    name: "Margaux",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/zGFdNI8-y0Fs7yyFG4RWqw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/margaux-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 77,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.64794,
      longitude: -2.02558
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "3 place du Marché aux Légumes",
      address2: "",
      address3: "",
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "3 place du Marché aux Légumes",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33299202602",
    display_phone: "+33 2 99 20 26 02",
    distance: 1072.9677613061172,
    service: ["livraison", "à emporter"]
  },
  {
    id: "4I_TNX7RAPyaWx9razlcTg",
    alias: "la-trattoria-malouine-saint-malo",
    name: "La Trattoria Malouine",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/94APLQTqnkBxFE0YaX93Ag/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-trattoria-malouine-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 6,
    categories: [
      {
        alias: "italian",
        title: "Italien"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.6490099,
      longitude: -2.02476
    },
    transactions: [],
    location: {
      address1: "4 rue des Marins",
      address2: null,
      address3: "",
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "4 rue des Marins",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33299409588",
    display_phone: "+33 2 99 40 95 88",
    distance: 982.7109386687545,
    service: ["livraison", "à emporter"]
  },
  {
    id: "hsGA5sA_Wc6LrAMASfiPgw",
    alias: "le-bouche-à-oreille-saint-malo-5",
    name: "Le Bouche à Oreille",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/dJQGXW0deIvkjKgHf6Km2g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-bouche-%C3%A0-oreille-saint-malo-5?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 8,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.65549,
      longitude: -2.00461
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "57 chaussée du Sillon",
      address2: null,
      address3: null,
      city: "Saint Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "57 chaussée du Sillon",
        "35400 Saint Malo",
        "France"
      ]
    },
    phone: "+33299560968",
    display_phone: "+33 2 99 56 09 68",
    distance: 672.2998400691691,
    service: ["livraison", "à emporter"]
  },
  {
    id: "04AP2Lez8QeeJWGdSf0uZQ",
    alias: "l-ancrage-saint-malo",
    name: "L'Ancrage",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/FBPlpr5yU0h1f6ECVoCZNA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-ancrage-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 15,
    categories: [
      {
        alias: "seafood",
        title: "Fruit de mer"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.649378,
      longitude: -2.023637
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "7 rue Jacques Cartier",
      address2: null,
      address3: null,
      city: "Saint Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "7 rue Jacques Cartier",
        "35400 Saint Malo",
        "France"
      ]
    },
    phone: "+33299401597",
    display_phone: "+33 2 99 40 15 97",
    distance: 888.1144818177557,
    service: ["livraison", "à emporter"]
  },
  {
    id: "fNalLGTWwDET1NEpshxhyw",
    alias: "vents-d-ouest-saint-malo",
    name: "Vents d'Ouest",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/w1Pz5lQGZLPjbD3EeQJJ_A/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/vents-d-ouest-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 10,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.648919,
      longitude: -2.02439
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "5 rue du Puits aux Braies",
      address2: "",
      address3: null,
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "5 rue du Puits aux Braies",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33223182095",
    display_phone: "+33 2 23 18 20 95",
    distance: 958.6642684649763,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Is3q7B9BEyKX4yWi7O0zGw",
    alias: "o-tapas-breton-saint-malo",
    name: "O Tapas Breton",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/wQlvPrmUJm8KdRueq_ZRoA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/o-tapas-breton-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "seafood",
        title: "Fruit de mer"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.6481265085999,
      longitude: -2.02493286202442
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "4 rue de l'Orme",
      address2: "",
      address3: "",
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "4 rue de l'Orme",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33299481985",
    display_phone: "+33 2 99 48 19 85",
    distance: 1032.0005716229543,
    service: ["livraison", "à emporter"]
  },
  {
    id: "n0f4DU4FloQaLRB8hwuk7A",
    alias: "l-olivier-saint-malo",
    name: "L'Olivier",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/Uoy9zvwzxyD7LOdkHr-bmQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/l-olivier-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      },
      {
        alias: "italian",
        title: "Italien"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.653234,
      longitude: -2.011881
    },
    transactions: [],
    location: {
      address1: "60 chaussée du Sillon",
      address2: "",
      address3: null,
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "01",
      display_address: [
        "60 chaussée du Sillon",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33299404048",
    display_phone: "+33 2 99 40 40 48",
    distance: 110.12808559355459,
    service: ["livraison", "à emporter"]
  },
  {
    id: "yzn3jq59fwf_O0MaVITiqg",
    alias: "la-hoguette-saint-malo",
    name: "La Hoguette",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/A1qXNphRKinKj14vzof-Qg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-hoguette-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.65719,
      longitude: -1.99637
    },
    transactions: [],
    location: {
      address1: "2 Avenue Révérend Père Umbricht",
      address2: null,
      address3: null,
      city: "Saint Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "2 Avenue Révérend Père Umbricht",
        "35400 Saint Malo",
        "France"
      ]
    },
    phone: "+33299560766",
    display_phone: "+33 2 99 56 07 66",
    distance: 1295.978636999902,
    service: ["livraison", "à emporter"]
  },
  {
    id: "una6owaQ3BtCSFCGm0U3jQ",
    alias: "miamathèque-saint-malo",
    name: "MIAMathèque",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/C7gr-pexR-GfMBudlnGOfw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/miamath%C3%A8que-saint-malo?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.6474581912361,
      longitude: -2.00662073349109
    },
    transactions: [],
    location: {
      address1: "31-33 rue Nicolas Bouvier",
      address2: "",
      address3: "",
      city: "Saint-Malo",
      zip_code: "35400",
      country: "FR",
      state: "35",
      display_address: [
        "31-33 rue Nicolas Bouvier",
        "35400 Saint-Malo",
        "France"
      ]
    },
    phone: "+33782283868",
    display_phone: "+33 7 82 28 38 68",
    distance: 685.1553058847286,
    service: ["livraison", "à emporter"]
  },
  {
    id: "2WYLqlEylE_pF0rYxUnwYA",
    alias: "la-table-de-jeanne-vannes",
    name: "La Table de Jeanne",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/jgc6Yp3yUk-7VNZ3YwU-ww/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-table-de-jeanne-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 31,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 47.654961,
      longitude: -2.758633
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "13 place de la Poissonnerie",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "13 place de la Poissonnerie",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297473491",
    display_phone: "+33 2 97 47 34 91",
    distance: 798.9923636257323,
    service: ["livraison", "à emporter"]
  },
  {
    id: "MUdF0COZgSkEhOb7RWt58w",
    alias: "la-p-tite-souris-vannes",
    name: "La P'tite Souris",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/99joyAZcT5kHumKsW1Bdmw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-p-tite-souris-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 47.65265,
      longitude: -2.75925
    },
    transactions: [],
    location: {
      address1: "36 rue du Port",
      address2: "",
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "36 rue du Port",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297471590",
    display_phone: "+33 2 97 47 15 90",
    distance: 964.0882131546326,
    service: ["livraison", "à emporter"]
  },
  {
    id: "pcfN5w5V-m_fYUBzDrgedw",
    alias: "chez-woody-vannes",
    name: "Chez Woody",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/eYobXDl8awyDP8uo7TemxA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/chez-woody-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "spanish",
        title: "Spanish"
      },
      {
        alias: "tapas",
        title: "Tapas Bars"
      },
      {
        alias: "bbq",
        title: "Barbeque"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 47.6596952248244,
      longitude: -2.75290164620276
    },
    transactions: [],
    location: {
      address1: "5 rue Saint-Patern",
      address2: "",
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "5 rue Saint-Patern",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297691373",
    display_phone: "+33 2 97 69 13 73",
    distance: 405.4746213362962,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Gtleg0Od781mG0UKqBGAIQ",
    alias: "a-la-bonne-franquette-vannes",
    name: "A la Bonne Franquette",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/hG1A_Akmm9llRpJ76oSTyg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/a-la-bonne-franquette-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 47.6571007,
      longitude: -2.7578002
    },
    transactions: [],
    location: {
      address1: "13 rue des Halles",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "13 rue des Halles",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297635337",
    display_phone: "+33 2 97 63 53 37",
    distance: 687.2134864151109,
    service: ["livraison", "à emporter"]
  },
  {
    id: "vSoITqGXzjvwbJUR8-PF_w",
    alias: "au-péché-mignon-vannes-3",
    name: "Au Péché Mignon",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/Mcc2qjiUObRANndpAbL3ig/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/au-p%C3%A9ch%C3%A9-mignon-vannes-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 12,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 47.6585534,
      longitude: -2.7540703
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "6 place Gén de Gaulle",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "6 place Gén de Gaulle",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297540118",
    display_phone: "+33 2 97 54 01 18",
    distance: 423.7357323440452,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Ikz166iND6LDKPATs_FXlQ",
    alias: "la-tête-en-l-air-vannes",
    name: "La Tête en l'Air",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/fbgmZyBogu9Ti5mw8CG5Cg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-t%C3%AAte-en-l-air-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "bistros",
        title: "Bistro"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 47.6604691,
      longitude: -2.7545199
    },
    transactions: [],
    location: {
      address1: "43 rue de la Fontaine",
      address2: null,
      address3: "",
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "43 rue de la Fontaine",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297673113",
    display_phone: "+33 2 97 67 31 13",
    distance: 557.1220565479821,
    service: ["à emporter"]
  },
  {
    id: "pxF1eonA37ic5CH-xqrg6g",
    alias: "chez-la-mère-6-sous-vannes",
    name: "Chez la Mère 6 Sous",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/sX45bIjzdcwE_DCZ30M-Mg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/chez-la-m%C3%A8re-6-sous-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 7,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 47.657432,
      longitude: -2.759369
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "11 rue Thomas de Closmadeuc",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "11 rue Thomas de Closmadeuc",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297019367",
    display_phone: "+33 2 97 01 93 67",
    distance: 803.4349113077853,
    service: ["livraison", "à emporter"]
  },
  {
    id: "UH4TzWI5pNj_n8PPPpFLjw",
    alias: "la-gargouille-vannes",
    name: "La Gargouille",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/YB25tq6_UdHkcZPazsyB2g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-gargouille-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "steak",
        title: "Steakhouses"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 47.6582147,
      longitude: -2.7484704
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "9 rue Aristide Briand",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "9 rue Aristide Briand",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297424851",
    display_phone: "+33 2 97 42 48 51",
    distance: 82.76465728638027,
    service: ["livraison", "à emporter"]
  },
  {
    id: "_PIF595fdgEMFa286D4M2g",
    alias: "le-vent-d-est-vannes",
    name: "Le Vent D'Est",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-vent-d-est-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 9,
    categories: [
      {
        alias: "alsatian",
        title: "Alsatian"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 47.6529625,
      longitude: -2.7575337
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "21 Rue Ferdiannd le Dressay",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "21 Rue Ferdiannd le Dressay",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297013453",
    display_phone: "+33 2 97 01 34 53",
    distance: 834.1474966474846,
    service: ["livraison", "à emporter"]
  },
  {
    id: "3VXuzSC6H4_LsxUuGtOvXQ",
    alias: "bar-de-l-océan-vannes-2",
    name: "Bar de l'Océan",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/XmkCrwWbOL2wB819VxcrHw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/bar-de-l-oc%C3%A9an-vannes-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 7,
    categories: [
      {
        alias: "bars",
        title: "Bar"
      },
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 47.6543086,
      longitude: -2.7582704
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "4 place Gambetta",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "4 place Gambetta",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297472281",
    display_phone: "+33 2 97 47 22 81",
    distance: 802.7323009682799,
    service: ["livraison", "à emporter"]
  },
  {
    id: "uHZdwLg9xzLhlfoSHpMozw",
    alias: "terroirs-vannes",
    name: "Terroirs",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/gNrQTtv4Q66Iyvo7QjqEPA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/terroirs-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 47.6601619,
      longitude: -2.7544748
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "22 Fontaine",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "22 Fontaine",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297475752",
    display_phone: "+33 2 97 47 57 52",
    distance: 528.9673822587918,
    service: ["livraison", "à emporter"]
  },
  {
    id: "P4rXOWfyLpiT8zJuYN5FCw",
    alias: "halle-de-la-poissonnerie-vannes",
    name: "Halle De La Poissonnerie",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/amKUaNheumBGED89oBseMA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/halle-de-la-poissonnerie-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      },
      {
        alias: "bars",
        title: "Bar"
      },
      {
        alias: "seafoodmarkets",
        title: "Seafood Markets"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 47.6552256,
      longitude: -2.7585703
    },
    transactions: [],
    price: "€",
    location: {
      address1: "21 place de la Poissonnerie",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "21 place de la Poissonnerie",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297471558",
    display_phone: "+33 2 97 47 15 58",
    distance: 784.7082348123209,
    service: ["livraison", "à emporter"]
  },
  {
    id: "ec-Z8ZffE-aPjB7IOGrr6A",
    alias: "ar-gouelenn-sene-3",
    name: "Ar Gouelenn",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/7l84_HoyQpz6_3XPTifNcQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/ar-gouelenn-sene-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 47.61949,
      longitude: -2.73688
    },
    transactions: [],
    location: {
      address1: "4 Place De L'eglise",
      address2: null,
      address3: null,
      city: "Sene",
      zip_code: "56860",
      country: "FR",
      state: "56",
      display_address: [
        "4 Place De L'eglise",
        "56860 Sene",
        "France"
      ]
    },
    phone: "+33297660613",
    display_phone: "+33 2 97 66 06 13",
    distance: 4315.167890019559,
    service: ["livraison", "à emporter"]
  },
  {
    id: "BwQIoYYy5SWxMfh6Jq4Xog",
    alias: "brasserie-edgard-vannes",
    name: "Brasserie Edgard",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/KhBsQ9LQ0cijASJmbh_Ueg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/brasserie-edgard-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "bars",
        title: "Bar"
      },
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 47.638782,
      longitude: -2.7642
    },
    transactions: [],
    location: {
      address1: "19 rue Daniel Gilard",
      address2: null,
      address3: "Parc du Golfe",
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "19 rue Daniel Gilard",
        "Parc du Golfe",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297404452",
    display_phone: "+33 2 97 40 44 52",
    distance: 2383.430731907768,
    service: ["livraison", "à emporter"]
  },
  {
    id: "CP56BhcFt9bSisu3GJdRhA",
    alias: "restaurant-de-roscanvec-vannes",
    name: "Restaurant de Roscanvec",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/oh4nCEC_YfZa5GPX9YPj9w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/restaurant-de-roscanvec-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 21,
    categories: [
      {
        alias: "fashion",
        title: "Fashion"
      },
      {
        alias: "gourmet",
        title: "Specialty Food"
      },
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 47.6572366,
      longitude: -2.7578919
    },
    transactions: [],
    price: "€€€€",
    location: {
      address1: "17 Halles",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "17 Halles",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297471596",
    display_phone: "+33 2 97 47 15 96",
    distance: 693.3151128421969,
    service: ["livraison", "à emporter"]
  },
  {
    id: "9LWcvUp-E5Dgoby_WN3Urw",
    alias: "le-factory-vannes",
    name: "Le Factory",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/AR2wQs-ceBr_h1AqEo1rEQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-factory-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "burgers",
        title: "Burgers"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 47.6595170390115,
      longitude: -2.77641490101814
    },
    transactions: [],
    location: {
      address1: "27 rue Joseph le Brix",
      address2: "",
      address3: "",
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "27 rue Joseph le Brix",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297473134",
    display_phone: "+33 2 97 47 31 34",
    distance: 2092.3587785841682,
    service: ["livraison", "à emporter"]
  },
  {
    id: "MOzGY8s1iLXCdkPO7t-g_A",
    alias: "la-bella-napoli-vannes",
    name: "La Bella Napoli",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/yQ2tPn9t714jo8zu2Lb8dA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-bella-napoli-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 10,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      },
      {
        alias: "italian",
        title: "Italien"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 47.6580935,
      longitude: -2.7597902
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "19 place Maurice Marchais",
      address2: null,
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "19 place Maurice Marchais",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297471729",
    display_phone: "+33 2 97 47 17 29",
    distance: 837.7462990919774,
    service: ["livraison", "à emporter"]
  },
  {
    id: "N8VJ6hD3NAJIviRyUYVk5w",
    alias: "dan-ewen-vannes",
    name: "Dan Ewen",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/yupvzNSfwXQiB-lUy2RHEQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/dan-ewen-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 20,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 47.6589,
      longitude: -2.75416
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "3 Place Gén De Gaulle",
      address2: "",
      address3: "",
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "3 Place Gén De Gaulle",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297424434",
    display_phone: "+33 2 97 42 44 34",
    distance: 442.4354093291509,
    service: ["livraison", "à emporter"]
  },
  {
    id: "12a-gQcSMc6gOORLwm_JTQ",
    alias: "anna-et-paul-vannes",
    name: "Anna et Paul",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/DKtFlLzZO1T93hCXXvoIng/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/anna-et-paul-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 47.65869,
      longitude: -2.75311
    },
    transactions: [],
    location: {
      address1: "23 place du Général de Gaulle",
      address2: "",
      address3: null,
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "23 place du Général de Gaulle",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297612202",
    display_phone: "+33 2 97 61 22 02",
    distance: 358.4518272971658,
    service: ["livraison", "à emporter"]
  },
  {
    id: "fmAnsX787KPJw3TN7dku7Q",
    alias: "le-karpa-vannes",
    name: "Le Karpa",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/f8V_VeSodpuZDqW1nyDLKA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-karpa-vannes?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      },
      {
        alias: "burgers",
        title: "Burgers"
      },
      {
        alias: "italian",
        title: "Italien"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 47.6529388,
      longitude: -2.7593901
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "28 rue du Port",
      address2: "",
      address3: "",
      city: "Vannes",
      zip_code: "56000",
      country: "FR",
      state: "56",
      display_address: [
        "28 rue du Port",
        "56000 Vannes",
        "France"
      ]
    },
    phone: "+33297474834",
    display_phone: "+33 2 97 47 48 34",
    distance: 957.4655966001017,
    service: ["livraison", "à emporter"]
  },
  {
    id: "5d6HxA2dlEkGjuCjH1x6EQ",
    alias: "les-pieds-sous-la-table-vitré",
    name: "Les Pieds Sous la Table",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/m0gM86HXajq9CzHZEZK3eQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/les-pieds-sous-la-table-vitr%C3%A9?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 4,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.12365,
      longitude: -1.21326
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "20 rue d'en Bas",
      address2: "",
      address3: "",
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "20 rue d'en Bas",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33223552781",
    display_phone: "+33 2 23 55 27 81",
    distance: 1863.9980360178286,
    service: ["livraison", "à emporter"]
  },
  {
    id: "cOO2N0RQYC69UjGKaNCZDA",
    alias: "au-vieux-vitre-vitré",
    name: "Au Vieux Vitre",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/au-vieux-vitre-vitr%C3%A9?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "realestate",
        title: "Real Estate"
      },
      {
        alias: "italian",
        title: "Italien"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.1236143,
      longitude: -1.2132846
    },
    transactions: [],
    location: {
      address1: "1 Rue D' En Bas",
      address2: null,
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "1 Rue D' En Bas",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "",
    display_phone: "",
    distance: 1862.056292171608,
    service: ["livraison", "à emporter"]
  },
  {
    id: "AsxtMzEuJdWPxBQzfzf6EA",
    alias: "le-petit-bouchon-vitré-2",
    name: "Le Petit Bouchon",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/c-9Fh4c9UM8VkwqYt6J4YA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-petit-bouchon-vitr%C3%A9-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.1302278777149,
      longitude: -1.2181734842971
    },
    transactions: [],
    location: {
      address1: "37 rue Petit Rachapt",
      address2: null,
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "37 rue Petit Rachapt",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33299745201",
    display_phone: "+33 2 99 74 52 01",
    distance: 2668.1038106113797,
    service: ["livraison", "à emporter"]
  },
  {
    id: "KzD7C-mCtn-DFKsHDUDPJg",
    alias: "la-soupe-aux-choux-vitré-2",
    name: "La Soupe aux Choux",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-soupe-aux-choux-vitr%C3%A9-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.1247885,
      longitude: -1.2131711
    },
    transactions: [],
    price: "€€€",
    location: {
      address1: "32 Rue Notre Dame",
      address2: null,
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "32 Rue Notre Dame",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33299751086",
    display_phone: "+33 2 99 75 10 86",
    distance: 1960.2684202429032,
    service: ["livraison", "à emporter"]
  },
  {
    id: "hln4F8zaS6XgOSuXqAZBeg",
    alias: "bar-brasserie-les-voyageurs-vitré-3",
    name: "Bar Brasserie Les Voyageurs",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/T3mStmXeEVcSjD36p2Ow-w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/bar-brasserie-les-voyageurs-vitr%C3%A9-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      },
      {
        alias: "bars",
        title: "Bar"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.1233152,
      longitude: -1.2121166
    },
    transactions: [],
    location: {
      address1: "28 Rue Garengeot",
      address2: null,
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "28 Rue Garengeot",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33961043065",
    display_phone: "+33 9 61 04 30 65",
    distance: 1782.277537903103,
    service: ["livraison", "à emporter"]
  },
  {
    id: "EMAlNLivDMBhEtWzC2jNhQ",
    alias: "restaurant-auberge-saint-louis-vitré",
    name: "Restaurant Auberge Saint Louis",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/CZyP1KE-bfXNGMJTFyrh9Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/restaurant-auberge-saint-louis-vitr%C3%A9?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 3,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.1247418,
      longitude: -1.2117375
    },
    transactions: [],
    price: "€",
    location: {
      address1: "31 Rue Notre Dame",
      address2: null,
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "31 Rue Notre Dame",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33299752828",
    display_phone: "+33 2 99 75 28 28",
    distance: 1894.7722362568718,
    service: ["livraison", "à emporter"]
  },
  {
    id: "WEE5IyQ8RpgN3YflnIz_3g",
    alias: "creperie-la-clé-des-champs-vitre-3",
    name: "Creperie La Clé Des Champs",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/8nPdWbhxgaWZq-hQppeqlQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/creperie-la-cl%C3%A9-des-champs-vitre-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.12401,
      longitude: -1.20221
    },
    transactions: [],
    location: {
      address1: "I bd de Laval",
      address2: "",
      address3: "",
      city: "Vitre",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "I bd de Laval",
        "35500 Vitre",
        "France"
      ]
    },
    phone: "+33223552440",
    display_phone: "+33 2 23 55 24 40",
    distance: 1531.9906562922004,
    service: ["livraison", "à emporter"]
  },
  {
    id: "BJeR1-QLiZHbzI1E6vScug",
    alias: "le-chêne-vert-vitré-2",
    name: "Le Chêne Vert",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/D-iBP_hzCpLozWnrl_aMtg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-ch%C3%AAne-vert-vitr%C3%A9-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.12272,
      longitude: -1.211397
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "2 place Général de Gaulle",
      address2: null,
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "2 place Général de Gaulle",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33223551462",
    display_phone: "+33 2 23 55 14 62",
    distance: 1697.257099563199,
    service: ["livraison"]
  },
  {
    id: "O-gaKmhVB4lyA22H7-Ld7g",
    alias: "atomic-burger-vitré",
    name: "Atomic Burger",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/tIbZjpSvzae84Bkbq_piEA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/atomic-burger-vitr%C3%A9?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "burgers",
        title: "Burgers"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.1232986,
      longitude: -1.21215
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "28 rue Garangeot",
      address2: "",
      address3: "",
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "28 rue Garangeot",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33299750606",
    display_phone: "+33 2 99 75 06 06",
    distance: 1777.2822850711655,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Da2fZacnPbHbx0xD70u5dQ",
    alias: "titorias-vitré",
    name: "Titoria's",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/5-zdBPBu-Hy5CW-oOwImNw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/titorias-vitr%C3%A9?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "chinese",
        title: "Chinese"
      },
      {
        alias: "wok",
        title: "Wok"
      },
      {
        alias: "asianfusion",
        title: "Asian Fusion"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.120221,
      longitude: -1.208664
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "2 boulevard Pierre Landais",
      address2: "",
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "2 boulevard Pierre Landais",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33299740692",
    display_phone: "+33 2 99 74 06 92",
    distance: 1353.3147897549366,
    service: ["livraison", "à emporter"]
  },
  {
    id: "XD630OK2uIMZFZeJJmlmCA",
    alias: "le-pichet-vitré",
    name: "Le Pichet",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/5yCfCgZKdmXWroVex4NAEw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-pichet-vitr%C3%A9?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      },
      {
        alias: "seafood",
        title: "Fruit de mer"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.123817,
      longitude: -1.201021
    },
    transactions: [],
    location: {
      address1: "17 Boulevard de Laval",
      address2: null,
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "17 Boulevard de Laval",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33299752409",
    display_phone: "+33 2 99 75 24 09",
    distance: 1493.1930492778313,
    service: ["livraison", "à emporter"]
  },
  {
    id: "FSmtDCtT5Onpa5ulke3P1Q",
    alias: "la-fabrique-d-embas-vitré",
    name: "La Fabrique d'Embas",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/cCeIeBHDIowsRWPrABLFYA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/la-fabrique-d-embas-vitr%C3%A9?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "french",
        title: "Cuisine française"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.1236513507663,
      longitude: -1.213512
    },
    transactions: [],
    location: {
      address1: "6 rue d'en Bas",
      address2: "",
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "6 rue d'en Bas",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33299962170",
    display_phone: "+33 2 99 96 21 70",
    distance: 1875.9051412080182,
    service: ["livraison", "à emporter"]
  },
  {
    id: "AHWy5ImKXsA21Divl1kO-g",
    alias: "hanako-sushi-vitre-3",
    name: "Hanako Sushi",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/hanako-sushi-vitre-3?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 6,
    categories: [
      {
        alias: "japanese",
        title: "Japanese"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 48.120595,
      longitude: -1.207947
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "Boulevard Pierre Landais",
      address2: null,
      address3: null,
      city: "Vitre",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "Boulevard Pierre Landais",
        "35500 Vitre",
        "France"
      ]
    },
    phone: "+33982566330",
    display_phone: "+33 9 82 56 63 30",
    distance: 1355.3217848308714,
    service: ["livraison", "à emporter"]
  },
  {
    id: "MaYKk682xLXuQKNltqQx6g",
    alias: "pen-roc-st-didier",
    name: "pen roc",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/pen-roc-st-didier?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      },
      {
        alias: "hotels",
        title: "Hotels"
      }
    ],
    rating: 5.0,
    coordinates: {
      latitude: 48.106287,
      longitude: -1.354902
    },
    transactions: [],
    location: {
      address1: "Avenue La Peiniere St Didier",
      address2: null,
      address3: null,
      city: "St Didier",
      zip_code: "35221",
      country: "FR",
      state: "35",
      display_address: [
        "Avenue La Peiniere St Didier",
        "35221 St Didier",
        "France"
      ]
    },
    phone: "+33299003302",
    display_phone: "+33 2 99 00 33 02",
    distance: 11695.760884993804,
    service: ["livraison", "à emporter"]
  },
  {
    id: "jkd6iC2zXITT4WQ3igqLzA",
    alias: "place-aux-crêpes-vitré-2",
    name: "Place aux Crêpes",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/0POdlYfscQTGg3xexJunCg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/place-aux-cr%C3%AApes-vitr%C3%A9-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "tea",
        title: "Tea Rooms"
      },
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.125053,
      longitude: -1.212382
    },
    transactions: [],
    location: {
      address1: "3 place Notre Dame",
      address2: "",
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "3 place Notre Dame",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33256289814",
    display_phone: "+33 2 56 28 98 14",
    distance: 1950.2755937786214,
    service: ["livraison", "à emporter"]
  },
  {
    id: "Iu7N5a0PB4tH-UXihUwblg",
    alias: "crêperie-des-lys-argentré-du-plessis-4",
    name: "Crêperie des Lys",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/cr%C3%AAperie-des-lys-argentr%C3%A9-du-plessis-4?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "creperies",
        title: "Crêperies"
      }
    ],
    rating: 4.0,
    coordinates: {
      latitude: 48.0569896,
      longitude: -1.1475989
    },
    transactions: [],
    location: {
      address1: "50 Rue Alain d'Argentré",
      address2: null,
      address3: null,
      city: "Argentré Du Plessis",
      zip_code: "35370",
      country: "FR",
      state: "35",
      display_address: [
        "50 Rue Alain d'Argentré",
        "35370 Argentré Du Plessis",
        "France"
      ]
    },
    phone: "+33223550577",
    display_phone: "+33 2 23 55 05 77",
    distance: 7019.572774902027,
    service: ["livraison", "à emporter"]
  },
  {
    id: "BlJO01refREugSHKhq-s0Q",
    alias: "pen-roc-châteaubourg",
    name: "Pen'Roc",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/pen-roc-ch%C3%A2teaubourg?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 2,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 48.106287,
      longitude: -1.354902
    },
    transactions: [],
    location: {
      address1: "La Peinière",
      address2: null,
      address3: null,
      city: "Châteaubourg",
      zip_code: "35220",
      country: "FR",
      state: "35",
      display_address: [
        "La Peinière",
        "35220 Châteaubourg",
        "France"
      ]
    },
    phone: "+33299003302",
    display_phone: "+33 2 99 00 33 02",
    distance: 11695.760884993804,
    service: ["livraison", "à emporter"]
  },
  {
    id: "mX6vLvxgLgQOVA2CDgcfAA",
    alias: "le-triskell-vitré-2",
    name: "Le Triskell",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/Gm38bljYJ5GZI2ledwpH1A/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-triskell-vitr%C3%A9-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "restaurants",
        title: "Restaurant"
      },
      {
        alias: "bars",
        title: "Bar"
      }
    ],
    rating: 1.0,
    coordinates: {
      latitude: 48.1248127,
      longitude: -1.2129236
    },
    transactions: [],
    price: "€",
    location: {
      address1: "26 Rue Notre Dame",
      address2: null,
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "26 Rue Notre Dame",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33299745150",
    display_phone: "+33 2 99 74 51 50",
    distance: 1951.6069774100613,
    service: ["livraison", "à emporter"]
  },
  {
    id: "svs6teFABuL20-dJjfBzAA",
    alias: "pizzeria-restaurant-l-ecuyer-vitré-2",
    name: "Pizzeria Restaurant L'Ecuyer",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/pizzeria-restaurant-l-ecuyer-vitr%C3%A9-2?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "pizza",
        title: "Pizza"
      },
      {
        alias: "italian",
        title: "Italien"
      }
    ],
    rating: 1.0,
    coordinates: {
      latitude: 48.1246273,
      longitude: -1.2128129
    },
    transactions: [],
    price: "€€",
    location: {
      address1: "2 Rue Garengeot",
      address2: null,
      address3: null,
      city: "Vitré",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "2 Rue Garengeot",
        "35500 Vitré",
        "France"
      ]
    },
    phone: "+33299740607",
    display_phone: "+33 2 99 74 06 07",
    distance: 1930.0972879823712,
    service: ["livraison", "à emporter"]
  },
  {
    id: "fM-_wn6oQJ2PWZAr2SOHKg",
    alias: "le-relais-vert-erbrée",
    name: "Le relais vert",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/oLWL5N0jHN9UPpkJWB_fRA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/le-relais-vert-erbr%C3%A9e?adjust_creative=EnoOEnaqi0u-FJkpnPzjBA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EnoOEnaqi0u-FJkpnPzjBA",
    review_count: 1,
    categories: [
      {
        alias: "brasseries",
        title: "Brasseries"
      }
    ],
    rating: 3.0,
    coordinates: {
      latitude: 48.099471,
      longitude: -1.125426
    },
    transactions: [],
    location: {
      address1: null,
      address2: null,
      address3: null,
      city: "Erbrée",
      zip_code: "35500",
      country: "FR",
      state: "35",
      display_address: [
        "35500 Erbrée",
        "France"
      ]
    },
    phone: "",
    display_phone: "",
    distance: 5493.437639721079,
    service: ["livraison", "à emporter"]
  }
];

export default localRestaurants
