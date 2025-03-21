import React, { useState, useEffect } from 'react';
import './Education.css';
import education from '../../assets/education.png';
import work from '../../assets/Work.png';

const details = [
    {
        id: 1,
        type: 'Education',
        heading: 'Diploma in Computer Engineering',
        paragraph: 'I have completed my Diploma course in the stream of Computer Engineering at Andhra Polytechnic College, Kakinada. My course duration is from 2018 to 2021.'
    },
    {
        id: 2,
        type: 'Education',
        heading: 'B.Tech in Computer Science and Engineering',
        paragraph: 'I graduated from Aditya Engineering College, Surampalem, in the stream of Computer Science and Engineering. My course duration was from 2021 to 2024.'
    }
];

const Education = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id='education' className='bg-bg2 p-10'>
            <h1 className='text-center text-5xl pt-10'>Education and Experience</h1>
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-col'}`}>
                {details.map((detail) => {
                    let imageSrc = detail.type === 'Education' ? education : work;
                    let altText = detail.type === 'Education' ? 'Education Icon' : 'Work Icon';

                    return (
                        <div key={detail.id} className={`flex ${isMobile ? 'flex-col' : 'flex-row md:flex-col'} p-2 lg:p-10`}>
                            {isMobile ? (
                                <div className="flex flex-col  p-2">
                                    <div className="flex flex-row align-center justify-center">
                                        <img src={imageSrc} className='h-20 w-20' alt={altText} />
                                    </div>
                                    <div className='card-details w-full shadow-lg shadow-primary bg-header p-2'>
                                        <h2 className='text-2xl text-center'>{detail.heading}</h2>
                                        <p className='text-center'>{detail.paragraph}</p>
                                    </div>
                                </div>
                            ) : (
                                detail.id % 2 !== 0 ? (
                                    <div className="flex flex-row md:flex-col p-4">
                                        <div className="flex flex-10 flex-col md:flex-row p-10">
                                            <div className="flex flex-1 align-center justify-end">
                                                <img src={imageSrc} className='h-20 w-20' alt={altText} />
                                                <h2 className="text-3xl mt-5">----------------------</h2>
                                            </div>
                                            <div className='card-details w-75 h-flex justify-center bg-header p-2'>
                                                <h2 className='flex text-2xl justify-center'>{detail.heading}</h2>
                                                <p className='flex flex-col'>{detail.paragraph}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-10 flex-col md:flex-row p-10">
                                        <div className='card-details w-75 h-flex justify-center bg-header p-2'>
                                            <h2 className='flex text-2xl justify-center'>{detail.heading}</h2>
                                            <p className='flex flex-col'>{detail.paragraph}</p>
                                        </div>
                                        <div className="flex flex-1 align-center justify-start">
                                            <h2 className="text-3xl mt-5">----------------------</h2>
                                            <img src={imageSrc} className='h-20 w-20' alt={altText} />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Education;
