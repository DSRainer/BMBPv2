import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductSection from "@/components/ProductSection";
import CallbackButton from "@/components/CallbackButton";
import ContactForm from "@/components/ContactForm";
import { Testimonial } from "@/components/ui/testimonial-card";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

const Index = () => {
  const themeDecorations = products.filter(p => p.cuisines.includes("Themes"));
  const houseWarmingDecorations = products.filter(p => p.cuisines.includes("House Warming"));
  const birthdayDecorations = products.filter(p => p.cuisines.includes("Birthday"));
  const babyShowerDecorations = products.filter(p => p.cuisines.includes("Baby Shower"));

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
