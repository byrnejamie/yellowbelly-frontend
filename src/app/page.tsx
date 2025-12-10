import { Hero, FeaturedPlugins } from "@/components/home";
import { SectionDivider } from "@/components/ui";

export default function Home() {
  // TODO: Fetch featured plugins from WordPress once CPT is set up
  const featuredPlugins: never[] = [];

  return (
    <>
      <Hero />
      <SectionDivider variant="dark-to-light" />
      <FeaturedPlugins plugins={featuredPlugins} />
    </>
  );
}
