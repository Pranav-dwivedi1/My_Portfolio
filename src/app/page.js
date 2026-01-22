import HomeClient from "./HomeClient";

export const metadata = {
  title: "Pranav Dwivedi – Full Stack Developer | pranavdev.online",
  description:
    "Pranav Dwivedi is a Full Stack Developer skilled in React, Next.js, Node.js, MongoDB and MySQL. Explore projects, blogs and experience on pranavdev.online.",
  keywords: [
    "Pranav Dwivedi",
    "Pranav Developer",
    "Full Stack Developer Pranav",
    "Pranav Dev",
    "pranavdev.online",
  ],
  authors: [{ name: "Pranav Dwivedi" }],
  alternates: {
    canonical: "https://pranavdev.online",
  },
  openGraph: {
    title: "Pranav Dwivedi – Full Stack Developer",
    description:
      "Portfolio website of Pranav Dwivedi, Full Stack Developer working with React, Next.js and Node.js.",
    url: "https://pranavdev.online",
    siteName: "Pranav Dev",
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}
