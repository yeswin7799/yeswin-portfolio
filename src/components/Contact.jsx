import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6'; // For LeetCode icon
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🚨 Replace these placeholders with your EmailJS credentials
    emailjs.send('service_88e6p8v', 'template_3j13nsr', formData, 'G6WF31jnHnmv9Cf0k')
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-rose-800 mb-10">Contact Me</h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-rose-600 text-white px-6 py-2 rounded-full font-medium hover:bg-rose-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Connect with me</h3>
          <div className="flex justify-center gap-8 text-4xl">
            <a
              href="https://github.com/yeswin7799"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub className="text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/yeswinchintapalli/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin className="text-[#0A66C2]" />
            </a>
            <a
              href="https://www.instagram.com/yeswin_ch/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram className="text-[#E1306C]" />
            </a>
            <a
              href="https://leetcode.com/u/yeswin999/"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
              className="hover:scale-110 transition-transform"
            >
              <FaCode className="text-yellow-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
