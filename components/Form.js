import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [openTab, setOpenTab] = React.useState(1);
    
 
  return (
    <div>
        <div className="flex flex-row justify-center" role="tablist" aria-orientation="horizontal">
<div className="flex flex-col lg:flex-row justify-center w-fit bg-yellow-400/30 p-2 rounded-xl space-y-2 lg:space-y-0 lg:space-x-2 mt-4 ">
<button className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-secondary-dark outline-0 border-2 border-transparent ui-selected:bg-white ui-selected:shadow ui-selected:border-secondary-dark ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-secondary-dark " 
+  
               (openTab === 2
                    ? " bg-white border-secondary-dark"
                    : "")}
                     id="headlessui-tabs-tab-:r0:" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r2:"       
                       onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                >
Student Query
</button>
<button className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-secondary-dark outline-0 border-2 border-transparent ui-selected:bg-white ui-selected:shadow ui-selected:border-secondary-dark ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-secondary-dark" + 
  (openTab === 1
    ? " bg-white border-secondary-dark "
    : "")
} id="headlessui-tabs-tab-:r1:" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:r3:" 
   onClick={e => {
    e.preventDefault();
    setOpenTab(1);
  }}
  data-toggle="tab"
  href="#link1"
  >
Corporate Enquiry
</button>
</div>
</div>
<div className={openTab === 1 ? "block" : "hidden"} id="link1">
      <div className="drop-shadow-2xl bg-white w-[90%] rounded-3xl lg:px-20 lg:w-1/2 lg:py-5 mx-auto mt-10">
<header className=" mt-5 text-center ">
<h1 className="font-bold  text-2xl lg:text-3xl xl:text-5xl">
Corporate Enquiry
</h1>
<div className="font-semibold mt-5 xl:mt-10 text-gray-500 text-sm lg:text-base">
<p>For any Corporate training/College training requirement please reach out to us on
 <b>learncodewithdurgesh@gmail.com</b> 
</p>
</div>
</header>
<main className="mt-8 flex flex-col">
<form className="flex flex-col mx-5 lg:mx-0">
<div className="relative flex flex-col mb-5 xl:mb-8">
<span className="pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
</svg>
</span>
<input className="pl-12 p-2 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-yellow-400 focus:ring focus:outline-none focus:ring-yellow-500 transition-all ease-linear" required="" type="text" placeholder="Organization Name" />
</div>
<div className="relative flex flex-col mb-5 xl:mb-8">
<span className="pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
</svg>
</span>
<input className="pl-12 p-2 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-yellow-400 focus:ring focus:outline-none focus:ring-yellow-500 transition-all ease-linear" required="" type="email" placeholder="Organization Email Address" />
</div>
<div className="relative flex flex-col mb-5 xl:mb-8"><span className="pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
</svg>
</span>
<input className="pl-12 p-2 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-yellow-400 focus:ring focus:outline-none focus:ring-yellow-500 transition-all ease-linear" required="" type="number" placeholder="Organization Contact No." />
</div>
<div className="relative flex flex-row mb-5 xl:mb-8">
<div className="w-2/5 flex flex-col justify-start">
<h1>Why Choosing Us ?</h1>
<p className="text-sm text-gray-500">Choose any one</p>
</div>
<div className="w-full">
<div id="headlessui-radiogroup-:r4:" role="radiogroup">
<div className="space-y-2" role="none">
<div className="bg-white relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400" id="headlessui-radiogroup-option-:r5:" role="radio" aria-checked="false" tabindex="0" data-headlessui-state="" aria-labelledby="headlessui-label-:r6:">
<div className="flex w-full items-center justify-between">
<div className="flex items-center">
<div className="text-md">
<p className="font-medium  text-gray-900" id="headlessui-label-:r6:">Development</p>
</div>
</div>
</div>
</div>
<div className="bg-white relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400" id="headlessui-radiogroup-option-:r7:" role="radio" aria-checked="false" tabindex="-1" data-headlessui-state="" aria-labelledby="headlessui-label-:r8:">
<div className="flex w-full items-center justify-between"><div className="flex items-center">
<div className="text-md">
<p className="font-medium  text-gray-900" id="headlessui-label-:r8:">Corporate Training</p>
</div>
</div>
</div>
</div>
<div className="bg-white relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400" id="headlessui-radiogroup-option-:r9:" role="radio" aria-checked="false" tabindex="-1" data-headlessui-state="" aria-labelledby="headlessui-label-:ra:">
<div className="flex w-full items-center justify-between">
<div className="flex items-center">
    <div className="text-md">
<p className="font-medium  text-gray-900" id="headlessui-label-:ra:">College Training</p>
</div>
</div>
</div>
</div>
<div className="bg-white relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  ring-2 ring-white ring-opacity-60 ring-offset-2  ring-offset-yellow-400" id="headlessui-radiogroup-option-:rb:" role="radio" aria-checked="false" tabindex="-1" data-headlessui-state="" aria-labelledby="headlessui-label-:rc:">
<div className="flex w-full items-center justify-between">
<div className="flex items-center">
<div className="text-md">
<p className="font-medium  text-gray-900" id="headlessui-label-:rc:">Seminar</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative flex flex-col mb-5 xl:mb-8">
<span className="pl-3 absolute inset-y-2 left-0 flex items-center text-gray-500 flex flex-col ">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
</svg>
</span>
<textarea rows="5" className="resize-none pl-12 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-yellow-400 focus:ring focus:outline-none focus:ring-yellow-500 transition-all ease-linear" required="" placeholder="Your Message"></textarea>
</div>
<button className="my-5 bg-yellow-400 hover:bg-yellow-500 transition-all ease-linear py-3 rounded-lg " type="submit">Submit</button>
</form>
</main>
</div>
</div>

<div className={openTab === 2 ? "block" : "hidden"} id="link2">
    <h1>tab is working</h1>
       <button className='border-black'      onClick={() => {
                 
                  setShow(true);
                }}
                data-toggle="tab"
                href="text"
                >true</button><br/>
       <button className='border-black'
             onClick={() => {
               
                setShow(false);
              }}
              data-toggle="tab"
              href="text">false</button>
    <div className={Show === true ? "block" : "hidden"} id="text">
        <h1>test is success</h1>
    </div>
</div>
    </div>
  )
}

export default Form
