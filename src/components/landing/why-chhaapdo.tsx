import { ContactForm } from "@/components/landing/contact-form";
import { Zap, Bot, Paintbrush, Handshake } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Speed & Efficiency",
    description:
      "Get your printing done at lightning speed. Our optimized network and express delivery options save you time.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    title: "Quality & Personalization",
    description:
      "From custom designs to unique materials, we offer unparalleled quality and personalization for every single order.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Smart Platform",
    description:
      "Our intelligent platform handles smart printer matching, quality checks, and provides helpful design suggestions.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-primary" />,
    title: "Value for Businesses",
    description:
      "Our subscription models and wallet features ensure that businesses get the best value and a seamless, repeatable service.",
  },
];

export function WhyChhaapDo() {
  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:pr-12">
          <div className="text-center lg:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Chhaap Do?</h2>
            <p className="md:w-3/4 mx-auto lg:mx-0 mt-4 text-xl text-muted-foreground">
              We're not just another printing service. We are a revolution in print, built on four key pillars.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map(({ icon, title, description }: FeatureProps) => (
              <div key={title}>
                <div className="flex items-center gap-4 mb-2">
                  {icon}
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}