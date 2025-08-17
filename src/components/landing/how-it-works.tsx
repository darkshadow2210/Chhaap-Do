'use client';

import { Upload, Users, Truck, CreditCard } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Upload className="w-8 h-8 text-primary" />,
    title: "Upload Your Files",
    description: "Simply drag and drop or select your documents. We support all major file formats for your convenience.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Find the Perfect Printer",
    description: "Our smart system matches you with the best-fit local printer based on your needs for quality, speed, and price.",
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Choose Delivery or Pickup",
    description: "Get your prints delivered right to your doorstep, or choose to pick them up yourself from the print shop.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    title: "Pay Securely Online",
    description: "Complete your order with our secure and easy-to-use online payment system. No cash, no hassle.",
  },
];


export function HowItWorks() {
    const scrollToAiDesignTool = () => {
        document.getElementById('ai-design-tool')?.scrollIntoView({
          behavior: 'smooth',
        });
      };

  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-16 text-xl text-muted-foreground">
        Getting your prints is as easy as 1, 2, 3, 4. A seamless experience from upload to delivery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ title, description, icon }) => (
          <div key={title} className="text-center p-4">
             <div className="w-16 h-16 bg-primary/10 text-primary border-2 border-primary/20 rounded-full flex justify-center items-center text-2xl font-bold mb-4 mx-auto">
                {icon}
            </div>
            <div className="pt-4 p-4 h-full">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
