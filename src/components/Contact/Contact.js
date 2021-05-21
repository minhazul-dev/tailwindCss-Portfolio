import React from 'react';
import contactP from '../../images/contact-us-banner.jpg'
import Navbar from '../Shared/Navbar/Navbar';
import emailjs from 'emailjs-com';
import Slide from 'react-reveal/Zoom';

const contact = () => {
  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_h4xcskk', 'template_cdtgiwj', e.target, 'user_3AtvRWKOixo5xVh0iWjnF')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

const alertMsg  = () => {
    alert("Message Sent Successfully")
}
    return (
        <section>
          <Navbar/>
        
        <section className="text-gray-600 body-font relative">
          
        <div className="absolute inset-0 bg-gray-300">
            <img src={contactP} alt="" />
        </div>
        <Slide left> 
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">GET IN TOUCH</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Send Me a Quick Message, I'll get back to you shortly </p>
            <div className="relative mb-4">
        <form onSubmit={sendEmail} action="">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              {/* <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label> */}
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {/* </div> */}
            {/* <div className="relative mb-4"> */}
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
              </form>
            </div>
           
            <button onClick={alertMsg} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>

            <p className="text-xs text-gray-500 mt-3">1212, Dhaka, Bangladesh</p>
          </div>
        </div>
        </Slide>
      </section>
      </section>
    );
};

export default contact;


