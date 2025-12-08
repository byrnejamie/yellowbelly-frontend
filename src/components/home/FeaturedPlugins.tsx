import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, Button } from "@/components/ui";
import { WPPlugin } from "@/lib/types/wordpress";

interface FeaturedPluginsProps {
  plugins: WPPlugin[];
}

export default function FeaturedPlugins({ plugins }: FeaturedPluginsProps) {
  // If no plugins yet, show placeholder
  if (!plugins || plugins.length === 0) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Featured Plugins
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Our most popular WordPress plugins
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="flex flex-col">
                <div className="aspect-video w-full rounded-lg bg-zinc-100 dark:bg-zinc-800" />
                <CardHeader>
                  <CardTitle>Coming Soon</CardTitle>
                  <CardDescription>
                    Exciting plugins are on the way. Stay tuned!
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Featured Plugins
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Our most popular WordPress plugins
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plugins.map((plugin) => (
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
              <CardFooter className="mt-auto">
                <Button href={`/plugins/${plugin.slug}`} variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/plugins" variant="outline">
            View All Plugins
          </Button>
        </div>
      </div>
    </section>
  );
}
