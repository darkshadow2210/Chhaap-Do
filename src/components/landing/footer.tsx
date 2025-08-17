import { Printer, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-muted/50">
      <div className="container py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <a href="/" className="flex items-center gap-2">
            <Printer className="h-6 w-6 text-primary" />
            <span className="font-bold">Chhaap Do</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin />
          </a>
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="bg-muted/80 py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Chhaap Do. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
