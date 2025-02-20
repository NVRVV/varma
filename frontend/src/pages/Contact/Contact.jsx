import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import contact from '../../assets/contact_img.png';
import linked from "../../assets/Linked.png";
import github from "../../assets/Github.png";
import instagram from "../../assets/Instagram.png";

const Contact = () => {
  const form = useRef();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Function to update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    emailjs
      .sendForm('service_6338mca', 'template_hb4ddxo', form.current, 'mwS1nwWzuJ3Ynnig7')
      .then(
        () => {
          alert('Form submitted successfully!');
        },
        (error) => {
          alert('Failed to send email. Please try again.');
        }
      );
  };

  const handlePhoneChange = (event) => {
    const sanitizedValue = event.target.value.replace(/\D/g, '');
    setPhoneNumber(sanitizedValue.length > 10 ? sanitizedValue.slice(0, 10) : sanitizedValue);
  };

  return (
    <>
      <section id="contact" className='bg-bg1 flex justify-center'>
        <h1 className='text-5xl mt-20'>Contact <span className='text-secondary'>Me</span></h1>
      </section>
      
      {/* Conditional Rendering Based on Screen Size */}
      {isMobile ? (
        <section className="flex flex-col items-center pt-10">
          <form ref={form} onSubmit={sendEmail} className='text-xl flex flex-col px-5 w-full max-w-md'>
            <label className='pt-5'>Name</label>
            <input type="text" placeholder='Enter your Name' className='shadow-md p-2 rounded-lg' name="from_name" required />
            
            <label className='pt-5'>Email</label>
            <input type="email" placeholder='Enter your Email' className='shadow-md p-2 rounded-lg' name="from_email" required />
            
            <label className='pt-5'>Phone Number</label>
            <input type="tel" value={phoneNumber} onChange={handlePhoneChange} required maxLength={10} pattern="\d{10}" inputMode='numeric' placeholder='Enter your Phone Number' className='shadow-md p-2 rounded-lg' name="from_number" />
            
            <label className='pt-5'>Message</label>
            <textarea placeholder='Enter your Message' className='shadow-md p-2 h-30 rounded-lg' name="message" required />

            <button type='submit' className="btn mt-5">Send Message</button>
          </form>
        </section>
      ) : (
        <section className="flex flex-row justify-center pt-20">
          <form ref={form} onSubmit={sendEmail} className='text-xl flex flex-row space-x-10 w-full max-w-4xl'>
            <div className="flex flex-col pr-15">
              <label className='pt-5'>Name</label>
              <input type="text" placeholder='Enter your Name' className='shadow-md p-2 rounded-lg' name="from_name" required />
              
              <label className='pt-5'>Email</label>
              <input type="email" placeholder='Enter your Email' className='shadow-md p-2 rounded-lg' name="from_email" required />
              
              <label className='pt-5'>Phone Number</label>
              <input type="tel" value={phoneNumber} onChange={handlePhoneChange} required maxLength={10} pattern="\d{10}" inputMode='numeric' placeholder='Enter your Phone Number' className='shadow-md p-2 rounded-lg' name="from_number" />
            </div>

            <div className="flex flex-col ">
              <label className='pt-5'>Message</label>
              <textarea placeholder='Enter your Message' className='shadow-md p-2 h-40 rounded-lg' name="message" required />

              <button type='submit' className="btn mt-5">Send Message</button>
            </div>

            <div className="flex items-end">
              <img src={contact} alt="Contact" className="w-60" />
            </div>
          </form>
        </section>
      )}

      <footer className='footer'>
        <div className="social">
          <a href="https://www.linkedin.com/in/venkata-ram-vishal-varma-namepalli">
            <img src={linked} alt="LinkedIn" />
          </a>
          <a href="https://github.com/NVRVV">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/mr.vv_003/">
            <img src={instagram}alt="Instagram" />
          </a>
        </div>

        <ul className="list">
          <li><a href="#contact">FAQ</a></li>
          <li><a href="#home">About Me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <p className="copyright">
          &#169; Varma Namepalli | All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Contact;
