import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface SimilarProduct {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
}

const SimilarProducts = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const similarProducts: SimilarProduct[] = [
    {
      id: 1,
      name: "Masti Zone (EDM Mall)",
      location: "Plot No, 1, Kaushambi Rd, Anand Vihar, Kaushambi, Ghaziabad, Uttar Pradesh",
      price: "₹550.00 / PAX",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Masti Zone (Shipra Mall)",
      location: "2nd Floor, Shipra mall, Vaibhav Khand, Indirapuram, Ghaziabad, Uttar Pradesh",
      price: "₹550.00 / PAX",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Timezone Vegas Mall Delhi",
      location: "2nd Floor, Plot no 6, North, Pocket 1, Sector 14 Dwarka, Dwarka, Delhi",
      price: "₹1500.00 / PAX",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Timezone Pacific, The Mall of Faridabad",
      location: "Level 4, Pacific Mall, Bus Terminal, BK Chowk, Aravalli Golf Course, Faridabad",
      price: "₹1200.00 / PAX",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= similarProducts.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? similarProducts.length - 1 : prev - 1
    );
  };

  const handleCardClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            SIMILAR PRODUCTS
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleCardClick(product.id)}
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 w-8 h-8 bg-white/80 hover:bg-white rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle favorite functionality
                    }}
                  >
                    <Heart className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.location}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(product.id);
                      }}
                    >
                      View Venue
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts; 