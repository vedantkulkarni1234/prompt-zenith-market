
import { useEffect } from "react";

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
        
        <div className="bg-secondary/50 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <p className="text-lg mb-8">
              ZenithPrompts brings together talent from diverse backgrounds including AI research, content creation, education, software development, and business strategy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-zenith-200 mx-auto mb-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold">Alex Morgan</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-zenith-200 mx-auto mb-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold">Jennifer Wu</h3>
                <p className="text-sm text-muted-foreground">Lead Prompt Engineer</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-zenith-200 mx-auto mb-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold">Marcus Chen</h3>
                <p className="text-sm text-muted-foreground">Product Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
