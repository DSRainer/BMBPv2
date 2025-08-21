import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Share2, Heart, ShoppingCart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import SimilarProducts from "@/components/SimilarProducts";
import { products, Product } from "@/lib/products";
import NotFound from "./NotFound";
import { useCart } from "@/context/CartContext";
import CustomizationModal from "@/components/CustomizationModal";
import PackageSelector from "@/components/PackageSelector";
import { AddOn } from "@/components/CustomizationModal";


interface Package {
  name: string;
  price: number;
  features: string[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isPackageSelectorOpen, setIsPackageSelectorOpen] = useState(false);
  const [isCustomizationModalOpen, setIsCustomizationModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((p) => p.id === parseInt(id || ""));

  if (!product) {
    return <NotFound />;
  }

  const { title, originalPrice, salePrice, rating, image, description, amenities, reviews, cuisines } = product;
  const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsPackageSelectorOpen(false);
    setIsCustomizationModalOpen(true);
  };

  const handleAddToCart = (product: Product, addOns: AddOn[]) => {
    addToCart(product, addOns, selectedPackage);
    setIsCustomizationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary">{title}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={image} alt={title} className="w-full h-auto object-cover rounded-lg mb-4" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-700">{rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({reviews})</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-primary">₹{salePrice.toLocaleString()}</span>
              {originalPrice > salePrice && (
                <span className="text-xl text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
              )}
              {discount > 0 && (
                <Badge variant="destructive">{discount}% OFF</Badge>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tags</h3>
              <div className="flex gap-2">
                {cuisines.map((cuisine, index) => (
                  <Badge key={index} variant="secondary">{cuisine}</Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Button size="lg" className="bg-primary hover:bg-green-500 text-white w-full" onClick={() => {
                setSelectedProduct(product);
                setIsPackageSelectorOpen(true);
              }}>
                <Package className="w-5 h-5 mr-2" />
                Choose your Package
              </Button>
              <Button size="lg" className="bg-primary hover:bg-green-500 text-white w-full" onClick={() => {
                setSelectedProduct(product);
                setIsCustomizationModalOpen(true);
              }}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Go A La Carte
              </Button>
              <Button size="icon" variant="ghost">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SimilarProducts currentProductId={product.id} category={product.cuisines[0]} />

      <PackageSelector
        isOpen={isPackageSelectorOpen}
        onClose={() => setIsPackageSelectorOpen(false)}
        onSelectPackage={handleSelectPackage}
      />

      {selectedProduct && (
        <CustomizationModal
          isOpen={isCustomizationModalOpen}
          onClose={() => setIsCustomizationModalOpen(false)}
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          selectedPackage={selectedPackage}
        />
      )}
    </div>
  );
};

export default ProductDetail;
