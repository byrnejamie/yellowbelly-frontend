import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fetchGraphQL } from "@/lib/wordpress";
import { GET_POST_BY_SLUG, GET_ALL_POST_SLUGS } from "@/lib/queries/posts";
import { PostResponse, WPPost } from "@/lib/types/wordpress";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const data = await fetchGraphQL<{ posts: { nodes: { slug: string }[] } }>(
      GET_ALL_POST_SLUGS
    );
    return data.posts.nodes.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const data = await fetchGraphQL<PostResponse>(GET_POST_BY_SLUG, { slug });
    return data.post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.metaDesc || post.excerpt.replace(/<[^>]*>/g, ""),
    openGraph: post.seo?.opengraphImage
      ? {
          images: [post.seo.opengraphImage.sourceUrl],
        }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.categories?.nodes[0] && (
              <>
                <span>·</span>
                <span>{post.categories.nodes[0].name}</span>
              </>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            {post.title}
          </h1>
          {post.author?.node && (
            <div className="mt-6 flex items-center justify-center gap-3">
              {post.author.node.avatar?.url && (
                <Image
                  src={post.author.node.avatar.url}
                  alt={post.author.node.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span className="text-zinc-600 dark:text-zinc-400">
                {post.author.node.name}
              </span>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.featuredImage?.node && (
          <div className="relative mt-12 aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="mt-12 prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-zinc-900 dark:prose-a:text-white prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back Link */}
        <div className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
