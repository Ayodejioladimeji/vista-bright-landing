import { FileText, CheckCircle, FileCheck, Wallet, RefreshCw, UserPlus, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const loanSteps = [
    {
      icon: FileText,
      title: "Apply Online",
      description: "Fill out our quick online application form with your details and preferred service (SME Loan, Payroll Loan, Asset Financing, or LPO Loan).",
    },
    {
      icon: CheckCircle,
      title: "Get Verified",
      description: "Our team reviews your application and verifies your documents. We keep the process short and straightforward.",
    },
    {
      icon: FileCheck,
      title: "Approval & Offer",
      description: "If approved, you'll receive a loan offer with clear terms—no hidden charges, no fine print.",
    },
    {
      icon: Wallet,
      title: "Receive Funds",
      description: "Once you accept the offer, your funds are disbursed directly to your account so you can get started right away.",
    },
    {
      icon: RefreshCw,
      title: "Repay Conveniently",
      description: "Enjoy flexible repayment options designed to match your cash flow and lifestyle.",
    },
  ];

  const investmentSteps = [
    {
      icon: UserPlus,
      title: "Choose Your Plan",
      description: "Select an investment package that fits your financial goals and risk appetite.",
    },
    {
      icon: DollarSign,
      title: "Sign Up & Fund",
      description: "Register with us, fund your investment, and receive confirmation of your plan.",
    },
    {
      icon: TrendingUp,
      title: "Watch Your Money Grow",
      description: "Sit back and track your earnings with transparency and peace of mind.",
    },
    {
      icon: Wallet,
      title: "Get Paid",
      description: "Withdraw returns or reinvest them—it's your choice.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-6">How It Works</h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
              Our process is fast, transparent, and designed with you in mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">For Loans</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Get the funding you need in 5 simple steps</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {loanSteps.map((step, index) => (
              <Card key={index} className="animate-slide-in-left hover:shadow-medium transition-all" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                        <step.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                      </div>
                      <div className="w-14 sm:w-16 text-center mt-2">
                        <span className="font-black text-xl sm:text-2xl text-primary">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl sm:text-2xl mb-3">{step.title}</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/contact">Apply for a Loan</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">For Investments</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Start growing your wealth in 4 easy steps</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {investmentSteps.map((step, index) => (
              <Card key={index} className="animate-slide-in-right hover:shadow-medium transition-all" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
                        <step.icon className="h-7 w-7 sm:h-8 sm:w-8 text-secondary-foreground" />
                      </div>
                      <div className="w-14 sm:w-16 text-center mt-2">
                        <span className="font-black text-xl sm:text-2xl text-secondary">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl sm:text-2xl mb-3">{step.title}</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Explore Investment Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
