import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import testimonialBg from "@/assets/testimonial-bg.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Prospera Finance Limited has been an invaluable partner in our growth journey. Their customised financial solutions and exceptional service have helped us overcome complex challenges and consistently achieve our business objectives.",
      author: "Amie Oluwaseyi Angela",
      position: "CEO, La Kusine",
      title: "Trusted Growth Partner",
    },
    {
      quote: "Prospera Finance has quickly become a trusted partner in our business journey. Their expertise in financial management and planning has enabled us to make informed decisions and achieve sustainable growth.",
      author: "Umeobi Stanley Ikenna",
      position: "CEO, Cadast",
      title: "Driving Informed Decisions",
    },
    {
      quote: "I was truly impressed by the professionalism and expertise of the Prospera Finance Limited team. They offered us a flexible, affordable financing solution tailored to our unique needs.",
      author: "Mr. Misheal Ike Chukwuma",
      position: "CEO, Nevaeh Travel & Tour",
      title: "Flexible Support",
    },
    {
      quote: "Prospera Finance Limited has been a game-changer for our business. Their innovative financial solutions have helped us optimize cash flow, cut costs, and boost profitability.",
      author: "Mr. Tochukwu Emmanuel Chukwuma",
      position: "CEO, Emmatobest Trading Ventures",
      title: "Innovative Solutions",
    },
    {
      quote: "Partnering with Prospera Finance Limited has made a real difference in our business. Their customised financial support and dedicated service have given us the confidence to tackle challenges.",
      author: "Mrs. Angela John",
      position: "CEO, Angelahub Limited",
      title: "Empowering Businesses",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[50vh] sm:h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={testimonialBg} alt="Success Stories" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 z-10 relative">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-background mb-4">Success Stories</h1>
            <p className="text-lg sm:text-xl text-background/90">Our greatest pride comes from the success of our clients</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in-up hover:shadow-medium transition-all" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 sm:p-8">
                  <Quote className="h-10 w-10 sm:h-12 sm:w-12 text-primary/20 mb-4" />
                  <h3 className="font-black text-lg sm:text-xl mb-4 text-primary">{testimonial.title}</h3>
                  <p className="text-muted-foreground mb-6 text-base sm:text-lg leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-base sm:text-lg text-foreground">{testimonial.author}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <Button asChild size="lg">
              <Link to="/contact">Start Your Success Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
