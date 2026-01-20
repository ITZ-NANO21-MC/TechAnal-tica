import Link from 'next/link';
import { BarChart3, Twitter, Youtube, Instagram, Facebook} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <p className="text-lg font-bold">TechAnalítica</p>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Decisiones tecnológicas inteligentes para 2026.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.facebook.com/profile.php?id=61574043867042" target="_blank">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.youtube.com/@SYNAI-k2p" target="_blank">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.instagram.com/synai.ve?igsh=ZGUzMzM3NWJiOQ==" target="_blank">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="border-t py-4">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} TechAnalítica. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
