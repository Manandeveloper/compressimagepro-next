import { getAllBlogs } from "./blogs";

export function getNextPrevBlog(currentSlug: string) {
    const blogs = getAllBlogs();
    const index = blogs.findIndex(b => b.slug === currentSlug);

    return {
        prev: index > 0 ? blogs[index - 1] : null,
        next: index < blogs.length - 1 ? blogs[index + 1] : null,
    };
}
