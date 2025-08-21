import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface SimilarProductsProps {
  currentProductId: number;
  category: string;
}

const SimilarProducts = ({ currentProductId, category }: SimilarProductsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const similarProducts = products.filter(
    (p) => p.cuisines.includes(category) && p.id !== currentProductId
  );

  if (similarProducts.length === 0) {
    return null;
  }

  const slidesPerView = isMobile ? 2 : 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= similarProducts.length - slidesPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? similarProducts.length - slidesPerView : prev - 1
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Similar Products
          </h2>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
              disabled={similarProducts.length <= slidesPerView}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
              disabled={similarProducts.length <= slidesPerView}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {similarProducts.map((product) => (
              <div key={product.id} className={`${isMobile ? 'w-1/2' : 'w-1/4'} flex-shrink-0 px-2`}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;