
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from '@/hooks/use-cart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-zenith-600 to-zenith-800 bg-clip-text text-transparent">
                ZenithPrompts
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/suites" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                Prompt Suites
              </Link>
              <Link to="/about" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-zenith-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            <Button variant="default" size="sm" className="ml-4 bg-zenith-600 hover:bg-zenith-700">
              Sign In
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative p-2 mr-2">
              <ShoppingCart className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-zenith-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/suites" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Prompt Suites
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button 
              variant="default" 
              size="sm" 
              className="mt-4 w-full bg-zenith-600 hover:bg-zenith-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
