import { Blog } from "@/types";
import { reactRouterGuide } from "./blog-posts/react-router-guide";
import { nodejsTypescriptGuide } from "./blog-posts/nodejs-typescript";

export const blogs: Blog[] = [
  {
    id: reactRouterGuide.id,
    title: reactRouterGuide.title,
    excerpt: reactRouterGuide.excerpt,
    date: reactRouterGuide.date,
    readTime: reactRouterGuide.readTime,
    slug: reactRouterGuide.slug,
    author: reactRouterGuide.author,
    image: reactRouterGuide.image,
    tags: reactRouterGuide.tags,
    featured: reactRouterGuide.featured,
    content: reactRouterGuide.content,
  },
  {
    id: nodejsTypescriptGuide.id,
    title: nodejsTypescriptGuide.title,
    excerpt: nodejsTypescriptGuide.excerpt,
    date: nodejsTypescriptGuide.date,
    readTime: nodejsTypescriptGuide.readTime,
    slug: nodejsTypescriptGuide.slug,
    author: nodejsTypescriptGuide.author,
    image: nodejsTypescriptGuide.image,
    tags: nodejsTypescriptGuide.tags,
    featured: nodejsTypescriptGuide.featured,
    content: nodejsTypescriptGuide.content,
  },
];
