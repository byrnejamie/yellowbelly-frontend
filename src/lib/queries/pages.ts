export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
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

export const GET_ALL_PAGES = `
  query GetAllPages {
    pages(first: 100, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
      }
    }
  }
`;
