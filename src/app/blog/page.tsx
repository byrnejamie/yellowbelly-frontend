import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
import { fetchGraphQL } from "@/lib/wordpress";
import { GET_ALL_POSTS } from "@/lib/queries/posts";
import { PostsResponse } from "@/lib/types/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read our latest articles, tutorials, and updates.",
};

async function getPosts() {
  try {
    const data = await fetchGraphQL<PostsResponse>(GET_ALL_POSTS, { first: 12 });
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Blog
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Latest articles, tutorials, and updates
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="mt-12 text-center">
            <div className="mx-auto max-w-md rounded-xl border border-dashed border-zinc-300 p-12 dark:border-zinc-700">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                No posts yet
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Check back soon for new content!
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  {post.featuredImage?.node && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
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
                    <CardTitle className="mt-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
