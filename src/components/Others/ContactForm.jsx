import { useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              name="user_name" 
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
              placeholder="Your name" 
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="user_email" 
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
              placeholder="Your email" 
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              name="message" 
              rows="4" 
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
              placeholder="Your message" 
              required 
            ></textarea>
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
