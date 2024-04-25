import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_APP_EMAILJS_API_KEY;

    emailjs.sendForm(serviceID, templateID, e.target, apiKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        // Optionally, clear the form fields after successful submission
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('Email failed to send:', error.text);
      });
  };
  return (
    
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-harvestGold dark:text-blue-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">For any inquiries reach us</p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
              Do you have questions about how BranHerick International can help your company? Send us an email and we’ll get in touch shortly, or phone between 8:00 and 18:00 Monday to Saturday — we would be delighted to speak.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-harvestGold text-gray-50">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-licorice dark:text-white">Our Address</h3>
                    <p className="text-gray-600 dark:text-slate-400"> Posta Apartments, Ring Road Westlands</p>
                    <p className="text-gray-600 dark:text-slate-400">Nairobi - Kenya</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-harvestGold text-gray-50">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-licorice dark:text-white">Contact</h3>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +254 733 139 202</p>
                    <p className="text-gray-600 dark:text-slate-400">eMail: info@branherickholdingslimited.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-harvestGold text-gray-50">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-licorice dark:text-white">Working hours</h3>
                    <p className="text-gray-600 dark:text-slate-400">Monday - Saturday: 08:00 - 18:00</p>
                    <p className="text-gray-600 dark:text-slate-400"> Closed on Sundays</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">Request a Call back</h2>
              <form id="contactForm" onSubmit={handleSubmit} >
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"  value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea id="textarea" name="message" value={formData.message} onChange={handleChange} cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-licorice text-white px-6 py-3 font-xl rounded-md sm:mb-0 hover:bg-harvestGold">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Contact;

