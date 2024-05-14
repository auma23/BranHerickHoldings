
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { useForm} from 'react-hook-form';
import { useState } from "react";
import emailjs from 'emailjs-com';


function Contact() {
   const { register, formState: { errors } } = useForm();

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all required fields are filled out
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
  
    // If all required fields are filled out, proceed with sending the email
    const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_APP_EMAILJS_API_KEY;
  
    emailjs.sendForm(serviceID, templateID, e.target, apiKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        // Clear the form fields after successful submission
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        // Optionally, display a success message to the user
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Email failed to send:', error.text);
        // Optionally, display an error message to the user
        alert('Failed to send message. Please try again later.');
      });  

  };

  return (
    <div className="max-w-screen-lg mx-auto p-5" id='contact'>
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-licorice md:col-span-4 p-10 text-white text-left">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-harvestGold">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
          Do you have questions about how BranHerick International can help your company? Send us an email and we’ll get in touch shortly, or phone between 8:00 and 18:00 Monday to Saturday — we would be delighted to speak.
          </p>
          <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faHome} className="h-6 mr-2 text-harvestGold" />
            <span className="text-sm">Posta Apartments, Ring Road Westlands, Nairobi - Kenya</span>
          </div>
          <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faEnvelope} className="h-6 mr-2 text-harvestGold" />
            <span className="text-sm">info@branherickinternational.com</span>
          </div>
          <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faPhoneAlt} className="h-6 mr-2 text-harvestGold" />
            <span className="text-sm">+254 733 139 202</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                id="firstName"
                name='firstName'
                type="text"
                placeholder="Jane"
                {...register('firstName', { required: true })}
                value={formData.firstName} onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
    Last Name
  </label>
  <input
    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
    id="lastName"
    type="text"
    name='lastName'
    placeholder="Doe"
    {...register('lastName', { required: true })}
    value={formData.lastName} onChange={handleChange}
  />
  {errors.lastName && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
</div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                    id="email"
                    type="email"
                    name='email'
                    placeholder="youremail@example.com"
                    {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ })}
                    value={formData.email} onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>
                  )}
                </div>
                <div className="w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500 h-32 resize-none`}
                    id="message"
                    name='message'
                    {...register('message', { required: true })}
                    placeholder="Write your message here"
                    value={formData.message} onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs italic">Please enter a message.</p>}
                </div>
                <div className="flex justify-between w-full px-3">
                  <div className="md:flex md:items-center">
                    <label className="block text-gray-500 font-bold">
                      <input className="mr-2 leading-tight" type="checkbox" {...register('newsletter')} />
                      <span className="text-sm">Send me your newsletter!</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="shadow bg-licorice hover:bg-earthYellow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          );
          }
          
          export default Contact;