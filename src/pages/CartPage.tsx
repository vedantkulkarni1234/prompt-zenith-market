
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2, ChevronLeft, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/components/ui/use-toast";

const CartPage = () => {
  const { items, removeItem, clearCart, cartTotal } = useCart();
  const { toast } = useToast();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    // In a real implementation, this would redirect to a checkout page or payment processor
    toast({
      title: "Checkout initiated",
      description: "This is a demo. In a real app, you would be redirected to a secure payment page.",
    });
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0">
            <Link to="/suites">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ShoppingCart className="h-8 w-8" /> Your Cart
          </h1>
          {items.length > 0 && (
            <Button variant="outline" onClick={clearCart} className="text-muted-foreground">
              Clear Cart
            </Button>
          )}
        </div>
        
        {items.length === 0 ? (
          <div className="text-center py-16 bg-secondary/50 rounded-lg">
            <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Discover our premium prompt suites and add them to your cart.
            </p>
            <Button asChild className="bg-zenith-600 hover:bg-zenith-700">
              <Link to="/suites">Browse Suites</Link>
            </Button>
          </div>
        ) : (
          <div>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-secondary/50">
                <div className="grid grid-cols-12 text-sm font-medium">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3 text-right">Price</div>
                  <div className="col-span-3 text-right">Actions</div>
                </div>
              </div>
              
              {items.map((item) => (
                <div key={item.id} className="px-6 py-4 border-b border-border last:border-b-0">
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center">
                        <img src={item.image} alt={item.name} className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category} Suite</p>
                      </div>
                    </div>
                    <div className="col-span-3 text-right font-bold">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="col-span-3 text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove {item.name} from cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-card border border-border rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Subtotal</span>
                <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold">${cartTotal.toFixed(2)} USD</span>
              </div>
              
              <Button 
                className="w-full bg-zenith-600 hover:bg-zenith-700"
                size="lg"
                onClick={handleCheckout}
              >
                <CreditCard className="mr-2 h-5 w-5" /> Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
