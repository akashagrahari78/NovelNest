import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiTwitter, FiInstagram } from "react-icons/fi";
import { toast } from "react-toastify";
import axios from "axios";
import { userContext } from "../context/userContext";

const ContactComponents = () => {
  const  {token} = useContext(userContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e)=>{
     const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Form data is : ", formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/contact",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      {/* Container */}
      <div className="max-w-4xl mx-auto mt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-bricolage mb-4">
            Got Something to Say?
          </h1>
          <p className="text-gray-400 font-bricolage max-w-2xl mx-auto">
            Compliments, complaints, or collaboration ideas? We read every
            message.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.05)",
            }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-600"
          >
            <h2 className="text-2xl font-quicksand font-bold mb-6">
              Send Us a Message
            </h2>

            {/* form field */}
            <form onSubmit={onSubmitHandler} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Your Name (or alias)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={onChangeHandler}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Anonymous Reviewer"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  onChange={onChangeHandler}
                  value={formData.message}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Be brutally honest..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-white font-quicksand text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.05)",
              }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-600"
            >
              <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-yellow-400/20 transition-colors duration-300"
                  >
                    <FiMail className="text-yellow-400 text-xl hover:text-yellow-300 transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold font-bricolage">Email</h3>
                    <p className="text-gray-400 hover:text-white transition-colors duration-300">
                      truth@novelnest.com
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Response within 48 hours
                    </p>
                  </div>
                </motion.div>

                {/* Twitter */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-blue-400/20 transition-colors duration-300"
                  >
                    <FiTwitter className="text-blue-400 text-xl hover:text-blue-300 transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold font-bricolage">Twitter</h3>
                    <p className="text-gray-400 hover:text-white transition-colors duration-300">
                      @novelnest_roasts
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      For quick takes and drama
                    </p>
                  </div>
                </motion.div>

                {/* Instagram */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-pink-400/20 transition-colors duration-300"
                  >
                    <FiInstagram className="text-pink-400 text-xl hover:text-pink-300 transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold font-bricolage">Instagram</h3>
                    <p className="text-gray-400 hover:text-white transition-colors duration-300">
                      @novelnest
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Book cover art and snippets
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* FAQ CTA */}
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.05)",
              }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-gray-600"
            >
              <h3 className="font-bold text-2xl mb-2">Before you contact...</h3>
              <p className="text-gray-400 mb-4">
                Check if your question is answered in our brutally honest FAQ
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                Read FAQ →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponents;
