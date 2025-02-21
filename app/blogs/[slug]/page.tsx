import SingleBlog from "@/components/marine-components/Blog/SingleBlog";
import axios from "@/config/config";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const response = await axios.get(`/blog/${slug}/seo`);
  console.log("Response", response.data);
  const seoData = response.data.blog_seo;

  return {
    title: seoData?.meta_title,
    description: seoData?.meta_description,
    robots: (() => {
      let index: boolean | undefined;
      let follow: boolean | undefined;
      switch (true) {
        case seoData?.indexing?.includes("noindex, follow"):
          index = false;
          follow = true;
          break;
        case seoData?.indexing?.includes("noindex") &&
          seoData?.indexing?.includes("nofollow"):
          index = false;
          follow = false;
          break;
        case seoData?.indexing?.includes("noindex"):
          index = false;
          break;
        case seoData?.indexing?.includes("nofollow"):
          follow = false;
          break;
        default:
          index =
            seoData?.indexing?.includes("max-video-preview") &&
            seoData?.indexing?.includes("max-image-preview") &&
            seoData?.indexing?.includes("max-snippet");
          follow =
            seoData?.indexing?.includes("max-video-preview") &&
            seoData?.indexing?.includes("max-image-preview") &&
            seoData?.indexing?.includes("max-snippet");
          break;
      }

      const robotsConfig: any = {};
      if (index !== undefined) robotsConfig.index = index;
      if (follow !== undefined) robotsConfig.follow = follow;

      const otherDirectives = seoData?.indexing
        ?.split(", ")
        .reduce((acc: any, directive: any) => {
          if (!directive.includes("noindex") && !directive.includes("follow")) {
            const [key, value] = directive.split(":");
            acc[key] = value;
          }
          return acc;
        }, {});

      return { ...robotsConfig, ...otherDirectives };
    })(),

    openGraph: {
      title: seoData?.meta_title,
      description: seoData?.meta_description,
      url: `/blog/${slug}`,
      locale: "en_us",
      siteName: "BizMarine",
      images: {
        url: `${seoData?.sharing}`,
        alt: seoData?.alt_sharing,
      },
    },
    alternates: {
      canonical: `/blog/${seoData?.canonical_url}`,
    },
  };
}

const BlogsDetail = () => {
  return <SingleBlog />;
};

export default BlogsDetail;
