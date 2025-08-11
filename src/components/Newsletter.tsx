export default function Newsletter() {
  return (
    <section className="py-20">
      <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up">
        <div className="p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Get in touch with me
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  I&apos;d love to hear from you! Whether you have a question,
                  feedback, or just want to connect, feel free to reach out.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:tranlevinhbuu@gmail.com"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex justify-end"
                >
                  Send Message
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
