import React from 'react';
import Navbar from '../components/common/Navbar';

const Contact = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      {/* Contact Info Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-8">
          We’d love to hear from you! Feel free to reach out with any questions, comments, or feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Address */}
          <div className="flex-1 bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Our Address</h3>
            <p className="text-gray-800">
              1234 ema Street,<br />
              sector-000,<br />
              Faridabad, Haryana, 121000
            </p>
          </div>
          {/* Phone & Email */}
          <div className="flex-1 bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Contact Information</h3>
            <p className="text-gray-800 mb-4">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-800">
              <strong>Email:</strong> demo@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-400 to-blue-600">
        <h2 className="text-4xl font-extrabold mb-8 text-white">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-200">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
              required
              placeholder='Enter tyour full name'
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
              required
              placeholder='Enter your email'
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2 text-gray-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
              required
              placeholder='Type your message...'
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
