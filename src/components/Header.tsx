import { Search, ShoppingCart, User, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      name: "Birthday",
      dropdownItems: [
        { title: "Kids Birthday", description: "Fun themes for children", icon: "🎂" },
        { title: "Adult Birthday", description: "Elegant celebrations", icon: "🎉" },
        { title: "Birthday Themes", description: "Popular party themes", icon: "🎈" },
        { title: "Birthday Packages", description: "Complete decoration sets", icon: "🎁" }
      ]
    },
    {
      name: "Decorations",
      dropdownItems: [
        { title: "Balloon Decorations", description: "Colorful balloon arrangements", icon: "🎈" },
        { title: "Flower Decorations", description: "Fresh flower arrangements", icon: "🌸" },
        { title: "Light Decorations", description: "LED and string lights", icon: "✨" },
        { title: "Backdrop Decorations", description: "Custom backdrops", icon: "🎨" }
      ]
    },
    {
      name: "Festival Decorations",
      dropdownItems: [
        { title: "Diwali Decorations", description: "Traditional festival lights", icon: "🪔" },
        { title: "Christmas Decorations", description: "Holiday cheer", icon: "🎄" },
        { title: "Holi Decorations", description: "Colorful festival setup", icon: "🎨" },
        { title: "Eid Decorations", description: "Islamic festival themes", icon: "🌙" }
      ]
    },
    {
      name: "Corporate Planner",
      dropdownItems: [
        { title: "Corporate Events", description: "Professional event planning", icon: "🏢" },
        { title: "Team Building", description: "Team activities and decor", icon: "👥" },
        { title: "Product Launches", description: "Launch event decorations", icon: "🚀" },
        { title: "Conferences", description: "Conference hall setup", icon: "🎤" }
      ]
    },
    {
      name: "Occasions",
      dropdownItems: [
        { title: "Wedding Decorations", description: "Beautiful wedding themes", icon: "💒" },
        { title: "Anniversary Celebrations", description: "Romantic anniversary decor", icon: "💕" },
        { title: "Baby Shower", description: "Adorable baby shower themes", icon: "👶" },
        { title: "House Warming", description: "Traditional griha pravesh", icon: "🏠" }
      ]
    }
  ];

  const handleDropdownEnter = (categoryName: string) => {
    setActiveDropdown(categoryName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/BMBP-Trademark-Transparent.png" alt="BMBP Logo" className="w-10 h-20" />
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by event, birthday, party..."
              className="pl-10 bg-gray-50 border-gray-200 focus:ring-red-500 focus:border-red-500 rounded-full"
            />
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Mumbai</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mb-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by event, birthday, party..."
            className="pl-10 bg-gray-50 border-gray-200 focus:ring-red-500 focus:border-red-500 rounded-full"
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3 mb-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 justify-start">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 justify-start">
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50 justify-start">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Mumbai</span>
              </Button>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-2 py-3 border-t border-gray-100">
          {navigationItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleDropdownEnter(item.name)}
              onMouseLeave={handleDropdownLeave}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-red-600 hover:bg-red-50 font-medium flex items-center gap-1"
              >
                {item.name}
                <ChevronDown className="w-4 h-4" />
              </Button>
              
              {/* Desktop Dropdown */}
              {activeDropdown === item.name && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-3">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <span className="text-2xl">{dropdownItem.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-900">{dropdownItem.title}</h4>
                            <p className="text-sm text-gray-600">{dropdownItem.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-3 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-red-600 hover:bg-red-50 font-medium justify-start w-full"
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    <span className="flex-1 text-left">{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  {/* Mobile Dropdown */}
                  {activeDropdown === item.name && (
                    <div className="ml-4 space-y-2">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
                        >
                          <span className="text-xl">{dropdownItem.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{dropdownItem.title}</h4>
                            <p className="text-xs text-gray-600">{dropdownItem.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;