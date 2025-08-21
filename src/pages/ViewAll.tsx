import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { products, Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import NotFound from "./NotFound";
import Filter from "@/components/Filter";

const ViewAll = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({ minPrice: "", maxPrice: "", rating: "" });

  if (!category) {
    return <NotFound />;
  }

  const decodedCategory = decodeURIComponent(category);

  const allProducts = [...products];

  // Add more products for demonstration
  if (decodedCategory === "Theme Decoration") {
    allProducts.push(
      { id: 101, title: "Jungle Safari Theme", originalPrice: 5000, salePrice: 4500, rating: 4.9, image: "/public/spider_man_theme.jpg", isNew: true, description: "", amenities: [], reviews: "0", cuisines: ["Themes"] },
      { id: 102, title: "Under the Sea Theme", originalPrice: 5500, salePrice: 5000, rating: 4.8, image: "/public/peppa_pig_theme.jpg", isNew: false, description: "", amenities: [], reviews: "0", cuisines: ["Themes"] },
      { id: 103, title: "Space Adventure Theme", originalPrice: 6000, salePrice: 5500, rating: 4.9, image: "/public/boss_baby_theme.jpg", isNew: true, description: "", amenities: [], reviews: "0", cuisines: ["Themes"] }
    );
  } else if (decodedCategory === "House Warming Decoration") {
    allProducts.push(
      { id: 201, title: "Traditional Decor", originalPrice: 4000, salePrice: 3500, rating: 4.8, image: "/public/marigold.jpg", isNew: true, description: "", amenities: [], reviews: "0", cuisines: ["House Warming"] },
      { id: 202, title: "Modern Minimalist Decor", originalPrice: 4500, salePrice: 4000, rating: 4.9, image: "/public/griha.jpg", isNew: false, description: "", amenities: [], reviews: "0", cuisines: ["House Warming"] }
    );
  }

  const simplifiedCategory = decodedCategory.replace(" Decoration", "");

  useEffect(() => {
    let productsToFilter = allProducts.filter((p) => {
      if (simplifiedCategory === "Theme") {
        return p.cuisines.includes("Themes");
      }
      return p.cuisines.some(cuisine => simplifiedCategory.toLowerCase().includes(cuisine.toLowerCase()));
    });

    if (filters.minPrice) {
      productsToFilter = productsToFilter.filter(p => p.salePrice >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      productsToFilter = productsToFilter.filter(p => p.salePrice <= parseInt(filters.maxPrice));
    }
    if (filters.rating) {
      productsToFilter = productsToFilter.filter(p => p.rating >= parseFloat(filters.rating));
    }

    setFilteredProducts(productsToFilter);
  }, [filters, simplifiedCategory]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters({ minPrice: "", maxPrice: "", rating: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary">{decodedCategory}</span>
        </nav>
        <h1 className="text-3xl font-bold text-foreground mb-6">{decodedCategory}</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <Filter onFilterChange={handleFilterChange} onClearFilters={handleClearFilters} />
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
