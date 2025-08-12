export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Blog {
  id?: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  author?: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
  content?: string;
}
