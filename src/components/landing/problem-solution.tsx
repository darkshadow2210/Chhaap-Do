import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Frown, UploadCloud, Printer, PackageCheck } from "lucide-react";

export function ProblemSolution() {
  const solutionSteps = [
    {
      icon: <UploadCloud className="h-8 w-8 text-primary" />,
      title: "Seamless Upload",
      description: "Instantly upload your documents or designs from any device.",
    },
    {
      icon: <Printer className="h-8 w-8 text-primary" />,
      title: "Smart Matching",
      description: "Our AI matches you with the best, most affordable local printer.",
    },
    {
      icon: <PackageCheck className="h-8 w-8 text-primary" />,
      title: "Easy Delivery",
      description: "Get it delivered to your doorstep or pick it up yourself.",
    },
  ];

  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="container grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Frown className="h-10 w-10 text-destructive" />
            <h2 className="text-3xl md:text-4xl font-bold">The Problem</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Getting things printed is a hassle. You have to find a shop, deal with confusing pricing, wait in lines, and often the quality is a gamble. It's an old-school process in a digital world, wasting your time and energy.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Solution</h2>
          <div className="grid sm:grid-cols-1 gap-6">
            {solutionSteps.map(({ icon, title, description }) => (
              <Card key={title}>
                <CardHeader className="flex flex-row items-center gap-4 p-4 pb-2">
                  {icon}
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline">Explore Services</Button>
        </div>
      </div>
    </section>
  );
}
