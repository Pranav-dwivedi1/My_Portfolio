// app/blogs/layout.jsx

export const metadata = {
  title: "Blog | AI, Business Growth, Technology & Strategy",
  description:
    "Read expert articles on artificial intelligence, prompt engineering, business growth, finance, technology trends, and digital strategy by Pranav Dwivedi.",
  keywords: [
    "AI blog",
    "business growth blog",
    "prompt engineering blog",
    "technology blog",
    "startup strategy",
  ],
  alternates: {
    canonical: "https://www.pranavdev.online/blogs",
  },
  openGraph: {
    title: "PranavDev Blog – AI, Business & Technology Insights",
    description:
      "Latest blog articles on AI, prompt engineering, business growth, finance, and digital strategy.",
    url: "https://www.pranavdev.online/blogs",
    siteName: "PranavDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PranavDev Blog – AI & Business Insights",
    description:
      "Expert-written blogs on AI, business growth, technology and strategy.",
  },
};

export default function BlogsLayout({ children }) {
  return <>{children}</>;
}
