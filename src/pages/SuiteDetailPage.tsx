
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, ChevronLeft, Check } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { getPromptSuiteBySlug } from "@/data/prompt-suites";
import { PromptSuite } from "@/types";

const SuiteDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [suite, setSuite] = useState<PromptSuite | null>(null);
  const navigate = useNavigate();
  const { addItem, isInCart } = useCart();
  
  useEffect(() => {
    if (slug) {
      const foundSuite = getPromptSuiteBySlug(slug);
      if (foundSuite) {
        setSuite(foundSuite);
      } else {
        navigate("/not-found");
      }
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug, navigate]);
  
  if (!suite) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="animate-pulse text-2xl">Loading suite details...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0">
            <Link to="/suites">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Suites
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Image and Purchase Options */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-zenith-100 to-zenith-300 dark:from-zenith-900 dark:to-zenith-700 rounded-lg p-12 flex items-center justify-center mb-8">
              <img 
                src={suite.image} 
                alt={suite.name} 
                className="w-48 h-48 object-contain" 
              />
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold">${suite.price}</span>
                  <span className="text-muted-foreground ml-2">USD</span>
                </div>
                {suite.originalPrice && (
                  <span className="text-muted-foreground line-through">
                    ${suite.originalPrice}
                  </span>
                )}
              </div>
              
              <Button 
                className="w-full bg-zenith-600 hover:bg-zenith-700 mb-4"
                size="lg"
                onClick={() => addItem(suite)}
                disabled={isInCart(suite.id)}
              >
                {isInCart(suite.id) ? (
                  <>
                    <Check className="mr-2 h-5 w-5" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                  </>
                )}
              </Button>
              
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-zenith-600" />
                  <span>50 premium prompts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-zenith-600" />
                  <span>Downloadable as PDF and editable files</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-zenith-600" />
                  <span>Lifetime access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-zenith-600" />
                  <span>Free future updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-zenith-600" />
                  <span>30-day money-back guarantee</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Column - Suite Details */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h1 className="text-4xl font-bold">{suite.name}</h1>
              <Badge variant="secondary" className="bg-zenith-100 text-zenith-800 text-sm">
                {suite.category}
              </Badge>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8">
              {suite.shortDescription}
            </p>
            
            <Tabs defaultValue="description" className="mb-10">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="samples">Sample Prompts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-base leading-relaxed">{suite.fullDescription}</p>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Use Case Example</h3>
                  <div className="bg-secondary p-6 rounded-lg">
                    <p className="text-base">{suite.useCase}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <ul className="space-y-4">
                  {suite.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-zenith-100 dark:bg-zenith-900/40 text-zenith-600 rounded-full p-1 mt-0.5">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="samples" className="mt-6">
                <div className="space-y-6">
                  {suite.samplePrompts.map((prompt, index) => (
                    <div key={index} className="bg-secondary p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-2">Sample {index + 1}</h4>
                      <p className="text-base italic">"{prompt}"</p>
                    </div>
                  ))}
                  <p className="text-muted-foreground text-sm mt-4">
                    Note: These are just 3 examples from the suite of 50 prompts.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
            
            <Separator className="my-10" />
            
            <div>
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">How are the prompts delivered?</h4>
                  <p className="text-muted-foreground">
                    After purchase, you'll receive immediate access to download the prompt suite in both PDF and editable formats. You'll also have access to any future updates.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Can I use these prompts with any AI platform?</h4>
                  <p className="text-muted-foreground">
                    Yes, our prompts are designed to work with all major AI platforms including GPT-4, Claude, Gemini, and others. Each prompt includes platform-specific optimization notes where relevant.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Can I customize the prompts for my specific needs?</h4>
                  <p className="text-muted-foreground">
                    Absolutely! All prompts are designed with customization in mind. We provide clear instructions on how to modify key variables while maintaining the effectiveness of the prompt structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuiteDetailPage;
