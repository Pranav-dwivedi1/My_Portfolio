import { blogData } from "@/lib/blogData";

export default function sitemap() {
  const baseUrl = "https://www.pranavdev.online";

  // 🔹 Static pages
  const staticPages = [
    {
      url: `${baseUrl}/`,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blogs`,
      priority: 0.9,
    },
  ];

  // 🔹 Blog pages (from local data)
  const blogPages = blogData.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
