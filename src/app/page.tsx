import { Hero } from './_components/hero';
import { FeaturedGuides } from './_components/featured-guides';
import { Newsletter } from './_components/newsletter';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container px-4 md:px-6">
        <Separator className="my-12" />
      </div>
      <FeaturedGuides />
      <div className="container px-4 md:px-6">
        <Separator className="my-12" />
      </div>
      <Newsletter />
    </div>
  );
}
