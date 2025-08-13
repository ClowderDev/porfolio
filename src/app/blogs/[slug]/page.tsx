import { notFound } from "next/navigation";
import { blogs } from "@/contents/blogs";
import BlogNavigation from "./BlogNavigation";
import BlogContent from "@/app/blogs/[slug]/BlogContent";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen text-white">
      <BlogNavigation />
      <BlogContent blog={blog} />
    </div>
  );
}
