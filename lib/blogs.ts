import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "blog-html");

export function getAllBlogs() {
  const files = fs.readdirSync(BLOG_DIR);

  const blogs = files
    .filter(file => file.endsWith(".html"))
    .map(file => {
      let html = fs.readFileSync(
        path.join(BLOG_DIR, file),
        "utf-8"
      );

      const slug = file.replace(".html", "");

      const h1Match = html.match(/<h1>(.*?)<\/h1>/i);
      const title = h1Match
        ? h1Match[1]
        : slug.replace(/-/g, " ");

      if (h1Match) {
        html = html.replace(h1Match[0], "");
      }

      return {
        id: slug,
        slug,
        title,
        author: "Manan Patel",
        date: "2025-01-01",
        featureImage: `/assets/blog-images/${slug}.webp`,
        excerpt:
          html.replace(/<[^>]+>/g, "").slice(0, 160) + "...",
        content: html.trim(),
      };
    });

  // ✅ IMPORTANT: define navigation order
  return blogs.sort((a, b) =>
    a.slug.localeCompare(b.slug)
  );
}

