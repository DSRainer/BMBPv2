import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  title: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  image: string;
  isNew?: boolean;
}

const ProductCard = ({ id, title, originalPrice, salePrice, rating, image, isNew }: ProductCardProps) => {
  const navigate = useNavigate();
  const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-xl shadow-sm transition-all cursor-pointer border border-gray-200 overflow-hidden flex flex-col"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-56 object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <h3 className="font-medium text-gray-800 text-base text-center mb-2 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-gray-900">₹{salePrice.toLocaleString()}</span>
          {originalPrice > salePrice && (
            <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium text-gray-700">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;