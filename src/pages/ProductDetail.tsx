import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Share2, Heart, Phone, MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import SimilarProducts from "@/components/SimilarProducts";
import CustomizationModal from "@/components/CustomizationModal";

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [isCustomizationModalOpen, setIsCustomizationModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data - in real app, fetch based on id
  const venue = {
    id: parseInt(id || "1"),
    name: "Berco's Test",
    location: "Shop Name, Block o1, Block O, Sector 12, Noida, Uttar Pradesh 201301",
    rating: 4.2,
    reviews: "5,686 reviews",
    pricePerPax: "₹1050.00",
    cuisines: ["Decoration", "Themes"],
    description: "Berco's is a specialty restaurant with a dimly lit dining space. The chefs pamper various dishes to make sure the diners meet the nirvana of savory and tasty. Every dish in the menu is of the finest taste and do not burn a hole in your pocket. The a-la-carte primarily features Chinese and Thai cuisines. The well-trained staff also tries its best to provide the diners with quick services. It is a perfect place for family gathering and fun get-together with friends over a lunch or dinner table. Berco's is located in Indirapuram, Ghaziabad.",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800"
    ],
    amenities: [
      "Parking",
      "Clean And Well Maintained Restrooms", 
      "Pleasant Dining Atmosphere For Families",
      "Comfortable Seating Arrangements",
      "Air Conditioned",
      "Light Background Music",
      "Take-Out / Delivery Services",
      "Soothing Decor And Ambience"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary">{venue.name}</span>
        </nav>

        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold text-foreground">{venue.name}</h1>
              <Button size="icon" variant="ghost">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{venue.location}</span>
            </div>
          </div>
          
                      <div className="text-right">
              <div className="text-2xl font-bold text-primary mb-2">{venue.pricePerPax}</div>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white w-full mb-3"
                onClick={() => setIsCustomizationModalOpen(true)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>

              <div className="mt-3">
                <Badge variant="secondary" className="mr-2">{venue.cuisines[0]}</Badge>
                <Badge variant="secondary">{venue.cuisines[1]}</Badge>
              </div>
            </div>
        </div>

        {/* Main Image Gallery */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <img 
              src={venue.images[0]} 
              alt={venue.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img 
              src={venue.images[1]} 
              alt={venue.name}
              className="w-full h-44 object-cover rounded-lg"
            />
            <div className="relative">
              <img 
                src={venue.images[2]} 
                alt={venue.name}
                className="w-full h-44 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <Button variant="secondary">View all 8 Images</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
          <TabsList className="grid w-full grid-cols-6 mb-8 hover:bg-red-500 text-black">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="packages">Party Packages</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="rules">Property Rules</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {venue.description}
              </p>
              <h3 className="text-2xl font-bold text-black mb-4">
                From Steaming Dimsums To Sizzling Sizzlers, Soul-Warming Soups, And A Tantalizing Array Of Cocktails, Every Dish Is Carefully Curated By Passionate Culinary Experts. Whether Dining At One Of Berco's Vibrant Outlets Or Enjoying A Meal At Home, Customers Can Trust Berco's To Deliver The Finest Dining Experience Where Each Bite Is A Testament To Quality And Excellence.
              </h3>
            </div>

            {/* Party Packages Preview */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">PARTY PACKAGES</h3>
              <div className="border border-primary/20 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Party Package</h4>
                <p className="text-muted-foreground mb-4">
                  2 x Soft Drinks/ 2 x Soup/ 3 x Starter/ 2 x Noodles/ 2 x Non-Veg Maincourse/1 x Dessert
                </p>
                <div className="text-primary font-semibold mb-3">Free Cancellation</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>Min.Pax : 12</span>
                  <span>|</span>
                  <span>Valid On : All Days</span>
                  <span>|</span>
                  <span>Timings : 11:00AM - 05:00PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground line-through">₹1050</span>
                    <span className="text-xl font-bold">₹1050 / Pax++</span>
                    <Badge variant="destructive" className="ml-2">0% Off</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Menu</Button>
                    <Button variant="outline">Details</Button>
                    <Button 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => setIsCustomizationModalOpen(true)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="packages">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">PARTY PACKAGES</h2>
              <div className="border border-primary/20 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Party Package</h4>
                <p className="text-muted-foreground mb-4">
                  2 x Soft Drinks/ 2 x Soup/ 3 x Starter/ 2 x Noodles/ 2 x Non-Veg Maincourse/1 x Dessert
                </p>
                <div className="text-primary font-semibold mb-3">Free Cancellation</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>Min.Pax : 12</span>
                  <span>|</span>
                  <span>Valid On : All Days</span>
                  <span>|</span>
                  <span>Timings : 11:00AM - 05:00PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground line-through">₹1050</span>
                    <span className="text-xl font-bold">₹1050 / Pax++</span>
                    <Badge variant="destructive" className="ml-2">0% Off</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Menu</Button>
                    <Button variant="outline">Details</Button>
                    <Button 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => setIsCustomizationModalOpen(true)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="menu">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">À LA CARTE MENU</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Food Menu</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Steamed Wontons</span>
                      <span className="font-semibold">₹325</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fried Dumpling Dice</span>
                      <span className="font-semibold">₹285</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hot N Sour</span>
                      <span className="font-semibold">₹165</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lemon Coriander</span>
                      <span className="font-semibold">₹165</span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Mocktails</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Fruit Beer</span>
                      <span className="font-semibold">₹185</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mojito</span>
                      <span className="font-semibold">₹175</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Passion Fruit Cooler</span>
                      <span className="font-semibold">₹175</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pink Lemonade</span>
                      <span className="font-semibold">₹175</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="amenities">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">AMENITIES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {venue.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="location">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">LOCATION</h2>
              <p className="text-lg text-muted-foreground mb-6">{venue.location}</p>
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rules">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">PROPERTY RULES</h2>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <p>Arms and ammunition are not allowed inside the premises.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p>Do not sit at tables that are already reserved.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p>Outside food and beverages are not allowed.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p>Parking is available. Guests are requested to park only in authorized and dedicated parking areas of the venue.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p>Pets are not allowed on the premises.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Similar Products Section */}
      <SimilarProducts />
      
      {/* Customization Modal */}
      <CustomizationModal 
        isOpen={isCustomizationModalOpen}
        onClose={() => setIsCustomizationModalOpen(false)}
      />
    </div>
  );
};

export default ProductDetail;