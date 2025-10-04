import { TrendingUp, Users, Car, FileText, Banknote, PiggyBank } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Loans",
      description:
        "For Entrepreneurs and SMEs, a trusted growth partner is needed to fuel progress. At Prospera Finance, our Business Loans provide affordable financing tailored to help Entrepreneurs and SMEs expand operations, stock up on inventory, or manage working capital needs.",
      idealFor: [
        "Startups seeking seed capital",
        "SMEs looking to expand operations",
        "Equipment purchase or lease",
        "Hiring and training staff",
      ],
      benefits: [
        "Quick access to funds",
        "Tailored loan packages for different business sizes",
        "Flexible repayment aligned with your cash flow",
      ],
    },
    {
      icon: Users,
      title: "Payroll Loans",
      description:
        "Salary earners sometimes need a helping hand before payday. Our Payroll Loans make it easy to access funds when you need them most—with repayment automatically deducted from your salary.",
      idealFor: [
        "Employees in both public and private sectors",
        "Emergency expenses",
        "Bridging cash flow gaps between salaries",
      ],
      benefits: [
        "Fast loan disbursement",
        "Convenient repayment via salary",
        "No hidden fees",
      ],
    },
    {
      icon: Car,
      title: "Asset Financing",
      description:
        "Whether it's a car, land, or valuable property, ownership shouldn't be out of reach. With Asset Financing, you can acquire the assets you need today and pay gradually over time with flexible plans.",
      idealFor: [
        "Vehicle purchase (new or used)",
        "Land and property acquisition",
        "High-value personal or business equipment",
      ],
      benefits: [
        "Affordable down payments",
        "Structured repayment plans",
        "Ownership while you pay",
      ],
    },
    {
      icon: FileText,
      title: "LPO Loans (Local Purchase Order Financing)",
      description:
        "Executing contracts often requires upfront capital—and that's where we step in. Our LPO Loans provide contractors with the funds they need to deliver purchase orders successfully and on time.",
      idealFor: [
        "Contractors with government or private LPOs",
        "Funding supplies, logistics, and delivery",
        "Businesses fulfilling large purchase orders",
      ],
      benefits: [
        "Swift access to contract financing",
        "Repayment aligned with project milestones",
        "Trusted support for contractors and suppliers",
      ],
    },
    {
      icon: Banknote,
      title: "Personal Loans",
      description:
        "Life happens—and sometimes, it requires a little extra financial push. Our Personal Loans are designed to help you meet urgent needs, fund personal projects, or simply take care of life's unexpected turns. With flexible repayment plans and quick approvals, you get the support you need without the stress.",
      idealFor: [
        "School fees & education support",
        "Rent & household expenses",
        "Medical emergencies",
        "Personal projects or travel",
      ],
      benefits: [
        "Fast approval process",
        "Flexible repayment terms",
        "Transparent interest rates",
      ],
    },
    {
      icon: PiggyBank,
      title: "Investments",
      description:
        "Money should work for you, not just sit idle. With our Investment Opportunities, you can put your money to work in safe, transparent, and rewarding ways—growing your wealth securely and steadily.",
      idealFor: [
        "Individuals seeking stable returns",
        "Investors looking to diversify portfolios",
        "Professionals saving towards long-term goals",
      ],
      benefits: [
        "Competitive ROI (Return on Investment)",
        "Safe and transparent investment models",
        "Expert guidance to match your financial goals",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
              Tailored financial solutions designed to meet you right where you are, with flexible
              and reliable options for every need.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden animate-fade-in-up hover:shadow-medium transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-black text-2xl sm:text-3xl mb-4">{service.title}</h2>
                      <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="font-bold text-lg sm:text-xl mb-3 text-primary">
                            Ideal For:
                          </h3>
                          <ul className="space-y-2">
                            {service.idealFor.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2 text-lg">•</span>
                                <span className="text-muted-foreground text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-bold text-lg sm:text-xl mb-3 text-secondary">
                            Why It Works:
                          </h3>
                          <ul className="space-y-2">
                            {service.benefits.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-secondary mr-2 text-lg">•</span>
                                <span className="text-muted-foreground text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              At Prospera Finance, every service is crafted with one goal: to make prosperity
              possible for you.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
