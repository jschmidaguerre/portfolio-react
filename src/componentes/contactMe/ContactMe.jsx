import React from 'react';

const ContactMe = () => {
  return (
    <section id="contact-me" className="py-20 bg-gray-800 text-white">
      {/* Content */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
        <div className="flex flex-col md:flex-row">
          {/* Form */}
          <div className="w-full md:w-1/2">
            <form
              action="https://formspree.io/f/xkgnblle"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-lg mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 rounded bg-gray-700 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="message"
                  id="message"
                  required
                ></textarea>
              </div>
              {/* Hidden input for Formspree to redirect to a thank you page */}
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
              <button
                type="submit"
                className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 md:pl-12 mt-10 md:mt-0">
            <p className="text-lg mb-4">
              Feel free to reach out to me for any project or collaboration.
            </p>
            <p className="text-lg">
              Email: <a href="mailto:juanseaguerre@gmail.com">juanseaguerre@gmail.com</a>
            </p>
            <p className="text-lg">
              Phone: <a href="tel:+541133690090">+54 11 3369-0090</a>
            </p>
            {/* Add any additional contact information here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
