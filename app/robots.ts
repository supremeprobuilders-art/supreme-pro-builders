import type { MetadataRoute } from "next";
const privatePaths = ["/api", "/desk", "/admin", "/account", "/private", "/signin-with-chatgpt", "/signout-with-chatgpt", "/callback"];
export default function robots(): MetadataRoute.Robots {
  return {
    rules: ["*", "Googlebot", "bingbot", "OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User"].map(userAgent => ({userAgent, allow: "/", disallow: privatePaths})),
    sitemap: "https://supremeprobuilders.com/sitemap.xml",
    host: "https://supremeprobuilders.com",
  };
}
