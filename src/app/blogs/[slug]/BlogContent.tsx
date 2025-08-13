"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight, fadeIn } from "@/utils/animations";
import { FaClock, FaCalendar, FaTag, FaUser } from "react-icons/fa";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Blog } from "@/types";

interface BlogContentProps {
  blog: Blog;
}

export default function BlogContent({ blog }: BlogContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16">
      {/* Hero Image */}
      {blog.image && (
        <motion.div
          {...slideInLeft}
          className="mb-8 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
        </motion.div>
      )}

      {/* Blog Header */}
      <motion.div {...slideInRight} className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {blog.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
          {blog.author && (
            <div className="flex items-center gap-2">
              <FaUser className="w-4 h-4 text-blue-400" />
              <span>{blog.author}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <FaCalendar className="w-4 h-4 text-blue-400" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="w-4 h-4 text-blue-400" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
              >
                <FaTag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Excerpt */}
        <p className="text-lg text-gray-300 leading-relaxed">{blog.excerpt}</p>
      </motion.div>

      {/* Blog Content */}
      <motion.div
        {...fadeIn}
        className="prose prose-lg prose-invert max-w-none"
      >
        {blog.content ? (
          <ReactMarkdown
            components={{
              code(props) {
                const { children, className } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    PreTag="div"
                    language={match[1]}
                    style={vscDarkPlus}
                    customStyle={{
                      background: "#1e1e1e",
                      borderRadius: "8px",
                      padding: "16px",
                      margin: "16px 0",
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">
                    {children}
                  </code>
                );
              },
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-blue-400 mt-8 mb-6">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="text-gray-300 list-decimal list-inside space-y-2 mb-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-300">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="text-white font-semibold">{children}</strong>
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        ) : (
          <p className="text-gray-300">{blog.excerpt}</p>
        )}
      </motion.div>
    </div>
  );
}
