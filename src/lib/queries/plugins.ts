// Note: These queries will work once you create the "Plugins" CPT in WordPress
// with Custom Post Type UI and expose it to GraphQL

export const GET_ALL_PLUGINS = `
  query GetAllPlugins {
    plugins(first: 100, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        pluginDetails {
          tagline
          version
          price
          isFeatured
        }
      }
    }
  }
`;

export const GET_PLUGIN_BY_SLUG = `
  query GetPluginBySlug($slug: ID!) {
    plugin(id: $slug, idType: SLUG) {
      id
      slug
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      pluginDetails {
        tagline
        version
        price
        purchaseUrl
        demoUrl
        documentationUrl
        features
        screenshots {
          node {
            sourceUrl
            altText
          }
        }
        testimonials
        faq
        isFeatured
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

export const GET_FEATURED_PLUGINS = `
  query GetFeaturedPlugins {
    plugins(first: 10, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        pluginDetails {
          tagline
          version
          price
          isFeatured
        }
      }
    }
  }
`;

export const GET_ALL_PLUGIN_SLUGS = `
  query GetAllPluginSlugs {
    plugins(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
      }
    }
  }
`;
