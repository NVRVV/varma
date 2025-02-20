import React, { useState, useEffect } from 'react';

const About = () => {
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
      <section id="about" className='bg-bg2  flex justify-center'>
      </section>

      {/* Conditional Rendering Based on Screen Size */}
      {isMobile ? (
        <section className="flex flex-col items-center pt-20 pb-10 px-5 text-xl bg-bg2">
          <h1 className='text-5xl mt-10 text-center'>About <span className='text-secondary'>Me</span></h1>
          <div className="flex justify-center">
            <img src="src/assets/about.png" alt="About Me" className="w-60" />
          </div>
          
          <p className='text-justify mt-5'>
            Hi, I'm Venkata Ram Vishal Varma Namepalli, a web developer passionate about creating intuitive digital experiences. 
            I specialize in React JS and Tailwind CSS for web development, and I use Vercel and Netlify for deployment. 
            Additionally, I work with Flutter for mobile apps and focus on UI/UX design.
          </p>
          <p className='text-justify mt-5 pb-10'>
            I actively use GitHub for version control and enjoy exploring new technologies. In my free time, I contribute to 
            open-source projects and attend industry meetups to stay connected and updated.
          </p>
        </section>
      ) : (
        <section className="flex flex-row justify-center pt-20 pb-20 px-20 text-2xl bg-bg2 ">
          
          <div className="flex-5 flex justify-center">
            <img src="src/assets/about.png" alt="About Me" className="w-70" />
          </div>
          
          <div className="flex-10 ml-10">
            <h1 className='text-5xl pb-10  text-center'>About <span className='text-secondary'>Me</span></h1>
            <p className='text-justify'>
              Hi, I'm Venkata Ram Vishal Varma Namepalli, a web developer passionate about creating intuitive digital experiences. 
              I specialize in React JS and Tailwind CSS for web development, and I use Vercel and Netlify for deployment. 
              Additionally, I work with Flutter for mobile apps and focus on UI/UX design.
            </p>
            <p className='text-justify mt-5'>
              I actively use GitHub for version control and enjoy exploring new technologies. In my free time, I contribute to 
              open-source projects and attend industry meetups to stay connected and updated.
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
