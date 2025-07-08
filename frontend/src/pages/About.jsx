import { motion } from "framer-motion";
import { FiBook, FiAlertTriangle, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

// AboutPage.js
const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* About-Specific Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background texture */}
 
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-merriweather mb-6"
          >
            Why <span className="text-yellow-400">NovelNest</span> Exists
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl font-bricolage mx-auto"
          >
            We're the antidote to sugar-coated reviews and artificial ratings
          </motion.p>

          {/* Animated book stack */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mt-12 mx-auto w-24 h-24 text-yellow-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              className="-ml-12"
              width="200"
              height="200"
            >
              <path
                strokeWidth="1.5"
                d="M12 6v13m0-13c-1.168-1.477-2.754-2-4.5-2S3.832 5.477 3 6v13c.832-1.477 2.418-2 4.5-2s3.332.523 4.5 2m0-13c1.168-1.477 2.754-2 4.5-2s3.332.523 4.5 2v13c-.832-1.477-2.418-2-4.5-2s-3.332.523-4.5 2"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Rest of About page content... */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 font-merriweather text-yellow-400">
            How This Madness Began
          </h2>
          <div className="space-y-8 font-bricolage text-gray-300">
            <p>
              Too often, readers feel misled—fooled by inflated praise, curated
              marketing, or fake hype. We've all bought a book that everyone
              "loved"... but left us wondering if we read the same thing.
            </p>
            <p>
              At NovelNest, we believe that honest, unfiltered reviews are more
              valuable than sugar-coated summaries. We empower readers to speak
              their truth—whether it's praise, critique, or brutal honesty.
            </p>
            <p>
              This isn’t just a review platform. It’s a movement. A home for
              critical thinkers, thoughtful readers, and those who refuse to
              settle for mediocrity.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-4xl mx-auto text2 font-bricolage">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Our <span className="text-yellow-400">Unfiltered</span> Approach
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "No Score Inflation",
                content:
                  "That 3-star book you kinda liked? It's a 3-star book.",
              },
              {
                title: "Embrace the Hot Take",
                content:
                  "Hated a classic? Say why. Loved a trashy novel? Own it.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6   border border-gray-700 rounded-lg hover:border-yellow-400 transition-colors"
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 max-w-4xl mx-auto font-bricolage ">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-6  text-yellow-400">
            The Fine Print (We Hate It Too)
          </h2>
          <div className="space-y-6 text-gray-300">
            <p>
              <span className="text-white font-medium">Brutal ≠ Cruel: </span>
              Roast the book, not the author or other reviewers.
            </p>
            <p>
              <span className="text-white font-medium">
                Evidence Required:{" "}
              </span>
              "This sucks" isn't a review. Tell us why.
            </p>
            <p>
              <span className="text-white font-medium">No Astroturfing: </span>
              Caught shilling? Immediate ban. We have zero tolerance for fake
              reviews.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-bricolage">
            Ready to <span className="text-yellow-400">Burn Some Books</span>?
          </h2>
          <div className="flex  sm:flex-row justify-center gap-8 mt-8">
            <Link>
              <button className="bg-white font-bricolage text-black font-semibold px-5 py-3 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
                Join the Rebellion
              </button>
            </Link>
            <button className="bg-white font-bricolage text-black font-semibold px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
              Read the Drama
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
