import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui";
// import { fetchGraphQL } from "@/lib/wordpress";
// import { GET_PLUGIN_BY_SLUG, GET_ALL_PLUGIN_SLUGS } from "@/lib/queries/plugins";
// import { PluginResponse, WPPlugin } from "@/lib/types/wordpress";

interface PluginPageProps {
  params: Promise<{ slug: string }>;
}

// TODO: Uncomment once Plugins CPT is set up
// export async function generateStaticParams() {
//   const data = await fetchGraphQL<{ plugins: { nodes: { slug: string }[] } }>(GET_ALL_PLUGIN_SLUGS);
//   return data.plugins.nodes.map((plugin) => ({
//     slug: plugin.slug,
//   }));
// }

// async function getPlugin(slug: string) {
//   const data = await fetchGraphQL<PluginResponse>(GET_PLUGIN_BY_SLUG, { slug });
//   return data.plugin;
// }

export async function generateMetadata({ params }: PluginPageProps): Promise<Metadata> {
  const { slug } = await params;
  // const plugin = await getPlugin(slug);

  return {
    title: `Plugin: ${slug}`,
    description: "Learn more about this WordPress plugin.",
  };
}

export default async function PluginPage({ params }: PluginPageProps) {
  const { slug } = await params;
  // const plugin = await getPlugin(slug);

  // Placeholder - remove once CPT is set up
  const plugin = null;

  if (!plugin) {
    // For now, show a placeholder page
    return (
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Plugin: {slug}
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              This plugin page will be available once the WordPress backend is configured.
            </p>
            <div className="mt-8">
              <Button href="/plugins" variant="outline">
                ← Back to Plugins
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full plugin page template (for when data is available)
  // return (
  //   <div className="py-20">
  //     <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
  //       {/* Hero Section */}
  //       <div className="text-center">
  //         <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
  //           {plugin.title}
  //         </h1>
  //         {plugin.pluginDetails?.tagline && (
  //           <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
  //             {plugin.pluginDetails.tagline}
  //           </p>
  //         )}
  //         <div className="mt-8 flex items-center justify-center gap-4">
  //           {plugin.pluginDetails?.purchaseUrl && (
  //             <Button href={plugin.pluginDetails.purchaseUrl} size="lg">
  //               Get Started
  //             </Button>
  //           )}
  //           {plugin.pluginDetails?.demoUrl && (
  //             <Button href={plugin.pluginDetails.demoUrl} variant="outline" size="lg">
  //               View Demo
  //             </Button>
  //           )}
  //         </div>
  //       </div>
  //
  //       {/* Featured Image */}
  //       {plugin.featuredImage?.node && (
  //         <div className="mt-16 relative aspect-video w-full overflow-hidden rounded-xl">
  //           <Image
  //             src={plugin.featuredImage.node.sourceUrl}
  //             alt={plugin.featuredImage.node.altText || plugin.title}
  //             fill
  //             className="object-cover"
  //           />
  //         </div>
  //       )}
  //
  //       {/* Content */}
  //       <div
  //         className="mt-16 prose prose-zinc dark:prose-invert max-w-none"
  //         dangerouslySetInnerHTML={{ __html: plugin.content }}
  //       />
  //     </div>
  //   </div>
  // );
}
