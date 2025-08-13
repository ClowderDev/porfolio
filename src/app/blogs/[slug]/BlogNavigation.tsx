"use client";

import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function BlogNavigation() {
  return (
    <>
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-6 px-4 md:px-8"
      >
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <FaArrowLeft className="w-4 h-4" />
          Quay lại blogs
        </Link>
      </motion.div>
    </>
  );
}
