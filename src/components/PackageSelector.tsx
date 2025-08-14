
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';

interface Package {
  name: string;
  price: number;
  features: string[];
}

const packages: Package[] = [
  {
    name: 'Silver',
    price: 9999,
    features: ['2000 for Balloon Decor', '4000 for a Game Host', '1500 for a Tattoo Artist', '1000 for a Cleaner'],
  },
  {
    name: 'Gold',
    price: 15999,
    features: ['2000 for Balloon Decor', '4000 for a Game Host', '1500 for a Tattoo Artist', '1000 for a Cleaner', '4000 for a Magician', '2000 for a Reel Maker'],
  },
  {
    name: 'Diamond',
    price: 26999,
    features: ['2000 for Balloon Decor', '4000 for a Game Host', '1500 for a Tattoo Artist', '1000 for a Cleaner', '4000 for a Magician', '2000 for a Reel Maker', 'Backdrop for 8000', 'Speaker, Mic combo for 2500'],
  },
  {
    name: 'Platinum',
    price: 38999,
    features: ['2000 for Balloon Decor', '4000 for a Game Host', '1500 for a Tattoo Artist', '2000 for 2 Cleaners', '4000 for a Magician', '2000 for a Reel Maker', 'Backdrop for 8000', 'Speaker, Mic combo for 2500', 'Aesthetics for 10000'],
  },
];

interface PackageSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (pkg: Package) => void;
}

const PackageSelector: React.FC<PackageSelectorProps> = ({ isOpen, onClose, onSelectPackage }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Choose Your Perfect Package</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {packages.map((pkg) => (
            <div key={pkg.name} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-xl mb-2 text-primary">{pkg.name}</h3>
                <p className="font-bold text-2xl mb-4">₹{pkg.price.toLocaleString()}</p>
                <div className="space-y-2 mb-4">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="mt-auto w-full" onClick={() => onSelectPackage(pkg)}>
                Select Package
              </Button>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PackageSelector;
