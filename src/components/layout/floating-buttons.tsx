'use client';

import {
  MessageCircle,
  Facebook,
  Youtube,
  Instagram,
  Share2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="rounded-full h-12 w-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg">
            <Share2 className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" align="center" className="mb-2">
          <DropdownMenuItem asChild>
            <Link href="https://www.facebook.com/profile.php?id=61574043867042" target="_blank" className="flex items-center gap-2">
              <Facebook className="h-4 w-4" />
              <span>Facebook</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="https://www.youtube.com/@SYNAI-k2p" target="_blank" className="flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              <span>YouTube</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="https://www.instagram.com/synai.ve?igsh=ZGUzMzM3NWJiOQ==" target="_blank" className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        size="icon"
        className="rounded-full h-14 w-14 bg-green-500 text-white hover:bg-green-600 shadow-lg"
        asChild
      >
        <Link href="https://wa.me/+584246684134" target="_blank">
          <MessageCircle className="h-7 w-7" />
          <span className="sr-only">WhatsApp</span>
        </Link>
      </Button>
    </div>
  );
}
