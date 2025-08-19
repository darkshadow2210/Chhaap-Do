'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToHowItWorks = () => {
    document.getElementById('howItWorks')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Chhaap Do
            </span>{" "}
            - Jo Mann Mai Aaya Chhaap Do
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          India’s first smart printing aggregator – faster, smarter, cooler.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" onClick={scrollToHowItWorks}>Upload & Print Now</Button>
        </div>
      </div>

      <div className="z-10">
        <Image
          src="/hero_section.png"
          width={600}
          height={300}
          alt="Illustration of a person printing via phone"
          className="rounded-lg shadow-lg"
          data-ai-hint="printing phone"
        />
      </div>

      <div className="shadow"></div>
    </section>
  );
}
