import React, { useState, useEffect } from 'react';
import '../styles/Global.css';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Function to update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section id='home' className='pt-10 flex justify-center'>
        
      </section>

      {/* Conditional Rendering Based on Screen Size */}
      {isMobile ? (
        <section className="flex flex-col items-center pt-10 px-5 text-xl">
          <h1 className='text-4xl text-start italic'>Hello, I'm <span className='text-secondary'>Varma Namepalli</span></h1>
          <h2 id='text-animation' className='text-3xl mt-5'>I'm <span className='text-secondary'></span></h2>
          <div className="flex justify-center mt-5">
            <img id='img1' className='w-40' src="src/assets/namaste.png" alt="Namaste" />
          </div>
          <p className='text-justify mt-5'>
            My goal is to leverage my expertise in building responsive and intuitive Web and Mobile Applications 
            to enhance user satisfaction and drive business success.
          </p>
          <div className="flex justify-center space-x-4 mt-5">
            <a href="https://www.linkedin.com/in/venkata-ram-vishal-varma-namepalli">
              <img src="src/assets/Linked.png" alt="LinkedIn" className="w-8" />
            </a>
            <a href="https://github.com/NVRVV">
              <img src="src/assets/Github.png" alt="GitHub" className="w-8" />
            </a>
            <a href="https://www.instagram.com/mr.vv_003/">
              <img src="src/assets/Instagram.png" alt="Instagram" className="w-8" />
            </a>
          </div>
          <div className="mt-5">
            <a href="#contact" className='btn'>Contact Me</a>
          </div>
        </section>
      ) : (
        <section className="flex flex-row justify-center pt-20 px-20 text-2xl">
          <div className="flex-9 flex flex-col p-4 bg-bg1">
            <h1 className='text-5xl text-start italic'>Hello, I'm <span className='text-secondary'>Varma Namepalli</span></h1>
            <h2 id='text-animation' className='text-4xl mt-5'>I'm <span className='text-secondary'></span></h2>
            <p className='text-justify mt-5'>
              My goal is to leverage my expertise in building responsive and intuitive Web and Mobile Applications 
              to enhance user satisfaction and drive business success.
            </p>
            <div id='social_icons' className="flex  space-x-4 mt-5">
              <a href="https://www.linkedin.com/in/venkata-ram-vishal-varma-namepalli">
                <img src="src/assets/Linked.png" alt="LinkedIn" className="w-10" />
              </a>
              <a href="https://github.com/NVRVV">
                <img src="src/assets/Github.png" alt="GitHub" className="w-10" />
              </a>
              <a href="https://www.instagram.com/mr.vv_003/">
                <img src="src/assets/Instagram.png" alt="Instagram" className="w-10" />
              </a>
            </div>
            <div className="mt-5">
              <a href="#contact" className='btn'>Contact Me</a>
            </div>
          </div>
          <div className='flex-6 h-max  flex justify-center'>
            <img id='img1' className='w-80' src="src/assets/namaste.png" alt="Namaste" />
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
