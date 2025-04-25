
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      content: "These prompt suites have completely transformed my content creation process. I'm saving hours each day and producing better quality work.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      content: "As a software developer, the Technical Suite has been invaluable for helping me debug code and solve complex programming problems.",
      author: "David Chen",
      role: "Senior Developer",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      content: "The Educational Suite provides amazing value for teachers. My students are more engaged and I'm able to create customized learning materials in minutes.",
      author: "Michelle Rodriguez",
      role: "High School Teacher",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thousands of professionals rely on our prompt suites to enhance their AI interactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-sm overflow-visible">
              <CardContent className="pt-8 pb-6 px-6 relative">
                {/* Quotation mark */}
                <div className="absolute -top-4 left-6 bg-zenith-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-xl font-serif">
                  "
                </div>
                
                <p className="mb-6 text-foreground/90 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
