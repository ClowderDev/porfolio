"use client";

import { blogs } from "@/contents/blogs";
import Link from "next/link";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function Blogs() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Latest Blog Posts
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {blogs.slice(0, 6).map((blog) => (
            <motion.article
              key={blog.slug}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden border border-gray-700 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <Link href={`/blogs/${blog.slug}`} className="block">
                {/* Blog Image */}
                {blog.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {blog.featured && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6">
                  {/* Blog Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs"
                        >
                          <FaTag className="w-2 h-2" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Blog Title */}
                  <motion.h3
                    className="text-xl font-semibold mb-3 hover:text-primary transition-colors line-clamp-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" as const, stiffness: 300 }}
                  >
                    {blog.title}
                  </motion.h3>

                  {/* Blog Excerpt */}
                  <motion.p
                    className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {blog.excerpt}
                  </motion.p>

                  {/* Blog Meta */}
                  <motion.div
                    className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center space-x-4">
                      {blog.author && (
                        <motion.span
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <FaUser className="mr-1 w-3 h-3" />
                          {blog.author}
                        </motion.span>
                      )}
                      <motion.span
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaCalendarAlt className="mr-1 w-3 h-3" />
                        {new Date(blog.date).toLocaleDateString()}
                      </motion.span>
                      <motion.span
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaClock className="mr-1 w-3 h-3" />
                        {blog.readTime}
                      </motion.span>
                    </div>

                    <motion.div
                      className="flex items-center text-primary group-hover:translate-x-1 transition-transform"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Posts
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
