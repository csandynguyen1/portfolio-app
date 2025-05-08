import { Greeting } from '@/components/Greeting';
import { FeaturedProjects } from '@/components/FeaturedProjects';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Greeting />
      <FeaturedProjects />
    </main>
  );
}
