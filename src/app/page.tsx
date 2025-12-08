import { Hero, FeaturedPlugins } from "@/components/home";

export default function Home() {
  // TODO: Fetch featured plugins from WordPress once CPT is set up
  const featuredPlugins: never[] = [];

  return (
    <>
      <Hero />
      <FeaturedPlugins plugins={featuredPlugins} />
    </>
  );
}
