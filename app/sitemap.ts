import apiClient, { PUBLIC_URL } from "@/config/config";
import { MetadataRoute } from "next";

interface DynamicData {
  slug: string;
  updated_at: string;
}

async function fetchBlogs(): Promise<DynamicData[]> {
  try {
    const response = await apiClient.get(`/blog`);
    const flattenedBlogs = response.data.blogs.flat(2);
    return flattenedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

async function fetchCollections(): Promise<DynamicData[]> {
  try {
    const response = await apiClient.get(`/categories`);
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}

async function fetchProducts(): Promise<DynamicData[]> {
  try {
    const response = await apiClient.get(`/products`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function fetchBrands(): Promise<DynamicData[]> {
  try {
    const response = await apiClient.get(`/brands`);
    return response.data.brands;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
}

async function fetchCareers(): Promise<DynamicData[]> {
  try {
    const response = await apiClient.get(`/careers`);
    return response.data.careers;
  } catch (error) {
    console.error("Error fetching careers:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await fetchBlogs();
  const collections = await fetchCollections();
  const products = await fetchProducts();
  const brands = await fetchBrands();
  const careers = await fetchCareers();

  const sitemap = [
    { url: `${PUBLIC_URL}/`, priority: 1.0 },
    { url: `${PUBLIC_URL}/about`, priority: 0.8 },
    { url: `${PUBLIC_URL}/contact-us`, priority: 0.8 },
    { url: `${PUBLIC_URL}/certificates`, priority: 0.7 },
    { url: `${PUBLIC_URL}/clients`, priority: 0.7 },
    { url: `${PUBLIC_URL}/become-a-supplier`, priority: 0.7 },
    { url: `${PUBLIC_URL}/faqs`, priority: 0.6 },
    { url: `${PUBLIC_URL}/blogs`, priority: 0.6 },
    { url: `${PUBLIC_URL}/careers`, priority: 0.6 },
    { url: `${PUBLIC_URL}/testimonials`, priority: 0.6 },
    { url: `${PUBLIC_URL}/terms-and-conditions`, priority: 0.5 },
    { url: `${PUBLIC_URL}/return-and-refund-policy`, priority: 0.5 },
    { url: `${PUBLIC_URL}/privacy-policy`, priority: 0.5 },
    { url: `${PUBLIC_URL}/shipping-policy`, priority: 0.5 },
    { url: `${PUBLIC_URL}/thankyou`, priority: 0.5 },
    { url: `${PUBLIC_URL}/collection`, priority: 0.9 },
    { url: `${PUBLIC_URL}/brands`, priority: 0.9 },
    { url: `${PUBLIC_URL}/products`, priority: 0.9 },
    // Dynamic blogs
    ...blogs.map((blog) => ({
      url: `${PUBLIC_URL}/blog/${blog.slug}`,
      lastmod: blog.updated_at,
      priority: 0.6,
    })),
    // Dynamic collections
    ...collections.map((collection) => ({
      url: `${PUBLIC_URL}/collection/${collection.slug}`,
      lastmod: collection.updated_at,
      priority: 0.9,
    })),
    // Dynamic products
    ...products.map((product) => ({
      url: `${PUBLIC_URL}/products/${product.slug}`,
      lastmod: product.updated_at,
      priority: 0.8,
    })),
    // Dynamic brands
    ...brands.map((brand) => ({
      url: `${PUBLIC_URL}/brands/${brand.slug}`,
      lastmod: brand.updated_at,
      priority: 0.8,
    })),
    // Dynamic careers
    ...careers.map((career) => ({
      url: `${PUBLIC_URL}/careers/${career.slug}`,
      lastmod: career.updated_at,
      priority: 0.7,
    })),
  ];

  return sitemap;
}
