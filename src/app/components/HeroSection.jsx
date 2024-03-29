"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion"



const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div 
              initial={{opacity: 0, scale:0.5 }} 
              animate={{ opacity:1, scale:1 }} 
              transition={{ duration:0.5 }} 
              className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
            >
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from bg-primary-400 to-secondary-50">
                    Hello, I'm{" "}
                  </span>
                  <br /> 
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'André',
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Data Scientist',
                      2000,
                      'Software Developer',
                      2000,
                    
                    ]}
                    wrapper="span"
                    speed={5}
                    // style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </h1>
                <p className='text-[#ADB7BE] text-base  sm:text-lg mb-6 lg:text-xl text-justify'>
                Experienced data scientist with a proven track record of leveraging Python, PySpark,
                Pandas, Numpy, Scikit-learn, SQL, AWS, and PowerBI to extract valuable insights and
                drive data-driven decision-making. I have successfully applied data science, AI, and
                machine learning to tackle business challenges such as fraud detection, customer
                segmentation, and understanding customer behavior and product relationships.
                </p>
                <p className='text-[#ADB7BE] text-base  sm:text-lg mb-6 lg:text-xl text-justify'>
                I have collaborated closely with cross-functional teams in fraud, marketing, and product,
                developing my skills in ETL processes and data integration. My work involved wrangling
                diverse datasets, ranging in size and complexity, to uncover actionable insights and
                develop robust machine learning models.
                I also have good interdisciplinary communication skills, demonstrated through my ability
                to explain technical concepts and present insights to diverse audiences with varying
                backgrounds.
                </p>
                <div>
                  <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-50 hover:bg-slate-200 text-white border border-white'>Hire Me</button>

                  <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-50 hover:bg-slate-800 text-white border mt-3'>
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                  </button>

                </div>
            </motion.div>

            <motion.div 
              initial={{opacity: 0, scale:0.5 }} 
              animate={{ opacity:1, scale:1 }} 
              transition={{ duration:0.5 }} 
              className='col-span-4 place-self-center mt-4 lg:mt-0'
              >
              <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] relative sm:right-0 -right-12">
                <Image
                  // src="/images/hero-image.png"
                  src="/images/andre_profile.png"
                  alt="hero image"
                  className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>
        </div>
    </section>
  );

}

export default HeroSection