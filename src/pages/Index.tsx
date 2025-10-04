import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const services = [
    {
      title: "Business Loans",
      description: "Fuel your business growth with flexible financing tailored to SMEs and entrepreneurs.",
      icon: TrendingUp,
    },
    {
      title: "Payroll Loans",
      description: "Quick cash for salary earners with automatic repayment from your paycheck.",
      icon: Users,
    },
    {
      title: "Asset Financing",
      description: "Own the assets you need today—cars, land, or equipment—with flexible payment plans.",
      icon: Shield,
    },
    {
      title: "Personal Loans",
      description: "Fast support for life's unexpected moments with transparent terms.",
      icon: CheckCircle2,
    },
    {
      title: "LPO Loans",
      description: "Contract financing to help you deliver purchase orders on time.",
      icon: Clock,
    },
    {
      title: "Investments",
      description: "Grow your wealth securely with competitive returns and expert guidance.",
      icon: TrendingUp,
    },
  ];

  const stats = [
    { value: "10,000+", label: "Happy Clients" },
    { value: "₦5B+", label: "Loans Disbursed" },
    { value: "24hrs", label: "Quick Approval" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  const whyChooseUs = [
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
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Prospera Finance Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 z-10 relative">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-background mb-6 leading-tight">
              Building Your Prosperity,{" "}
              <span className="text-secondary">
                One Smart Decision
              </span>{" "}
              at a Time
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-background/90 mb-8 max-w-3xl leading-relaxed">
              Achieving your goals with confidence requires fast, reliable, and transparent
              financial solutions. At Prospera Finance, we understand your needs, and we're here to
              financially secure your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
              >
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background text-background hover:bg-background hover:text-foreground"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="font-black text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/90 text-sm sm:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored financial solutions designed to meet you right where you are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Why Choose Prospera Finance?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl sm:text-2xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-6">
              Ready to Build Your Prosperity?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join thousands of satisfied clients who trust Prospera Finance for their financial
              needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
              >
                <Link to="/contact">Apply for a Loan</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                <Link to="/services">Explore Investment Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
