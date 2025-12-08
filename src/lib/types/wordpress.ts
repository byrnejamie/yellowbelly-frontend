// WordPress GraphQL Types

export interface WPImage {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
}

export interface WPPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: WPImage;
  author?: {
    node: {
      name: string;
      avatar?: {
        url: string;
      };
    };
  };
  categories?: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  seo?: WPSeo;
}

export interface WPPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  featuredImage?: WPImage;
  seo?: WPSeo;
}

export interface WPSeo {
  title: string;
  metaDesc: string;
  opengraphImage?: {
    sourceUrl: string;
  };
}

// Plugin CPT Types
export interface PluginDetails {
  tagline?: string;
  version?: string;
  price?: number;
  purchaseUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  features?: string; // JSON string or newline-separated (ACF Free workaround)
  screenshots?: WPImage[];
  testimonials?: string; // JSON string (ACF Free workaround)
  faq?: string; // JSON string (ACF Free workaround)
  isFeatured?: boolean;
}

export interface WPPlugin {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: WPImage;
  pluginDetails?: PluginDetails;
  seo?: WPSeo;
}

// GraphQL Response Types
export interface PostsResponse {
  posts: {
    nodes: WPPost[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

export interface PostResponse {
  post: WPPost;
}

export interface PageResponse {
  page: WPPage;
}

export interface PluginsResponse {
  plugins: {
    nodes: WPPlugin[];
  };
}

export interface PluginResponse {
  plugin: WPPlugin;
}

export interface MenuResponse {
  menu: {
    menuItems: {
      nodes: Array<{
        id: string;
        label: string;
        url: string;
        path: string;
      }>;
    };
  };
}
