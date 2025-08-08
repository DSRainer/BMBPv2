import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    id: 1,
    title: "Create the",
    title2: "Decoration of",
    title3: "Your Dreams",
    subtitle: "For every special occasion",
    bgGradient: "from-pink-100 via-pink-200 to-pink-300",
    bgPattern: "bg-pink-50",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop",
    buttonText: "Book Now",
    textColor: "text-red-600",
    accentColor: "bg-red-600"
  },
  {
    id: 2,
    title: "Make The",
    title2: "Happiest Memories",
    subtitle: "With Us",
    bgGradient: "from-blue-100 via-blue-200 to-blue-300",
    bgPattern: "bg-blue-50",
    image: "carousel3.jpg",
    buttonText: "Book Now",
    textColor: "text-blue-600",
    accentColor: "bg-blue-600"
  },
  {
    id: 3,
    title: "Live a",
    title2: "Fun Night",
    subtitle: "with our Artists",
    bgGradient: "from-purple-100 via-pink-200 to-purple-300",
    bgPattern: "bg-purple-50",
    image: "carousel2.PNG",
    buttonText: "Book Now",
    textColor: "text-purple-600",
    accentColor: "bg-gradient-to-r from-pink-400 to-purple-400"
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <div className="relative w-full h-full">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / heroSlides.length)}%)`,
            width: `${heroSlides.length * 100}%`
          }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-full h-full relative flex items-center ${slide.bgPattern}`}
              style={{ 
                width: `${100 / heroSlides.length}%`,
                minWidth: `${100 / heroSlides.length}%`
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, ${slide.textColor.replace('text-', '')} 2px, transparent 2px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="container mx-auto px-4 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                  {/* Text Content */}
                  <div className="text-center lg:text-left space-y-6">
                    <div className="space-y-2">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 drop-shadow-lg">
                        <span className={`${slide.textColor} block`}>{slide.title}</span>
                        {slide.title2 && (
                          <span className={`${slide.textColor} block`}>{slide.title2}</span>
                        )}
                        {slide.title3 && (
                          <span className={`${slide.textColor} block`}>{slide.title3}</span>
                        )}
                      </h1>
                      <p className={`text-lg md:text-xl ${slide.textColor} opacity-80 font-medium`}>
                        {slide.subtitle}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button 
                        size="lg" 
                        className={`${slide.accentColor} text-white hover:opacity-90 font-semibold px-8 py-4 rounded-full shadow-lg text-lg`}
                      >
                        {slide.buttonText}
                      </Button>
                      
                      {/* Star decorations */}
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Floating decorative elements */}
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/80 rounded-full shadow-lg animate-bounce"></div>
                      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/60 rounded-full shadow-lg animate-bounce delay-100"></div>
                      <div className="absolute top-1/2 -right-6 w-4 h-4 bg-white/70 rounded-full shadow-lg animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-gray-200 text-gray-600 shadow-lg z-20 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-gray-200 text-gray-600 shadow-lg z-20 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-red-500 w-8"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;