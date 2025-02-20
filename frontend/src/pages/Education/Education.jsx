import React, { useState, useEffect } from 'react';
import './Education.css';
import { fetchDetailsData } from '../../services/api';
import education from '../../assets/education.png';
import work from '../../assets/Work.png';

const Education = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDetailsData();
                setDetails(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Check the initial window size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <>
            <section id='education' className='bg-bg2 p-10'>
                <h1 className='text-center text-5xl pt-10'>Education and Experience</h1>
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-col'}`}>
                    {isMobile ? (
                        <>
                            {/* Mobile View */}
                            {details.map((detail) => {
                                let imageSrc;
                                let altText;

                                if (detail.type === 'Education') {
                                    imageSrc = {education};
                                    altText = 'Education Icon';
                                } else {
                                    imageSrc = {education};
                                    altText = 'Work Icon';
                                }

                                return (
                                    <div key={detail.id} className="flex flex-col p-10">
                                        <div className="flex flex-row align-center justify-center">
                                            <img src={imageSrc} className='h-20 w-20' alt={altText} />
                                        </div>
                                        <div className='card-details w-full bg-header p-2'>
                                            <h2 className='text-2xl text-center'>{detail.heading}</h2>
                                            <p className='text-center'>
                                                {detail.paragraph || `I have completed my Diploma course in the stream of Computer Engineering at Andhra Polytechnic College, Kakinada. My course duration is from 2018 to 2021.`}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {/* Desktop View */}
                            {details.map((detail) => {
                                let imageSrc;
                                let altText;

                                if (detail.type === 'Education') {
                                    imageSrc = {education};
                                    altText = 'Education Icon';
                                  } else {
                                    imageSrc = {education};
                                    altText = 'Work Icon';
                                  }

                                return detail.id % 2 !== 0 ? (
                                    <div key={detail.id} className="flex flex-row md:flex-col p-4">
                                        <div className="flex flex-10 flex-col md:flex-row p-10">
                                            <div className="flex flex-1 align-center justify-end">
                                                <img
                                                    src={imageSrc}
                                                    className='h-20 w-20'
                                                    alt={altText}
                                                />
                                                <h2 className="text-3xl mt-5">----------------------</h2>
                                            </div>
                                            <div className='card-details w-75 h-flex justify-center bg-header p-2'>
                                                <h2 className='flex text-2xl justify-center'>{detail.heading}</h2>
                                                <p className='flex flex-col'>
                                                    {detail.paragraph || `I have completed my Diploma course in the stream of Computer Engineering at Andhra Polytechnic College, Kakinada. My course duration is from 2018 to 2021.`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={detail.id} className="flex flex-10 flex-col md:flex-row p-10">
                                        <div className='card-details w-75 h-flex justify-center bg-header p-2'>
                                            <h2 className='flex text-2xl justify-center'>{detail.heading}</h2>
                                            <p className='flex flex-col'>
                                                {detail.paragraph || `I graduated from Aditya Engineering College, Surampalem, in the stream of Computer Science and Engineering. My course duration was from 2021 to 2024.`}
                                            </p>
                                        </div>
                                        <div className="flex flex-1 align-center justify-start">
                                            <h2 className="text-3xl mt-5">----------------------</h2>
                                            <img
                                                src={imageSrc}
                                                className='h-20 w-20'
                                                alt={altText}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default Education;
