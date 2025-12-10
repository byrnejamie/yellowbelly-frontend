import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
} from "@/components/ui";
import { WPPlugin } from "@/lib/types/wordpress";

interface FeaturedPluginsProps {
  plugins: WPPlugin[];
}

export default function FeaturedPlugins({ plugins }: FeaturedPluginsProps) {
  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Featured Plugins
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our most popular WordPress plugins
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(!plugins || plugins.length === 0) ? (
            // Placeholder cards
            [1, 2, 3].map((i) => (
              <Card key={i} className="flex flex-col overflow-hidden">
                <div className="aspect-video w-full bg-muted" />
                <CardHeader>
                  <CardTitle>Coming Soon</CardTitle>
                  <CardDescription>
                    Exciting plugins are on the way. Stay tuned!
                  </CardDescription>
                </CardHeader>
              </Card>
            ))
          ) : (
            plugins.map((plugin) => (
              <Card key={plugin.id} className="flex flex-col overflow-hidden">
                {plugin.featuredImage?.node && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={plugin.featuredImage.node.sourceUrl}
                      alt={plugin.featuredImage.node.altText || plugin.title}
                      fill
                      className="object-cover transition-default hover:scale-105"
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
                  <Button
                    href={`/plugins/${plugin.slug}`}
                    variant="secondary"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
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
