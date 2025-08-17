import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AreaChart, GraduationCap, TrendingUp } from "lucide-react";

export function MarketOpportunity() {
  const stats = [
    {
      icon: <AreaChart className="w-12 h-12 text-accent" />,
      value: "₹50,000 Cr+",
      label: "Total Addressable Market in India's printing industry.",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-accent" />,
      value: "40M+",
      label: "Students in higher education, a key demographic for frequent printing needs.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      value: "10%+",
      label: "CAGR in custom merchandise, a high-growth area for our POD services.",
    },
  ];

  return (
    <section id="market-opportunity" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Market Opportunity</h2>
        <p className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
          Tapping into a vast and growing market with immense potential.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map(({ icon, value, label }) => (
          <Card key={value} className="bg-card/90 p-6 flex flex-col items-center text-center">
            <div className="mb-4">{icon}</div>
            <CardTitle className="text-4xl font-bold text-primary mb-2">{value}</CardTitle>
            <CardContent className="p-0 text-muted-foreground">
              {label}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
