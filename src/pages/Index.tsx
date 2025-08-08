import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductSection from "@/components/ProductSection";
import CallbackButton from "@/components/CallbackButton";
import ContactForm from "@/components/ContactForm";
import { Testimonial } from "@/components/ui/testimonial-card";
import Footer from "@/components/Footer";

const Index = () => {
  const themeDecorations = [
    {
      id: 1,
      title: "Simple Spiderman Theme Decoration",
      originalPrice: 1999,
      salePrice: 1699,
      rating: 5,
      image: "spider_man_theme.jpg",
      isNew: true
    },
    {
      id: 2,
      title: "Surprise Unicorn Birthday Wall Decoration",
      originalPrice: 2499,
      salePrice: 1999,
      rating: 4.9,
      image: "unicorn_theme.jpg"
    },
    {
      id: 3,
      title: "Elegant Boss Baby Theme Decoration",
      originalPrice: 2199,
      salePrice: 1799,
      rating: 4.5,
      image: "boss_baby_theme.jpg"
    },
    {
      id: 4,
      title: "Peppa Pig Birthday Theme Decoration",
      originalPrice: 1899,
      salePrice: 1599,
      rating: 4.6,
      image: "peppa_pig_theme.jpg"
    },
    {
      id: 5,
      title: "Cute Baby Shark Birthday Home Decoration",
      originalPrice: 2299,
      salePrice: 1899,
      rating: 4.9,
      image: "baby_shark_theme.jpg"
    },
    {
      id: 6,
      title: "Girls Lipstick Theme Birthday Decoration",
      originalPrice: 2099,
      salePrice: 1699,
      rating: 5,
      image: "girl_lipstick_theme.jpg"
    },
    {
      id: 7,
      title: "Cocomelon Cute Birthday Wall Decoration",
      originalPrice: 2399,
      salePrice: 1999,
      rating: 4.3,
      image: "cocomelon.jpg"
    },
    {
      id: 8,
      title: "Magical Unicorn Half Arch Balloon Decor",
      originalPrice: 3199,
      salePrice: 2699,
      rating: 5,
      image: "half_unicorn.jpg"
    }
  ];

  const houseWarmingDecorations = [
    {
      id: 9,
      title: "2BHK Budget Friendly Griha Pravesh Flower Decor",
      originalPrice: 5999,
      salePrice: 4999,
      rating: 4.8,
      image: "2bhk_housewarming.jpg"
    },
    {
      id: 10,
      title: "1BHK House Warming Flower Decoration",
      originalPrice: 4799,
      salePrice: 3999,
      rating: 4.6,
      image: "1bhk_housewarming.jpg"
    },
    {
      id: 11,
      title: "Yellow Marigold Garland Decor",
      originalPrice: 15999,
      salePrice: 12999,
      rating: 4.9,
      image: "marigold.jpg"
    },
    {
      id: 12,
      title: "2 BHK Griha Pravesh Decoration",
      originalPrice: 15999,
      salePrice: 12999,
      rating: 4.7,
      image: "griha.jpg"
    }
  ];

  const birthdayDecorations = [
    {
      id: 13,
      title: "Balloon Surprise",
      originalPrice: 1999,
      salePrice: 1499,
      rating: 5,
      image: "balloon.jpg",
      isNew: true
    },
    {
      id: 14,
      title: "Simple Superman Theme Decoration",
      originalPrice: 2199,
      salePrice: 1699,
      rating: 5,
      image: "superman.jpg"
    },
    {
      id: 15,
      title: "Pink Birthday Bedroom Decoration",
      originalPrice: 2299,
      salePrice: 1699,
      rating: 5,
      image: "pink.jpg"
    },
    {
      id: 16,
      title: "Mickey Mouse Birthday Theme Decoration",
      originalPrice: 2099,
      salePrice: 1699,
      rating: 4.6,
      image: "mickey.jpg"
    }
  ];

  const babyShowerDecorations = [
    {
      id: 17,
      title: "Blue Baby Shower Decoration Set",
      originalPrice: 3499,
      salePrice: 2799,
      rating: 4.8,
      image: "blue_boy.jpg",
      isNew: true
    },
    {
      id: 18,
      title: "Pink Baby Girl Shower Decor",
      originalPrice: 3299,
      salePrice: 2599,
      rating: 4.7,
      image: "girl_shower.jpg"
    },
    {
      id: 19,
      title: "Gender Neutral Baby Shower Setup",
      originalPrice: 3199,
      salePrice: 2499,
      rating: 4.9,
      image: "neutral.jpg"
    },
    {
      id: 20,
      title: "Elegant Baby Shower Backdrop",
      originalPrice: 2799,
      salePrice: 2199,
      rating: 4.5,
      image: "elegant.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      
      <ProductSection 
        title="Theme Decoration" 
        products={themeDecorations} 
      />
      
      <ProductSection 
        title="House Warming Decoration" 
        products={houseWarmingDecorations}
        bgColor="bg-secondary/30"
      />
      
      <ProductSection 
        title="Birthday Decoration" 
        products={birthdayDecorations} 
      />
      
      <ProductSection 
        title="Baby Shower Decoration" 
        products={babyShowerDecorations}
        bgColor="bg-accent/20"
      />
      
      <ContactForm />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              name="Sarah Johnson"
              role="Product Manager"
              company="Amazun"
              rating={5}
              image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&q=80"
              testimonial="This library has completely transformed how we build our UI components. The attention to detail and smooth animations make our application stand out. Highly recommended!"
            />
            <Testimonial
              name="John Doe"
              role="Software Engineer"
              company="Goggle"
              rating={4}
              image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&q=80"
              testimonial="The components are well documented and easy to customize. The code quality is top-notch and the support is excellent. I'm very happy with my purchase."
            />
            <Testimonial
              name="Emily Chen"
              role="UX Designer"
              company="Microsift"
              rating={5}
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&q=80"
              testimonial="The accessibility features and design system consistency are impressive. It's saved us countless hours in development time."
            />
          </div>
        </div>
      </section>
      <Footer />
      <CallbackButton />
    </div>
  );
};

export default Index;
