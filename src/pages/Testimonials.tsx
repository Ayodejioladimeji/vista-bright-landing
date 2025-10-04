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
      quote:
        "Prospera Finance Limited has been an invaluable partner in our growth journey. Their customised financial solutions and exceptional service have helped us overcome complex challenges and consistently achieve our business objectives.",
      author: "Amie Oluwaseyi Angela",
      position: "CEO, La Kusine",
      title: "Trusted Growth Partner",
    },
    {
      quote:
        "Prospera Finance has quickly become a trusted partner in our business journey. Their expertise in financial management and planning has enabled us to make informed decisions and achieve sustainable growth. We truly value their commitment to excellence and look forward to a lasting partnership.",
      author: "Umeobi Stanley Ikenna",
      position: "CEO, Cadast",
      title: "Driving Informed Decisions and Success",
    },
    {
      quote:
        "I was truly impressed by the professionalism and expertise of the Prospera Finance Limited team. They offered us a flexible, affordable financing solution tailored to our unique needs, and their ongoing support has been nothing short of outstanding.",
      author: "Mr. Misheal Ike Chukwuma",
      position: "CEO, Nevaeh Travel & Tour",
      title: "Flexible Support You Can Count On",
    },
    {
      quote:
        "Prospera Finance Limited has been a game-changer for our business. Their innovative financial solutions have helped us optimize cash flow, cut costs, and boost profitability. I highly recommend them to any business seeking a reliable financial partner.",
      author: "Mr. Tochukwu Emmanuel Chukwuma",
      position: "CEO, Emmatobest Trading Ventures",
      title: "Innovative Solutions for Real Results",
    },
    {
      quote:
        "Partnering with Prospera Finance Limited has made a real difference in our business. Their customised financial support and dedicated service have given us the confidence to tackle challenges and the tools to reach new milestones.",
      author: "Mrs. Angela John",
      position: "CEO, Angelahub Limited",
      title: "Empowering Businesses to Reach New Milestones",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={testimonialBg}
            alt="Success Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-background mb-4">
              Success Stories
            </h1>
            <p className="text-xl text-background/90">
              Our greatest pride comes from the success of our clients
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Prospera Finance, our greatest pride comes from the success of our clients. Here's
              what business leaders have to say about partnering with us:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-medium transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="h-12 w-12 text-primary/20" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-4 text-primary">
                    {testimonial.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-heading font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <p className="text-lg text-muted-foreground mb-6">
              These stories remind us why we exist: to empower individuals and businesses to prosper
              with confidence.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary shadow-soft">
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
