import { Shield, Lock, CheckCircle, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Legal = () => {
  const sections = [
    {
      icon: Shield,
      title: "Licensed & Regulated",
      description:
        "Prospera Finance Limited is a legally registered financial services company. Our operations are guided by the standards of relevant financial regulatory bodies, ensuring that our clients are protected at all times.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      description:
        "We value your privacy. Every piece of information you share with us is kept secure and used strictly for service delivery.",
    },
    {
      icon: CheckCircle,
      title: "Fair & Transparent Practices",
      points: [
        "Clear loan terms with no hidden charges",
        "Responsible lending tailored to your needs",
        "Honest investment opportunities with proper disclosures",
      ],
    },
    {
      icon: FileText,
      title: "Our Commitment",
      description:
        "We ensure that every transaction, agreement, or partnership is carried out with integrity, professionalism, and respect for our clients.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary-foreground mb-6">
              Legal & Compliance
            </h1>
            <p className="text-xl text-primary-foreground/90">
              At Prospera Finance Limited, we prioritize transparency, accountability, and trust
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-medium transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <section.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading font-bold text-2xl mb-3">{section.title}</h2>
                      {section.description && (
                        <p className="text-lg text-muted-foreground">{section.description}</p>
                      )}
                      {section.points && (
                        <ul className="space-y-2 mt-4">
                          {section.points.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span className="text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Disclaimer */}
            <Card
              className="bg-muted border-2 border-primary/20 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Disclaimer</h2>
                <p className="text-muted-foreground">
                  All financial products and services offered by Prospera Finance Limited are
                  subject to eligibility, approval, and applicable terms & conditions. Clients are
                  encouraged to read and understand all agreements carefully before signing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
