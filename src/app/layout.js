import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GDSC Bundelkhand Institute of Engineering and Technology, Jhansi",
  image: "",
  type: "website",
  description: "This is the leaderboard for the GDSC BIET Jhansi.",
  keywords: ["gdsc", "dsa", "cp", "gdscbiet"],
  robots: "index,follow",

  "og:title": "GDSC BIET Leaderboard",
  "og:image": "",
  "og:description": "This is the leaderboard for the GDSC BIET Jams.",
  "twitter:card": "summary_large_image",
  "twitter:title": "GDSC BIET Leaderboard",
  "twitter:description": "This is the leaderboard for the GDSC BIET Jams.",
  "twitter:image": "",
  "twitter:site": "@gdscpu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head></head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
