
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
    features: ['Balloon Decor', 'Game Host', 'Tattoo Artist', 'Cleaner'],
  },
  {
    name: 'Gold',
    price: 15999,
    features: ['Balloon Decor', 'Game Host', 'Tattoo Artist', 'Cleaner', 'Magician', 'Reel Maker'],
  },
  {
    name: 'Diamond',
    price: 26999,
    features: ['Balloon Decor', 'Game Host', 'Tattoo Artist', 'Cleaner', 'Magician', 'Reel Maker', 'Backdrop', 'Speaker & Mic Combo'],
  },
  {
    name: 'Platinum',
    price: 38999,
    features: ['Balloon Decor', 'Game Host', 'Tattoo Artist', '2 x Cleaners', 'Magician', 'Reel Maker', 'Backdrop', 'Speaker & Mic Combo', 'Aesthetics'],
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
      <DialogContent className="w-[90vw] max-h-[80vh] overflow-y-auto md:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold">Choose Your Perfect Package</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-1 md:p-4">
          {packages.map((pkg) => (
            <div key={pkg.name} className="border p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-lg md:text-xl mb-2 text-primary">{pkg.name}</h3>
                <p className="font-bold text-xl md:text-2xl mb-4">₹{pkg.price.toLocaleString()}</p>
                <div className="space-y-2 mb-4">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center text-xs md:text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="mt-auto w-full text-sm md:text-base" onClick={() => onSelectPackage(pkg)}>
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
