import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Mail, User, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
  type: 'addon' | 'activity';
}

interface CartData {
  venue: {
    name: string;
    location: string;
    pricePerPax: string;
    image: string;
  };
  items: CartItem[];
}

const Cart = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    address: "",
    specialRequests: ""
  });

  // Mock cart data - in real app, this would come from state management
  const cartData: CartData = {
    venue: {
      name: "Berco's Test",
      location: "Shop Name, Block o1, Block O, Sector 12, Noida, Uttar Pradesh 201301",
      pricePerPax: "₹1050.00",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
    },
    items: [
      {
        id: "rectangle-arch",
        title: "Rectangle Arch",
        description: "Rectangle arch of 200 balloons as per your choice of balloon colors",
        price: "₹1499",
        quantity: 1,
        type: 'addon'
      },
      {
        id: "game-host",
        title: "Game Host",
        description: "1 Experienced Male emcee, Emcee involves kids and adults in games",
        price: "₹3899",
        quantity: 1,
        type: 'activity'
      }
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateSubtotal = () => {
    const venuePrice = parseFloat(cartData.venue.pricePerPax.replace('₹', '').replace(',', ''));
    const itemsTotal = cartData.items.reduce((sum, item) => {
      const itemPrice = parseFloat(item.price.replace('₹', '').replace(',', ''));
      return sum + (itemPrice * item.quantity);
    }, 0);
    return venuePrice + itemsTotal;
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.18; // 18% GST
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleRemoveItem = (itemId: string) => {
    // In real app, this would update the cart state
    console.log('Remove item:', itemId);
  };

  const handleQuantityChange = (itemId: string, change: number) => {
    // In real app, this would update the cart state
    console.log('Update quantity:', itemId, change);
  };

  const handleProceedToPayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // In real app, this would redirect to payment gateway
      console.log('Proceeding to payment...');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/product/1" className="hover:text-primary">{cartData.venue.name}</Link>
          <span>/</span>
          <span className="text-primary">Cart</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border p-4 sm:p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Booking Details</h2>
              
              <form className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Guests *</label>
                      <Input
                        name="guests"
                        type="number"
                        value={formData.guests}
                        onChange={handleInputChange}
                        placeholder="Number of guests"
                        min="1"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Event Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Date *</label>
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Time *</label>
                      <Input
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Delivery Address
                  </h3>
                  <div>
                    <label className="block text-sm font-medium mb-2">Address *</label>
                    <Textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address"
                      rows={3}
                      required
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Special Requests</h3>
                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Notes</label>
                    <Textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Any special requests or instructions..."
                      rows={3}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-4 sm:p-6 sticky top-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
              
              {/* Venue Details */}
              <div className="border-b pb-4 mb-4">
                <div className="flex gap-3">
                  <img
                    src={cartData.venue.image}
                    alt={cartData.venue.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{cartData.venue.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{cartData.venue.location}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">Base Package</span>
                      <span className="text-sm font-semibold">{cartData.venue.pricePerPax}</span>
                    </div>
                  </div>
                </div>
              </div>

                             {/* Cart Items */}
               <div className="space-y-3 mb-4">
                 {cartData.items.map((item) => (
                   <div key={item.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border">
                    <div className="flex-1">
                                             <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                           <h4 className="font-medium text-sm">{item.title}</h4>
                           <Badge variant="secondary" className="text-xs">
                             {item.type === 'addon' ? 'Add-on' : 'Activity'}
                           </Badge>
                         </div>
                         <Button
                           variant="ghost"
                           size="sm"
                           onClick={() => handleRemoveItem(item.id)}
                           className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                         >
                           <Trash2 className="w-3 h-3" />
                         </Button>
                       </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={item.quantity === 1}
                            className="w-6 h-6 p-0"
                          >
                            -
                          </Button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="w-6 h-6 p-0"
                          >
                            +
                          </Button>
                        </div>
                        <span className="text-sm font-semibold">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>GST (18%)</span>
                  <span>₹{calculateTax().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span>₹{calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90" 
                  onClick={handleProceedToPayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Proceed to Payment"}
                </Button>
                <Button variant="outline" className="w-full" onClick={() => navigate('/product/1')}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </div>

              {/* Security Notice */}
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs">Secure payment powered by Razorpay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 