import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide affordable, transparent, and innovative financial solutions that empower entrepreneurs and individuals with the resources they need to thrive.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To become Africa's most trusted and accessible finance partner, creating pathways to prosperity for individuals and businesses at every stage of growth.",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Building long-lasting relationships based on trust, professionalism, and results while maintaining transparency and integrity in all our dealings.",
    },
  ];

  const whyChoose = [
    {
      title: "Fast & Flexible",
      description: "We cut through red tape with quick approvals and tailored financing options.",
    },
    {
      title: "Trusted & Transparent",
      description: "No hidden fees, no confusing terms—just clarity you can count on.",
    },
    {
      title: "Growth-Focused",
      description: "Every solution is designed to help you move forward, not hold you back.",
    },
    {
      title: "Human-Centered",
      description: "Behind every service, we see real people, real dreams, and real possibilities.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="About Prospera Finance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-background mb-4">
              About Us
            </h1>
            <p className="text-xl text-background/90">
              Building trust, empowering growth, creating prosperity
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none animate-fade-in-up">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                At Prospera Finance, we believe money should be a tool for progress—not a barrier.
                Our mission is simple: to empower individuals, businesses, and communities with
                financial solutions that are reliable, flexible, and built for growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We were founded on the principle that everyone deserves access to funding and
                investment opportunities without unnecessary roadblocks. Whether you're a student
                seeking support, a business owner chasing expansion, or an investor looking to grow
                wealth securely, Prospera Finance is your trusted partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-medium transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
