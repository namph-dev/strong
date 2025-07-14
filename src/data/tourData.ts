const tourData = {
    title: "Popular Tours",
    layout: "grid",
    total: 78,
    data: [
        {
            "title": "Cannes and Antibes Night Tour",
            "ariaLabel": "Private car Ha Noi to Ha Long Bay",
            "slug": "cannes-and-antibes-night-tour",
            "image": {
                "alt": "Cannes and Antibes Night Tour",
                "src": "https://res.cloudinary.com/drnf8u8vq/image/upload/v1737605324/nextravel/red-telephone-booth_lt9tej.jpg"
            },
            "locations": "Paris, France",
            "rating": 4,
            "featured": true,
            "reviews": 6,
            "price": {
                "currency": "USD",
                "amount": 60
            },
            "cancel_policy": "Free cancellation up to 24 hours before the activity starts",
            "description": "Experience the charm of Cannes and Antibes at night with a guided tour. Enjoy breathtaking views, historic landmarks, and vibrant nightlife while discovering the beauty of the French Riviera.",
            "duration": 3,
            "duration_unit": "hour",
            "gallery": [
                "https://res.cloudinary.com/drnf8u8vq/image/upload/v1737607159/nextravel/sydney-opera-house-near-body-of-water-during-daytime-1_fbgqyc.jpg",
                "https://res.cloudinary.com/drnf8u8vq/image/upload/c_fill,w_800/v1737801503/nextravel/blog/snow_village_y1rnpj.jpg",
                "https://res.cloudinary.com/drnf8u8vq/image/upload/c_fill,w_800/v1737802452/nextravel/blog/fuji_moutain_zlo1b3.jpg",
                "https://res.cloudinary.com/drnf8u8vq/image/upload/v1737802271/nextravel/blog/river_piyd67.jpg",
                "https://res.cloudinary.com/drnf8u8vq/image/upload/v1739255260/nextravel/safari_tour_ktychp.jpg"
            ],
            "options": [
                {
                    "id": 1,
                    "type": "Group tour",
                    "title": "Group tour",
                    "description": "Depart 03 times per a day",
                    "times": ["11:00 AM", "5:00 PM", "6:30 PM"],
                    "price": 30
                },
                {
                    "id": 2,
                    "type": "Private tour",
                    "title": "Private tour, start any time",
                    "description": "Start your private tour at any time of the day.",
                    "times": ["Flexible timing"],
                    "price": 38
                }
            ],
            "itineraries": [
                {
                    "id": 1,
                    "stopNumber": 0,
                    "title": "Jardin des Tuileries",
                    "description": "On your arrival at the meeting point, you can admire the Jardin des Tuileries which is located right by the Arc des Triomphe du Carroussel where you will meet your guide.",
                    "duration": "Pass By",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 2,
                    "stopNumber": 1,
                    "title": "Arc de Triomphe du Carrousel",
                    "description": "Meeting place prior to start the tour",
                    "duration": "10 minutes",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 3,
                    "stopNumber": 2,
                    "title": "Louvre Museum",
                    "description": "With our Reserved Access, you'll see all the Louvre Museum’s must-see attractions alongside under-appreciated treasures. From the legendary ‘Mona Lisa’ to the imposing ‘Winged Victory’, your passionate guide will reveal subtle details about the Louvre’s most well-known masterpieces. Then, venture deeper into the museum, to take in the best of the rest, including pieces from the golden age of French Romanticism.",
                    "duration": "2 hours 30 minutes",
                    "admission": "Admission Ticket Included"
                }
            ],
            "reviews_content": [
                {
                    id: 1,
                    author: "Greyson Decker",
                    avatar:
                        "https://res.cloudinary.com/drnf8u8vq/image/upload/c_pad,w_400/v1737656275/nextravel/travelers/pexels-pawan-yadav-1321878-2577274_v3fgsy.jpg",
                    title: "Clean Cabin, Good Service",
                    rating: 5,
                    description:
                        "The journey on the Lotus Train was characterized by a clean cabin and commendable service from the crew. The provision of hot and cold water for free was a valuable amenity. Our experience with VN Railway was smoother. Therefore, while the Lotus Train is appreciated for its cleanliness and service, improvements in the operation of the train could significantly enhance the overall experience.",
                    date: "2024-08-05T16:16:00",
                },
                {
                    id: 2,
                    author: "Grace Houston",
                    avatar:
                        "https://res.cloudinary.com/drnf8u8vq/image/upload/c_pad,w_400/v1737656270/nextravel/travelers/pexels-ionelceban-2577440_lpfpbd.jpg",
                    title: "Coastal to Capital: A Seamless Journey",
                    rating: 5,
                    description:
                        "The journey from Da Nang's coastal charm to the vibrant streets of Hanoi is made delightful aboard the Lotus Train. With commendable amenities and timely service, it's a travel experience that combines relaxation with the thrill of exploration.",
                    date: "2024-08-05T16:13:00",
                },
                {
                    id: 3,
                    author: "Lara Mcleod",
                    avatar:
                        "https://res.cloudinary.com/drnf8u8vq/image/upload/c_pad,w_400/v1737656271/nextravel/travelers/pexels-te-lensfix-380994-1371360_bu9hxg.jpg",
                    title: "Scenic Serenity on Rails",
                    rating: 5,
                    description:
                        "Traversing from the historic city of Hue to the bustling capital, Hanoi, the Lotus Train offers a harmonious blend of comfort and punctuality. The cabins are clean and well-equipped, ensuring a restful journey amidst the picturesque landscapes of Vietnam.",
                    date: "2024-08-05T16:12:00",
                },
                {
                    id: 4,
                    author: "Leonidas Roy",
                    avatar:
                        "https://res.cloudinary.com/drnf8u8vq/image/upload/c_pad,w_400/v1737656277/nextravel/travelers/pexels-vladbagacian-2819587_lprpt9.jpg",
                    title: "Clean and Comfortable Cabin Experience",
                    rating: 5,
                    description:
                        "We had a pleasant journey in a 4-person cabin, comfortably accommodating our group with two beds. The cabin was well-maintained and clean, enhancing our travel experience. Highly recommended for group travel.",
                    date: "2024-08-05T16:03:00",
                },
            ]
        },
        {
            "title": "Vincey and Toul Night Tour",
            "ariaLabel": "Vincey and Toul Night Tour",
            "slug": "vincey-and-toul-night-tour",
            "image": {
                "alt": "Private transfer from Hanoi to Ha Giang",
                "src": "https://res.cloudinary.com/drnf8u8vq/image/upload/v1737605686/nextravel/Venice_cldsgh.jpg"
            },
            "locations": "Venice, Italy",
            "rating": 5,
            "reviews": 9,
            "price": {
                "currency": "USD",
                "amount": 215
            },
            "description": "Uncover the enchanting streets of Vincey and Toul under the stars. This tour offers a blend of history, culture, and stunning architecture with an unforgettable nighttime atmosphere.",
            "duration": 5,
            "duration_unit": "hour",
            "itinerary": [
                {
                    "id": 1,
                    "stopNumber": 0,
                    "title": "St. Mark's Square",
                    "description": "Start your tour at the iconic St. Mark's Square, surrounded by stunning architecture and lively cafes.",
                    "duration": "30 minutes",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 2,
                    "stopNumber": 1,
                    "title": "Doge's Palace",
                    "description": "Explore the opulent Doge's Palace, a masterpiece of Gothic architecture, and learn about Venice's rich history.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Included"
                },
                {
                    "id": 3,
                    "stopNumber": 2,
                    "title": "Rialto Bridge",
                    "description": "Walk across the famous Rialto Bridge and enjoy panoramic views of the Grand Canal.",
                    "duration": "20 minutes",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 4,
                    "stopNumber": 3,
                    "title": "Gondola Ride",
                    "description": "End your evening with a romantic gondola ride through Venice's picturesque canals.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Included"
                }
            ]
        },
        {
            "title": "Discover Nha Trang Diving Tour",
            "ariaLabel": "Hanoi to Mai Chau by private car",
            "slug": "discover-nha-trang-diving-tour",
            "image": {
                "alt": "Hanoi to Mai Chau by private car",
                "src": "https://res.cloudinary.com/drnf8u8vq/image/upload/c_crop,ar_4:3/v1737605877/nextravel/aquairum_f72yqn.jpg"
            },
            "locations": "Nha Trang, Vietnam",
            "rating": 3,
            "reviews": 6,
            "featured": true,
            "price": {
                "currency": "USD",
                "amount": 125
            },
            "description": "Dive into the crystal-clear waters of Nha Trang and explore vibrant marine life. This tour is perfect for adventure seekers and nature lovers looking for an underwater experience.",
            "duration": 8,
            "duration_unit": "hour",
            "itinerary": [
                {
                    "id": 1,
                    "stopNumber": 0,
                    "title": "Hon Mun Marine Park",
                    "description": "Begin your diving adventure at Hon Mun Marine Park, known for its rich coral reefs and diverse marine life.",
                    "duration": "2 hours",
                    "admission": "Admission Ticket Included"
                },
                {
                    "id": 2,
                    "stopNumber": 1,
                    "title": "Hon Tre Island",
                    "description": "Relax on the pristine beaches of Hon Tre Island before heading back to the water for more diving.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 3,
                    "stopNumber": 2,
                    "title": "Underwater Cave Exploration",
                    "description": "Explore mysterious underwater caves teeming with marine creatures.",
                    "duration": "1 hour 30 minutes",
                    "admission": "Admission Ticket Included"
                },
                {
                    "id": 4,
                    "stopNumber": 3,
                    "title": "Seaside Restaurant Lunch",
                    "description": "Enjoy a delicious seafood lunch at a local seaside restaurant.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 5,
                    "stopNumber": 4,
                    "title": "Snorkeling Session",
                    "description": "Finish the day with a relaxing snorkeling session in shallow waters.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Free"
                }
            ]
        },
        {
            "title": "Dubai full day city tour",
            "ariaLabel": "Dubai city tour",
            "slug": "dubai-full-day-city-tour",
            "image": {
                "alt": "Dubai city tour",
                "src": "https://res.cloudinary.com/drnf8u8vq/image/upload/v1737606264/nextravel/dubai_xgjtjo.jpg"
            },
            "locations": "Dubai, United Arab Emirates",
            "rating": 5,
            "reviews": 6,
            "price": {
                "currency": "USD",
                "amount": 35
            },
            "description": "Discover the modern marvels of Dubai with a full-day city tour. From iconic skyscrapers to cultural landmarks, experience the vibrant blend of tradition and innovation.",
            "duration": 1,
            "duration_unit": "day",
            "itinerary": [
                {
                    "id": 1,
                    "stopNumber": 0,
                    "title": "Burj Khalifa",
                    "description": "Start your day with a visit to the world's tallest building, the Burj Khalifa, and enjoy breathtaking views from the observation deck.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Included"
                },
                {
                    "id": 2,
                    "stopNumber": 1,
                    "title": "Dubai Mall",
                    "description": "Explore the massive Dubai Mall, featuring luxury shopping, entertainment, and the famous dancing fountains.",
                    "duration": "1 hour 30 minutes",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 3,
                    "stopNumber": 2,
                    "title": "Palm Jumeirah",
                    "description": "Drive along the iconic Palm Jumeirah and take photos of the luxurious Atlantis Hotel.",
                    "duration": "30 minutes",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 4,
                    "stopNumber": 3,
                    "title": "Dubai Marina",
                    "description": "Take a stroll along the scenic Dubai Marina and enjoy the view of luxury yachts and skyscrapers.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Free"
                }
            ]
        },
        {
            "title": "Honolulu City Highlights Tour",
            "ariaLabel": "Dubai city tour",
            "slug": "dubai-full-day-city-tour",
            "image": {
                "alt": "Dubai city tour",
                "src": "https://res.cloudinary.com/drnf8u8vq/image/upload/v1739255468/nextravel/honolulu_wut943.jpg"
            },
            "locations": "Honolulu, Hawaii",
            "rating": 5,
            "reviews": 6,
            "price": {
                "currency": "USD",
                "amount": 35
            },
            "description": "Experience the vibrant charm of Honolulu with a guided tour through its iconic landmarks, sandy beaches, and cultural hotspots.",
            "duration": 1,
            "duration_unit": "day",
            "itinerary": [
                {
                    "id": 1,
                    "stopNumber": 0,
                    "title": "Burj Khalifa",
                    "description": "Start your day with a visit to the world's tallest building, the Burj Khalifa, and enjoy breathtaking views from the observation deck.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Included"
                },
                {
                    "id": 2,
                    "stopNumber": 1,
                    "title": "Dubai Mall",
                    "description": "Explore the massive Dubai Mall, featuring luxury shopping, entertainment, and the famous dancing fountains.",
                    "duration": "1 hour 30 minutes",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 3,
                    "stopNumber": 2,
                    "title": "Palm Jumeirah",
                    "description": "Drive along the iconic Palm Jumeirah and take photos of the luxurious Atlantis Hotel.",
                    "duration": "30 minutes",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 4,
                    "stopNumber": 3,
                    "title": "Dubai Marina",
                    "description": "Take a stroll along the scenic Dubai Marina and enjoy the view of luxury yachts and skyscrapers.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Free"
                }
            ]
        },
        {
            "title": "Safari Adventure Tour",
            "ariaLabel": "Dubai city tour",
            "slug": "dubai-full-day-city-tour",
            "image": {
                "alt": "Dubai city tour",
                "src": "https://res.cloudinary.com/drnf8u8vq/image/upload/t_blog1/v1739255260/nextravel/safari_tour_ktychp.jpg"
            },
            "locations": "Arusha, Tanzania",
            "rating": 5,
            "reviews": 6,
            "price": {
                "currency": "USD",
                "amount": 35
            },
            "description": "Embark on a thrilling safari adventure to witness stunning wildlife and breathtaking landscapes on a journey through the wild.",
            "duration": 1,
            "duration_unit": "day",
            "itinerary": [
                {
                    "id": 1,
                    "stopNumber": 0,
                    "title": "Burj Khalifa",
                    "description": "Start your day with a visit to the world's tallest building, the Burj Khalifa, and enjoy breathtaking views from the observation deck.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Included"
                },
                {
                    "id": 2,
                    "stopNumber": 1,
                    "title": "Dubai Mall",
                    "description": "Explore the massive Dubai Mall, featuring luxury shopping, entertainment, and the famous dancing fountains.",
                    "duration": "1 hour 30 minutes",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 3,
                    "stopNumber": 2,
                    "title": "Palm Jumeirah",
                    "description": "Drive along the iconic Palm Jumeirah and take photos of the luxurious Atlantis Hotel.",
                    "duration": "30 minutes",
                    "admission": "Admission Ticket Free"
                },
                {
                    "id": 4,
                    "stopNumber": 3,
                    "title": "Dubai Marina",
                    "description": "Take a stroll along the scenic Dubai Marina and enjoy the view of luxury yachts and skyscrapers.",
                    "duration": "1 hour",
                    "admission": "Admission Ticket Free"
                }
            ]
        }
    ]
};
export default tourData;
