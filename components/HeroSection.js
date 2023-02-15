import React from 'react'
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
  return (

    
          <div className="flex flex-col lg:flex-row lg:h-[89vh]">
 
    +<div className="px-3 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:px-0"> 
    <img alt="Man With Computer" src="/Imgs/mancom.png" width="787" height="572"  className="mx-auto w-[400px] md:w-[500px] lg:w-[400px] xl:w-auto" />
     </div>
    <div className="hidden lg:inline-flex rounded-full lg:my-16 xl:my-24 border-[1px] border-zinc-500">
    </div>
    <div className="flex flex-col justify-center lg:w-1/2">
    <h1 className="text-center text-[2.5rem] xl:text-6xl font-bold py-6 lg:py-7 text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 ">
    Learn Code With Durgesh
    </h1>
    <div className="mt-1 flex flex-row justify-center font-semibold text-2xl lg:text-3xl xl:text-4xl text-zinc-600">
    <h1 className="text-center mr-2"> Master

    </h1>

    <h1 className="text-center">    <Typewriter
  options={{
    strings: ['Coding', 'Programming', 'Development', 'Logic Building', 'Technology', 'Skills'],
    autoStart: true,
    loop: true,
    
    delay: 75,
  }}
/></h1>
    {/* <span className="typed-cursor" aria-hidden="true">|</span> */}
    </div>
    <p className="mt-4 text-center mx-auto text-zinc-600 lg:mt-7 xl:mt-10 sm:w-[700px] lg:w-[90%] lg:text-base xl:text-lg lg:mx-auto xl:font-semibold xl-w-4/5">Best Video Courses in <b>HINDI</b>, These courses are totally free of cost. Thousands of people learn from these courses daily. Our effort is to make you learn the technology in Practical way.</p>
    <div className="mt-10 flex flex-row justify-center font-semibold text-zinc-600 xl:mt-16">
      <a target="_blank" href="https://courses.learncodewithdurgesh.com/learn">
        <h1 className="mx-2 border-2 px-3 py-2 rounded-xl border-primary-medium lg:mx-8 xl:mx-16 lg:hover:border-primary-dark lg:bg-hover-primary lg:hover:text-white lg:transition-all lg:ease-in-out lg:px-2 xl:px-5 lg:py-3 lg:text-lg xl:text-2xl lg:text-zinc-600">
          Premium Courses
          </h1>
        </a>
        <a href="/">
          <h1 className="mx-2 border-2 px-3 py-2 rounded-xl border-secondary-medium lg:mx-8 xl:mx-16 lg:hover:border-secondary-dark lg:bg-hover-secondary lg:hover:bg-secondary-dark lg:hover:text-white lg:transition-all lg:ease-in-out lg:px-2 xl:px-5 lg:py-3 lg:text-lg xl:text-2xl lg:text-zinc-600">
            Top Free Courses
            </h1>
    </a>
    </div>
    <div className="mt-10 flex flex-col justify-center">
    <div className="flex flex-row justify-center mb-2 xl:mb-4">
    <div className="border-2 border-secondary-dark rounded-full mx-1">
    <svg className="w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
    </path>
    </svg>
    </div>
    <div className="border-2 border-secondary-dark rounded-full mx-1">
    <svg className="w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
    </path>
    </svg>
    </div>
    <div className="border-2 border-secondary-dark rounded-full mx-1">
    <svg className="w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
    </path>
    </svg>
    </div>
    <div className="border-2 border-secondary-dark rounded-full mx-1">
    <svg className="w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
    </path>
    </svg>
    </div>
    <div className="border-2 border-secondary-dark rounded-full mx-1">
    <svg className="w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
    </path>
    </svg>
    </div>
    <div className="border-2 border-secondary-dark rounded-full mx-1"><svg className="w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
    </path>
    </svg>
    </div>
    </div>
    <p className="text-center font-bold lg:text-2xl xl:text-3xl">2000+</p><p className="text-center text-gray-700 text-lg lg:text-base xl:text-xl">Happy Students</p>
    </div>
    </div>
    </div>
    
  )
}

export default HeroSection
