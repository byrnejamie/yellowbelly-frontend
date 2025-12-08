import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, Button } from "@/components/ui";
// import { fetchGraphQL } from "@/lib/wordpress";
// import { GET_ALL_PLUGINS } from "@/lib/queries/plugins";
// import { PluginsResponse } from "@/lib/types/wordpress";

export const metadata: Metadata = {
  title: "Plugins",
  description: "Browse our collection of premium WordPress plugins.",
};

// TODO: Uncomment this once the Plugins CPT is set up in WordPress
// async function getPlugins() {
//   const data = await fetchGraphQL<PluginsResponse>(GET_ALL_PLUGINS);
//   return data.plugins.nodes;
// }

export default async function PluginsPage() {
  // const plugins = await getPlugins();
  const plugins: never[] = []; // Placeholder until CPT is set up

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Our Plugins
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Premium WordPress plugins to supercharge your website
          </p>
        </div>

        {plugins.length === 0 ? (
          <div className="mt-12 text-center">
            <div className="mx-auto max-w-md rounded-xl border border-dashed border-zinc-300 p-12 dark:border-zinc-700">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Coming Soon
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                We&apos;re working on exciting plugins. Check back soon!
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plugins.map((plugin: { id: string; slug: string; title: string; excerpt: string; featuredImage?: { node: { sourceUrl: string; altText: string } }; pluginDetails?: { tagline?: string; price?: number } }) => (
              <Card key={plugin.id} className="flex flex-col">
                {plugin.featuredImage?.node && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src={plugin.featuredImage.node.sourceUrl}
                      alt={plugin.featuredImage.node.altText || plugin.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plugin.title}</CardTitle>
                  <CardDescription>
                    {plugin.pluginDetails?.tagline || plugin.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {plugin.pluginDetails?.price === 0
                      ? "Free"
                      : `$${plugin.pluginDetails?.price}`}
                  </span>
                  <Button href={`/plugins/${plugin.slug}`} variant="secondary">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
