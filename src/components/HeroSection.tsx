
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zenith-500/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-60 h-60 bg-zenith-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-zenith-600/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block">Elevate Your AI Interactions with</span>
            <span className="block gradient-text">Premium Prompt Engineering</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            Five expertly crafted prompt suites with 50 templates each, designed to transform your AI conversations into powerful tools for creation, problem-solving, and innovation.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-zenith-600 hover:bg-zenith-700 px-8 py-6 text-lg">
              <Link to="/suites">Explore Suites</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-zenith-600 text-zenith-600 hover:bg-zenith-50 px-8 py-6 text-lg">
              <Link to="/samples">View Samples</Link>
            </Button>
          </div>
          
          {/* Featured badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 items-center">
            <div className="bg-secondary py-2 px-4 rounded-full text-sm font-medium text-foreground/80">Trusted by 500+ Companies</div>
            <div className="bg-secondary py-2 px-4 rounded-full text-sm font-medium text-foreground/80">4.9/5 Star Rating</div>
            <div className="bg-secondary py-2 px-4 rounded-full text-sm font-medium text-foreground/80">30-Day Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </div>
  );
}
