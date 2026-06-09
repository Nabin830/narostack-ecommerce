import { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://narostack.com";
  const staticRoutes = ["", "/products", "/cart", "/checkout", "/about", "/contact", "/faq", "/privacy", "/terms", "/refund", "/delivery", "/login", "/register", "/success"];
  const productRoutes = products.map((product) => ({ url: `${baseUrl}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }));
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.7 })),
    ...productRoutes,
  ];
}
