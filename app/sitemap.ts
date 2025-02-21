import apiClient, { PUBLIC_URL } from "@/config/config";
import { MetadataRoute } from "next";

interface DynamicData {
  slug: string;
  updated_at: string;
}

async function fetchData(endpoint: string): Promise<DynamicData[]> {
  try {
    const response = await apiClient.get(endpoint);
    return response.data[Object.keys(response.data)[0]] || [];
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, categories, products, brands, careers] = await Promise.all([
    fetchData("/blog/"),
    fetchData("/categories/"),
    fetchData("/products/"),
    fetchData("/brands/"),
    fetchData("/careers/"),
  ]);

  const sitemap: MetadataRoute.Sitemap = [
    { url: `${PUBLIC_URL}/`, priority: 1.0 },
    { url: `${PUBLIC_URL}/about-us`, priority: 0.8 },
    { url: `${PUBLIC_URL}/contact`, priority: 0.8 },
    { url: `${PUBLIC_URL}/certificates`, priority: 0.7 },
    { url: `${PUBLIC_URL}/clients`, priority: 0.7 },
    { url: `${PUBLIC_URL}/faqs`, priority: 0.6 },
    { url: `${PUBLIC_URL}/blogs`, priority: 0.6 },
    { url: `${PUBLIC_URL}/careers`, priority: 0.6 },
    { url: `${PUBLIC_URL}/testimonials`, priority: 0.6 },
    { url: `${PUBLIC_URL}/terms-and-conditions`, priority: 0.5 },
    { url: `${PUBLIC_URL}/return-and-refund-policy`, priority: 0.5 },
    { url: `${PUBLIC_URL}/privacy-policy`, priority: 0.5 },
    { url: `${PUBLIC_URL}/shipping-policy`, priority: 0.5 },
    { url: `${PUBLIC_URL}/thankyou`, priority: 0.5 },
    { url: `${PUBLIC_URL}/categories`, priority: 0.9 },
    { url: `${PUBLIC_URL}/brands`, priority: 0.9 },
    { url: `${PUBLIC_URL}/products`, priority: 0.9 },
    // Dynamic data
    ...blogs.map(({ slug, updated_at }) => ({
      url: `${PUBLIC_URL}/blog/${slug}`,
      lastmod: updated_at,
      priority: 0.6,
    })),
    ...categories.map(({ slug, updated_at }) => ({
      url: `${PUBLIC_URL}/categories/${slug}`,
      lastmod: updated_at,
      priority: 0.9,
    })),
    ...products.map(({ slug, updated_at }) => ({
      url: `${PUBLIC_URL}/products/${slug}`,
      lastmod: updated_at,
      priority: 0.8,
    })),
    ...brands.map(({ slug, updated_at }) => ({
      url: `${PUBLIC_URL}/brands/${slug}`,
      lastmod: updated_at,
      priority: 0.8,
    })),
    ...careers.map(({ slug, updated_at }) => ({
      url: `${PUBLIC_URL}/careers/${slug}`,
      lastmod: updated_at,
      priority: 0.7,
    })),
  ];

  return sitemap;
}
