
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zenith-600 text-white relative overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-xl"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your AI Experience?
          </h2>
          
          <p className="text-xl text-zenith-100 max-w-3xl mx-auto mb-10">
            Join thousands of professionals who've elevated their AI interactions with our premium prompt engineering suites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-zenith-800 hover:bg-zenith-100 px-8 py-6 text-lg">
              <Link to="/suites">Browse All Suites</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
          
          <p className="mt-8 text-zenith-200">
            30-day satisfaction guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
