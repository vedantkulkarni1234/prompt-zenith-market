
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import { PromptSuite } from "@/types";

export default function FeaturedSuites({ suites }: { suites: PromptSuite[] }) {
  const { addItem } = useCart();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Premium Prompt Suites</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each suite contains 50 meticulously crafted prompts designed for specific use cases and industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suites.slice(0, 3).map((suite) => (
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
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/suites/${suite.slug}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild className="border-zenith-600 text-zenith-600 hover:bg-zenith-50">
            <Link to="/suites">View All Suites</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
