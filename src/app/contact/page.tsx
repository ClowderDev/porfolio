"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

export default function Contact() {
  const createMailtoLink = (subject: string = "", body: string = "") => {
    const email = "tranlevinhbuu@gmail.com";
    const params: string[] = [];

    if (subject) {
      params.push(`subject=${encodeURIComponent(subject)}`);
    }
    if (body) {
      params.push(`body=${encodeURIComponent(body)}`);
    }

    const queryString = params.length > 0 ? `?${params.join("&")}` : "";
    return `mailto:${email}${queryString}`;
  };
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeInUp}>
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:tranlevinhbuu@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  tranlevinhbuu@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-secondary hover:text-primary"
                >
                  +84 353894786
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Hồ Chí Minh City, Việt Nam</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          {...slideInRight}
        >
          <motion.div
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div className="text-center" variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
              <p className="text-secondary mb-6">
                Choose how you&apos;d like to get in touch with me.
              </p>
            </motion.div>

            {/* Quick Contact Buttons */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <motion.a
                href={createMailtoLink(
                  "General Inquiry",
                  "Hi Buu,\n\nI would like to discuss..."
                )}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEnvelope className="h-5 w-5" />
                <span>Send General Email</span>
              </motion.a>

              <motion.a
                href={createMailtoLink(
                  "Project Collaboration",
                  "Hi Buu,\n\nI have a project idea and would like to collaborate...\n\nProject Details:\n- \n- \n- \n\nLooking forward to hearing from you!"
                )}
                className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEnvelope className="h-5 w-5" />
                <span>Project Collaboration</span>
              </motion.a>

              <motion.a
                href={createMailtoLink(
                  "Job Opportunity",
                  "Hi Buu,\n\nWe have an exciting job opportunity that might interest you...\n\nPosition: \nCompany: \nLocation: \n\nWould you be interested in learning more?"
                )}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-600/90 transition-colors flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEnvelope className="h-5 w-5" />
                <span>Job Opportunity</span>
              </motion.a>

              <motion.a
                href={createMailtoLink()}
                className="w-full border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEnvelope className="h-5 w-5" />
                <span>Custom Message</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="text-center text-sm text-secondary pt-4 border-t border-gray-200 dark:border-gray-700"
              variants={fadeInUp}
            >
              <p>
                These buttons will open your default email client with
                pre-filled templates.
                <br />
                You can also email me directly at{" "}
                <a
                  href="mailto:tranlevinhbuu@gmail.com"
                  className="text-primary hover:underline"
                >
                  tranlevinhbuu@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
