import { Printer } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex items-center">
          <Printer className="h-6 w-6 mr-2 text-primary" />
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">
              Chhaap Do
            </span>
          </a>
        </div>
        <Link href="/upload" passHref legacyBehavior>
          <Button className="ml-auto" variant="default" asChild>
            <a>Get Started</a>
          </Button>
        </Link>
      </div>
    </header>
  );
}
