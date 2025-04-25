import { useEffect } from "react";
import { ParadoxContainer } from "@/components/ParadoxContainer";
import { Check } from "lucide-react";

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About ZenithPrompts</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to empower professionals and creators to harness the full potential of AI through expertly crafted prompts.
          </p>
        </div>
        
        <div className="bg-secondary/50 rounded-lg p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              ZenithPrompts was founded in 2023 by a team of AI researchers, prompt engineers, and industry professionals who recognized the transformative power of well-crafted prompts.
            </p>
            <p className="text-lg mb-4">
              After years of experimenting with AI systems and refining prompting techniques, we realized that the difference between an average AI response and an exceptional one often comes down to the quality of the prompt.
            </p>
            <p className="text-lg">
              We created ZenithPrompts to share our expertise and help others achieve consistently excellent results from AI systems across various professional and creative domains.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              We believe that prompt engineering is both an art and a science. Our mission is to democratize this powerful skill and make it accessible to everyone.
            </p>
            <p className="text-lg">
              Through our meticulously crafted prompt suites, we aim to empower individuals and organizations to leverage AI as a transformative tool for creation, problem-solving, and innovation.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-zenith-600 text-lg">✓</span>
                <span><strong>Excellence:</strong> We hold our prompt design to the highest standards.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zenith-600 text-lg">✓</span>
                <span><strong>Accessibility:</strong> We make advanced AI techniques available to all.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zenith-600 text-lg">✓</span>
                <span><strong>Innovation:</strong> We continuously refine our methods as AI evolves.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zenith-600 text-lg">✓</span>
                <span><strong>Empowerment:</strong> We enable users to achieve their goals through effective AI use.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zenith-600 text-lg">✓</span>
                <span><strong>Integrity:</strong> We are transparent about the capabilities and limitations of our products.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <ParadoxContainer>
          <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Why Choose ZenithPrompts</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-zenith-600/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-zenith-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Expert-Crafted Prompts</h3>
                      <p className="text-muted-foreground">Each prompt is meticulously designed and tested by AI specialists to ensure optimal results.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-zenith-600/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-zenith-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Continuous Updates</h3>
                      <p className="text-muted-foreground">Our prompts evolve with AI technology, ensuring you always have access to the most effective techniques.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-zenith-600/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-zenith-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Professional Support</h3>
                      <p className="text-muted-foreground">Get guidance from our expert team to maximize the effectiveness of your AI interactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-zenith-600/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-zenith-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Industry-Specific Solutions</h3>
                      <p className="text-muted-foreground">Tailored prompt suites designed for specific industries and use cases.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParadoxContainer>
      </div>
    </div>
  );
};

export default AboutPage;
