import { GraphQLClient } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL || "http://dev-headless-yellowbelly.local/graphql";

export const client = new GraphQLClient(endpoint);

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  try {
    return await client.request<T>(query, variables);
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw error;
  }
}
