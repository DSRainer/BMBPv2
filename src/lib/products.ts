
export interface Product {
  id: number;
  title: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  image: string;
  isNew?: boolean;
  description: string;
  images: string[];
  amenities: string[];
  reviews: string;
  cuisines: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Simple Spiderman Theme Decoration",
    originalPrice: 1999,
    salePrice: 1699,
    rating: 5,
    image: "/spider_man_theme.jpg",
    isNew: true,
    description: "A simple yet elegant Spiderman theme decoration for your kid's birthday party. Includes balloons, banners, and cutouts.",
    images: [
      "/spider_man_theme.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Balloons",
      "Banners",
      "Cutouts",
      "Tablecloth",
      "Plates and Cups"
    ],
    reviews: "120 reviews",
    cuisines: ["Decoration", "Themes"],
  },
  {
    id: 2,
    title: "Surprise Unicorn Birthday Wall Decoration",
    originalPrice: 2499,
    salePrice: 1999,
    rating: 4.9,
    image: "/unicorn_theme.jpg",
    description: "A beautiful unicorn-themed wall decoration to surprise your little one. Perfect for creating a magical atmosphere.",
    images: [
      "/unicorn_theme.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Unicorn Banner",
      "Pastel Balloons",
      "Fairy Lights",
      "Tassels",
      "Photo Booth Props"
    ],
    reviews: "98 reviews",
    cuisines: ["Decoration", "Themes"],
  },
  {
    id: 3,
    title: "Elegant Boss Baby Theme Decoration",
    originalPrice: 2199,
    salePrice: 1799,
    rating: 4.5,
    image: "/boss_baby_theme.jpg",
    description: "A sophisticated Boss Baby theme decoration for a stylish birthday celebration. Includes everything you need for a memorable party.",
    images: [
      "/boss_baby_theme.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Briefcase Prop",
      "Black and White Balloons",
      "Custom Banner",
      "Cupcake Toppers",
      "Themed Tableware"
    ],
    reviews: "75 reviews",
    cuisines: ["Decoration", "Themes"],
  },
  {
    id: 4,
    title: "Peppa Pig Birthday Theme Decoration",
    originalPrice: 1899,
    salePrice: 1599,
    rating: 4.6,
    image: "/peppa_pig_theme.jpg",
    description: "A fun and colorful Peppa Pig theme decoration for your child's special day. Oink oink!",
    images: [
      "/peppa_pig_theme.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Peppa Pig Cutouts",
      "Muddy Puddle Decals",
      "Pink and Blue Balloons",
      "Happy Birthday Banner",
      "Themed Napkins"
    ],
    reviews: "88 reviews",
    cuisines: ["Decoration", "Themes"],
  },
  {
    id: 5,
    title: "Cute Baby Shark Birthday Home Decoration",
    originalPrice: 2299,
    salePrice: 1899,
    rating: 4.9,
    image: "/baby_shark_theme.jpg",
    description: "Doo doo doo doo doo doo! A cute Baby Shark theme decoration that will have everyone singing along.",
    images: [
      "/baby_shark_theme.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Shark Family Cutouts",
      "Under the Sea Backdrop",
      "Blue and Yellow Balloons",
      "Seaweed Streamers",
      "Fish Nets"
    ],
    reviews: "150 reviews",
    cuisines: ["Decoration", "Themes"],
  },
  {
    id: 6,
    title: "Girls Lipstick Theme Birthday Decoration",
    originalPrice: 2099,
    salePrice: 1699,
    rating: 5,
    image: "/girl_lipstick_theme.jpg",
    description: "A chic and glamorous lipstick-themed decoration for the little fashionista in your life.",
    images: [
      "/girl_lipstick_theme.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Lipstick Balloon",
      "Pink and Gold Decorations",
      "Makeup-themed Banner",
      "Glittery Cutouts",
      "Fashionable Tableware"
    ],
    reviews: "65 reviews",
    cuisines: ["Decoration", "Themes"],
  },
  {
    id: 7,
    title: "Cocomelon Cute Birthday Wall Decoration",
    originalPrice: 2399,
    salePrice: 1999,
    rating: 4.3,
    image: "/cocomelon.jpg",
    description: "Bring the world of Cocomelon to life with this adorable and colorful wall decoration.",
    images: [
      "/cocomelon.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "JJ and Friends Cutouts",
      "Rainbow Balloon Arch",
      "Musical Notes Decorations",
      "Customizable Banner",
      "Themed Plates and Cups"
    ],
    reviews: "92 reviews",
    cuisines: ["Decoration", "Themes"],
  },
  {
    id: 8,
    title: "Magical Unicorn Half Arch Balloon Decor",
    originalPrice: 3199,
    salePrice: 2699,
    rating: 5,
    image: "/half_unicorn.jpg",
    description: "Create a magical entrance with this stunning half arch balloon decoration in a unicorn theme.",
    images: [
      "/half_unicorn.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Pastel Balloon Arch",
      "Unicorn Foil Balloon",
      "Glittery Stars",
      "Ribbons and Tassels",
      "Easy to Assemble Kit"
    ],
    reviews: "110 reviews",
    cuisines: ["Decoration", "Themes"],
  },
  {
    id: 9,
    title: "2BHK Budget Friendly Griha Pravesh Flower Decor",
    originalPrice: 5999,
    salePrice: 4999,
    rating: 4.8,
    image: "/2bhk_housewarming.jpg",
    description: "A beautiful and budget-friendly flower decoration for your new 2BHK home's Griha Pravesh ceremony.",
    images: [
      "/2bhk_housewarming.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Marigold Garlands",
      "Toran for Main Door",
      "Flower Rangoli",
      "Decorative Diyas",
      "Fresh Flowers for Puja"
    ],
    reviews: "85 reviews",
    cuisines: ["House Warming", "Flower Decoration"],
  },
  {
    id: 10,
    title: "1BHK House Warming Flower Decoration",
    originalPrice: 4799,
    salePrice: 3999,
    rating: 4.6,
    image: "/1bhk_housewarming.jpg",
    description: "Welcome prosperity and happiness into your new 1BHK home with this elegant flower decoration.",
    images: [
      "/1bhk_housewarming.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Mixed Flower Garlands",
      "Mango Leaves Toran",
      "Swastik Rangoli",
      "Scented Candles",
      "Rose Petals for Puja"
    ],
    reviews: "70 reviews",
    cuisines: ["House Warming", "Flower Decoration"],
  },
  {
    id: 11,
    title: "Yellow Marigold Garland Decor",
    originalPrice: 15999,
    salePrice: 12999,
    rating: 4.9,
    image: "/marigold.jpg",
    description: "A traditional and auspicious yellow marigold garland decoration for all your festive needs.",
    images: [
      "/marigold.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Fresh Marigold Garlands",
      "Customizable Length",
      "Long-lasting Freshness",
      "Perfect for Pooja, Weddings, and Festivals",
      "Handcrafted by Experts"
    ],
    reviews: "200 reviews",
    cuisines: ["House Warming", "Flower Decoration"],
  },
  {
    id: 12,
    title: "2 BHK Griha Pravesh Decoration",
    originalPrice: 15999,
    salePrice: 12999,
    rating: 4.7,
    image: "/griha.jpg",
    description: "A complete Griha Pravesh decoration package for your new 2BHK home. Includes everything you need for a beautiful ceremony.",
    images: [
      "/griha.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Main Door Decoration",
      "Pooja Room Decoration",
      "Hall and Balcony Decoration",
      "Flower Rangoli",
      "Welcome Board"
    ],
    reviews: "130 reviews",
    cuisines: ["House Warming", "Flower Decoration"],
  },
  {
    id: 13,
    title: "Balloon Surprise",
    originalPrice: 3999,
    salePrice: 3299,
    rating: 5,
    image: "/balloon.jpg",
    isNew: true,
    description: "Surprise your loved ones with a room full of balloons! Perfect for birthdays, anniversaries, and other special occasions.",
    images: [
      "/balloon.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "200 Balloons",
      "Customizable Colors",
      "Helium or Air-filled",
      "Delivery and Setup",
      "Add-ons available"
    ],
    reviews: "300 reviews",
    cuisines: ["Birthday", "Decoration"],
  },
  {
    id: 14,
    title: "Simple Superman Theme Decoration",
    originalPrice: 5199,
    salePrice: 3699,
    rating: 5,
    image: "/superman.jpg",
    description: "It's a bird, it's a plane, it's a Superman-themed birthday party! A simple yet powerful decoration for your little superhero.",
    images: [
      "/superman.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Superman Logo Banner",
      "Red, Blue, and Yellow Balloons",
      "Cityscape Backdrop",
      "Kryptonite Crystals (props)",
      "Superhero Cape for the Birthday Boy"
    ],
    reviews: "95 reviews",
    cuisines: ["Birthday", "Decoration"],
  },
  {
    id: 15,
    title: "Pink Birthday Bedroom Decoration",
    originalPrice: 4299,
    salePrice: 3699,
    rating: 5,
    image: "/pink.jpg",
    description: "Transform your bedroom into a pink paradise with this beautiful and elegant birthday decoration.",
    images: [
      "/pink.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Pink and White Balloons",
      "Fairy Lights",
      "Happy Birthday Banner",
      "Rose Petals",
      "Scented Candles"
    ],
    reviews: "115 reviews",
    cuisines: ["Birthday", "Decoration"],
  },
  {
    id: 16,
    title: "Mickey Mouse Birthday Theme Decoration",
    originalPrice: 6099,
    salePrice: 4699,
    rating: 4.6,
    image: "/mickey.jpg",
    description: "Hot dog, hot dog, hot diggity dog! A classic Mickey Mouse theme decoration for a fun-filled birthday party.",
    images: [
      "/mickey.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Mickey Mouse Ears Banner",
      "Red, Black, and Yellow Balloons",
      "Polka Dot Tablecloth",
      "Mickey-shaped Confetti",
      "Clubhouse-inspired Cutouts"
    ],
    reviews: "80 reviews",
    cuisines: ["Birthday", "Decoration"],
  },
  {
    id: 17,
    title: "Blue Baby Shower Decoration Set",
    originalPrice: 5499,
    salePrice: 4799,
    rating: 4.8,
    image: "/blue_boy.jpg",
    isNew: true,
    description: "Welcome the little prince with this adorable blue-themed baby shower decoration set.",
    images: [
      "/blue_boy.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "It's a Boy Banner",
      "Blue and White Balloons",
      "Baby Bottle Centerpieces",
      "Themed Cupcake Toppers",
      "Mom-to-be Sash"
    ],
    reviews: "90 reviews",
    cuisines: ["Baby Shower", "Decoration"],
  },
  {
    id: 18,
    title: "Pink Baby Girl Shower Decor",
    originalPrice: 6299,
    salePrice: 5599,
    rating: 4.7,
    image: "/girl_shower.jpg",
    description: "A beautiful and elegant pink-themed baby shower decoration to welcome the little princess.",
    images: [
      "/girl_shower.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "It's a Girl Banner",
      "Pink and Gold Balloons",
      "Floral Centerpieces",
      "Themed Cupcake Toppers",
      "Mom-to-be Tiara"
    ],
    reviews: "82 reviews",
    cuisines: ["Baby Shower", "Decoration"],
  },
  {
    id: 19,
    title: "Gender Neutral Baby Shower Setup",
    originalPrice: 6199,
    salePrice: 5499,
    rating: 4.9,
    image: "/neutral.jpg",
    description: "A stylish and modern gender-neutral baby shower setup, perfect for surprising the parents-to-be.",
    images: [
      "/neutral.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Oh Baby Banner",
      "White and Green Balloons",
      "Eucalyptus Garlands",
      "Wooden Blocks Centerpieces",
      "Mom-to-be Sash"
    ],
    reviews: "105 reviews",
    cuisines: ["Baby Shower", "Decoration"],
  },
  {
    id: 20,
    title: "Elegant Baby Shower Backdrop",
    originalPrice: 10999,
    salePrice: 9890,
    rating: 4.5,
    image: "/elegant.jpg",
    description: "Create a stunning photo booth with this elegant baby shower backdrop. Perfect for capturing memories.",
    images: [
      "/elegant.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Customizable Backdrop",
      "Flower Wall",
      "Fairy Lights",
      "Photo Booth Props",
      "Easy to set up"
    ],
    reviews: "78 reviews",
    cuisines: ["Baby Shower", "Decoration"],
  },
  {
    id: 21,
    title: "Mickey Mouse Mascot",
    originalPrice: 2599,
    salePrice: 2299,
    rating: 4.8,
    image: "/mickey_mascot.jpg",
    isNew: true,
    description: "A fun and friendly Mickey Mouse mascot to entertain your guests.",
    images: [
      "/mickey.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Mascot Costume",
      "Interaction with Guests",
      "Photo Opportunities",
      "Energetic Performance",
      "Music and Dancing"
    ],
    reviews: "150 reviews",
    cuisines: ["Mascots"],
  },
  {
    id: 22,
    title: "Creative Mascot",
    originalPrice: 2799,
    salePrice: 2499,
    rating: 4.9,
    image: "/mascot.jpg",
    description: "Your friendly neighborhood Spiderman mascot, ready to swing into your party.",
    images: [
      "/spider_man_theme.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Mascot Costume",
      "Interaction with Guests",
      "Photo Opportunities",
      "Energetic Performance",
      "Music and Dancing"
    ],
    reviews: "180 reviews",
    cuisines: ["Mascots"],
  },
  {
    id: 23,
    title: "Unicorn Mascot",
    originalPrice: 2699,
    salePrice: 2399,
    rating: 4.7,
    image: "/unicorn_mascot.jpg",
    description: "The Man of Steel is here to make your party super!",
    images: [
      "/superman.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Mascot Costume",
      "Interaction with Guests",
      "Photo Opportunities",
      "Energetic Performance",
      "Music and Dancing"
    ],
    reviews: "160 reviews",
    cuisines: ["Mascots"],
  },
  {
    id: 24,
    title: "Sassy Mascot",
    originalPrice: 2499,
    salePrice: 2199,
    rating: 4.6,
    image: "/mascot2.jpg",
    description: "The boss is in the house! Get ready for some serious fun with the Boss Baby mascot.",
    images: [

      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Mascot Costume",
      "Interaction with Guests",
      "Photo Opportunities",
      "Energetic Performance",
      "Music and Dancing"
    ],
    reviews: "140 reviews",
    cuisines: ["Mascots"],
  }
];
