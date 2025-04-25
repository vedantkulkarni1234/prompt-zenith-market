import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import BackgroundScene from '@/components/BackgroundScene';
import ParadoxContainer from '@/components/ParadoxContainer';
import { PromptSuite } from '@/types';

const SuitesPage = () => {
  const { addItem, isInCart } = useCart();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackgroundScene />
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <ParadoxContainer>
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-fade-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Premium Prompt Suites
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our collection of meticulously crafted prompt suites designed to transform your AI interactions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promptSuites.map((suite) => (
                <Card key={suite.id} className="overflow-hidden card-hover border-2 border-border">
                  <div className="h-48 bg-gradient-to-br from-zenith-100 to-zenith-300 dark:from-zenith-900 dark:to-zenith-700 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={suite.image} 
                        alt={suite.name} 
                        className="w-24 h-24 object-contain" 
                      />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{suite.name}</CardTitle>
                      <Badge variant="secondary" className="bg-zenith-100 text-zenith-800">
                        {suite.category}
                      </Badge>
                    </div>
                    <CardDescription>{suite.shortDescription}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {suite.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-zenith-600 text-lg">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-baseline justify-between mt-4">
                      <div>
                        <span className="text-2xl font-bold">${suite.price}</span>
                        <span className="text-muted-foreground ml-1">USD</span>
                      </div>
                      {suite.originalPrice && (
                        <span className="text-muted-foreground line-through">
                          ${suite.originalPrice}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col gap-3">
                    <Button 
                      className="w-full bg-zenith-600 hover:bg-zenith-700"
                      onClick={() => addItem(suite)}
                      disabled={isInCart(suite.id)}
                    >
                      {isInCart(suite.id) ? (
                        "Added to Cart"
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </>
                      )}
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/suites/${suite.slug}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </ParadoxContainer>
      </div>
    </>
  );
};

export default SuitesPage;
