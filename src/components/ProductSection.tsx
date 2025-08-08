import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  image: string;
  isNew?: boolean;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  bgColor?: string;
}

const ProductSection = ({ title, products, bgColor = "bg-background" }: ProductSectionProps) => {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
          <Button variant="outline" className="flex items-center gap-2 group">
            <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              originalPrice={product.originalPrice}
              salePrice={product.salePrice}
              rating={product.rating}
              image={product.image}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;