import React, { useState } from 'react';
import './Projects.css';
import sample from '../../assets/sample_img.png';

const Projects = () => {
  const [selectedButton, setSelectedButton] = useState('All');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <section id='projects' className='bg-bg1 p-5 justify-center items-center text-center'>
        <div className="justify-center flex">
            <h1 className='text-5xl mt-10 italic text-primary'>Projects and Ideas</h1>
        </div>
        <div className="project-button p-2 md:p-2">
            <button
                className={`bg-bg1 text-primary cursor-pointer p-2 pl-5 pr-5 rounded-lg m-2 ${selectedButton === 'All' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('All')}
            >
            All
            </button>
            <button
                className={`bg-bg1 text-primary cursor-pointer p-2 pl-5 pr-5 rounded-lg m-2 ${selectedButton === 'Web' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('Web')}
            >
                Web
            </button>
            <button
                className={`bg-bg1 text-primary cursor-pointer p-2 pl-5 pr-5 rounded-lg m-2 ${selectedButton === 'Mobile' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('Mobile')}
            >
            Mobile
            </button>
            <button
                className={`bg-bg1 text-primary cursor-pointer p-2 pl-5 pr-5 rounded-lg m-2 ${selectedButton === 'UI & UX' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('Design')}
            >
            Design
            </button>
        </div>
        <div className="flex flex-wrap  justify-center">
            <div id='cardsection' className={`card shadow-md shadow-primary justify-items-center p-2 m-2 ${selectedButton === 'Web' || selectedButton === 'All' ? '' : 'hidden'}`}>
                <h2 className='text-2xl'>Web Project</h2>
                <img src={sample} alt="" className='w-50 h-30'/>
                <p className='text-primary'>This is a web project</p>
                <button className="link-button">Link</button>
            </div>
            <div id='cardsection' className={`card shadow-md shadow-primary justify-items-center p-2 m-2 ${selectedButton === 'Mobile' || selectedButton === 'All' ? '' : 'hidden'}`}>
                <h2 className='text-2xl'>Mobile Project</h2>
                <img src={sample} alt="" className='w-50 h-30'/>
                <p className='text-primary'>This is a mobile project</p>
                <button className="link-button">Link</button>
            </div>
            <div id='cardsection' className={`card shadow-md shadow-primary justify-items-center p-2 m-2 ${selectedButton === 'Design' || selectedButton === 'All' ? '' : 'hidden'}`}>
                <h2 className='text-2xl'>UI & UX Design</h2>
                <img src={sample} alt="" className='w-50 h-30'/>
                <p className='text-primary'>This is a UI & UX Design</p>
                <button className="link-button">Link</button>
            </div>
        </div>
    </section>
  );
};

export default Projects;
