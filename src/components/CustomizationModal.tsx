import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Minus, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Product } from "@/lib/products";
import { AddOn } from "@/context/CartContext";

interface AddOnItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  quantity: number;
  isAdded: boolean;
}

interface ActivityItem {
  id: string;
  title: string;
  description: string[];
  price: string;
  image: string;
  isAdded: boolean;
  detailedDescription?: {
    features: string[];
    exclusions?: string[];
  };
}

interface CustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onAddToCart: (product: Product, addOns: AddOn[], selectedPackage: Package | null) => void;
  selectedPackage: Package | null;
}



const CustomizationModal = ({ isOpen, onClose, product, onAddToCart, selectedPackage }: CustomizationModalProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("addons");
  const [selectedCategory, setSelectedCategory] = useState("entrance-arch");
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [addOnItems, setAddOnItems] = useState<AddOnItem[]>([
    {
      id: "rectangle-arch",
      title: "Rectangle Arch",
      description: "Rectangle arch of 200 balloons as per your choice of balloon colors",
      price: "₹2499",
      image: "/balloon.jpg",
      quantity: 1,
      isAdded: false,
    },
    {
      id: "u-shaped-arch",
      title: "U shaped Entrance Arch",
      description: "U shaped entrance arch of 200 balloons as per your choice of balloon colors",
      price: "₹2299",
      image: "/balloon.jpg",
      quantity: 0,
      isAdded: false,
    },
    {
      id: "l-shaped-arch",
      title: "L Shaped Arch",
      description: "L shaped arch of 100 balloons as per your choice of balloon colors",
      price: "₹1999",
      image: "/balloon.jpg",
      quantity: 0,
      isAdded: false,
    },
    {
      id: "curve-arch",
      title: "Curve Arch",
      description: "Curve arch of 100 balloons as per your choice of balloon colors",
      price: "₹2099",
      image: "/balloon.jpg",
      quantity: 0,
      isAdded: false,
    },
  ]);

  const [activityItems, setActivityItems] = useState<ActivityItem[]>([
    {
      id: "magician",
      title: "Magician",
      description: [
        "A magician to perform on the stage",
        "Magician perform various fun magic tricks to engage the kids and adults on the stage"
      ],
      price: "₹4599",
      image: "/balloon.jpg",
      isAdded: false,
      detailedDescription: {
        features: [
          "A magician to perform on the stage",
          "Magician perform various fun magic tricks to engage the kids and adults on the stage",
          "Performance duration will be 30 min to 45 min",
          "All the magic show items and props carried by the magician",
          "Music tracks will be carried by the magician in mobile or pen drive (customer need to arrange the sound system to play this)"
        ],
        exclusions: ["Sound System and Mic"]
      }
    },
    {
      id: "charlie-chaplin",
      title: "Charlie Chaplin",
      description: [
        "A Person with Charlie Chaplin costume",
        "An Artist will be available for 3 hrs."
      ],
      price: "₹5500",
      image: "/balloon.jpg",
      isAdded: false,
      detailedDescription: {
        features: [
          "A Person with Charlie Chaplin costume",
          "An Artist will be available for 3 hrs.",
          "Complete Charlie Chaplin costume and makeup",
          "Interactive performances with guests",
          "Photo opportunities with guests"
        ]
      }
    },
    {
      id: "game-host",
      title: "Game Host",
      description: [
        "1 Experienced Male emcee",
        "Emcee involves kids and adults in games"
      ],
      price: "₹3899",
      image: "/balloon.jpg",
      isAdded: false,
      detailedDescription: {
        features: [
          "1 Experienced Male emcee",
          "Emcee involves kids and adults in games",
          "Professional microphone and sound equipment",
          "Interactive games and activities",
          "Crowd engagement and entertainment"
        ]
      }
    },
    {
      id: "tattoo-artist",
      title: "Tattoo Artist",
      description: [
        "The Artist has been in this field for 12 years.",
        "The artist will arrive 5 mins before the party begins."
      ],
      price: "₹3999",
      image: "/balloon.jpg",
      isAdded: false,
      detailedDescription: {
        features: [
          "The Artist has been in this field for 12 years.",
          "The artist will arrive 5 mins before the party begins.",
          "Creative Tattoos and Makeup",
          "Balloon art and face painting",
          "Interactive performances and games"
        ]
      }
    },
    {
      id: "cleaner",
      title: "Cleaner",
      description: [
        "A Cleaner to clean up after the conclusion of celebrations",
      ],
      price: "₹2000",
      image: "/balloon.jpg",
      isAdded: false,
      detailedDescription: {
        features: [
          "A Cleaner to cleanup",
          "Uses effective Cleaning Methods according to the need",
          "Cleaning will be done at the end",
        ],
        exclusions: ["Pet Mess and Puke"]
      }
    },
    {
      id: "reelmaker",
      title: "Reel Maker",
      description: [
        "An individual assigned to document all your moments",
      ],
      price: "₹4000",
      image: "/balloon.jpg",
      isAdded: false,
      detailedDescription: {
        features: [
          "An individual to capture all your moments",
          "Uses various Social Media Trends",
          "Will be available at request during the event",
        ],
        exclusions: []
      }
    },
    {
      id: "mascot",
      title: "Mascot",
      description: [
        "The Artist has been in this field for 12 years.",
        "The artist will arrive 30 mins before the party begins."
      ],
      price: "₹3999",
      image: "/balloon.jpg",
      isAdded: false,
      detailedDescription: {
        features: [
          "The Artist has been in this field for 12 years.",
          "The artist will arrive 30 mins before the party begins.",
          "Complete costume and headgear",
          "Interactive performances and games"
        ]
      }
    }
  ]);

  useEffect(() => {
    if (selectedPackage) {
      const packageFeatures = selectedPackage.features.map(f => f.toLowerCase());
      setActivityItems(prev => prev.map(item => ({
        ...item,
        isAdded: packageFeatures.some(feature => feature.includes(item.title.toLowerCase()))
      })));
      setAddOnItems(prev => prev.map(item => {
        if (item.id === "curve-arch") {
          return { ...item, isAdded: true, quantity: 1 };
        }
        return { ...item, isAdded: false, quantity: 0 };
      }));
    } else {
        setActivityItems(prev => prev.map(item => ({
            ...item,
            isAdded: false
        })));
        setAddOnItems(prev => prev.map(item => ({
            ...item,
            isAdded: false,
            quantity: 0
        })));
    }
  }, [selectedPackage]);

  const addOnCategories = [
    "entrance-arch",
    "cake-tables",
    "foil-balloons",
    "shape-foil-balloons",
    "foil-curtains",
    "led-lights",
    "occassion-foil-balloons",
    "occassion-buntings",
    "ceiling-decor"
  ];

  const handleQuantityChange = (itemId: string, change: number) => {
    setAddOnItems(prev => prev.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(0, item.quantity + change);
        return {
          ...item,
          quantity: newQuantity,
          isAdded: newQuantity > 0
        };
      }
      return item;
    }));
  };

  const handleActivityToggle = (itemId: string) => {
    setActivityItems(prev => prev.map(item => {
      if (item.id === itemId) {
        return { ...item, isAdded: !item.isAdded };
      }
      return item;
    }));
  };

  const handleAddToCartClick = () => {
    const selectedAddOns: AddOn[] = addOnItems
      .filter((item) => item.isAdded)
      .map((item) => ({
        id: item.id,
        title: item.title,
        price: parseInt(item.price.replace("₹", "")),
        quantity: item.quantity,
      }));

    const selectedActivities: AddOn[] = activityItems
      .filter(item => item.isAdded)
      .map(item => ({
        id: item.id,
        title: item.title,
        price: parseInt(item.price.replace("₹", "")),
        quantity: 1
      }));

    onAddToCart(product, [...selectedAddOns, ...selectedActivities], selectedPackage);
  };

  const handleProceedToCheckout = () => {
    handleAddToCartClick();
    navigate("/cart");
  };

  const handleReadMore = (activity: ActivityItem) => {
    setSelectedActivity(activity);
  };

  const handleCloseOverlay = () => {
    setSelectedActivity(null);
  };

  

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              Additional Customization
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="addons">Add-Ons</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>

            <TabsContent value="addons" className="flex-1 overflow-hidden flex flex-col">
              {/* Category Navigation */}
              <div className="flex-shrink-0 mb-4">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {addOnCategories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="whitespace-nowrap flex-shrink-0"
                    >
                      {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Add-On Items */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOnItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.description}
                          </p>
                          {item.isAdded && (
                            <div className="flex items-center gap-1 text-green-600 text-sm mb-2">
                              <Check className="w-4 h-4" />
                              <span>Added</span>
                            </div>
                          )}
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-lg">{item.price}</span>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuantityChange(item.id, -1)}
                                disabled={item.quantity === 0}
                                className="w-8 h-8 p-0"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuantityChange(item.id, 1)}
                                className="w-8 h-8 p-0"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="activities" className="flex-1 flex flex-col">
              {/* Activity Items */}
              <div className="max-h-[calc(100vh-250px)] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activityItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <div className="space-y-1 mb-3">
                            {item.description.map((desc, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-muted-foreground">{desc}</p>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-lg">{item.price}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm">Add</span>
                              <div
                                className={`w-12 h-6 rounded-full transition-colors cursor-pointer ${
                                  item.isAdded ? "bg-blue-600" : "bg-gray-300"
                                }`}
                                onClick={() => handleActivityToggle(item.id)}
                              >
                                <div className={`w-4 h-4 bg-white rounded-full transition-transform transform ${
                                  item.isAdded ? "translate-x-6" : "translate-x-1"
                                } mt-1`} />
                              </div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <button
                              onClick={() => handleReadMore(item)}
                              className="text-red-600 text-sm hover:text-red-700 font-medium"
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 pt-4 border-t">
          <div className="flex gap-4 justify-end">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="bg-red-600 hover:bg-red-700" onClick={handleAddToCartClick}>
              Add to Cart
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    {/* Activity Detail Overlay */}
    <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto m-4">
        <DialogHeader>
          <DialogTitle>Additional Add-Ons</DialogTitle>
        </DialogHeader>
        {selectedActivity && (
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-lg mb-4">{selectedActivity.title}</h3>
              <div className="space-y-3">
                {selectedActivity.detailedDescription?.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{feature}</p>
                  </div>
                ))}
                
                {selectedActivity.detailedDescription?.exclusions && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-red-600 mb-2">Not Included:</h4>
                    {selectedActivity.detailedDescription.exclusions.map((exclusion, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{exclusion}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handleCloseOverlay}
                className="px-4 py-2 border border-red-500 text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  </>
  );
};

export default CustomizationModal; 