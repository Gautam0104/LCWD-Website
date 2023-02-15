import React from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

const Community = () => {
  const [counterOn, setcounterOn] = useState(false)

  return (
    
      
<div className="flex flex-col">
<h1 className="text-center text-2xl font-bold underline underline-offset-8 text-primary-dark lg:text-5xl mt-4 lg:mt-14 mb-8">
 Our Community 
</h1>
<div className="flex flex-col-reverse justify-center text-gray-700 py-8 lg:flex-row lg:py-14">
<div className="flex flex-col justify-center mt-8 lg:mt-0">
<div>
<h1 className="border-b-2 border-t-2 border-red-600 mx-auto w-fit py-2 px-7 text-center text-red-600 font font-semibold text-4xl lg:px-12 lg:text-5xl">
   <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
    {counterOn && <CountUp start={0} end={20000000}  duration={2} delay={0}/>}+
    </ScrollTrigger>
   
</h1>
</div>
<div className="mt-5">
<h1 className="text-center !text-black font font-semibold text-5xl lg:text-6xl">YouTube Views</h1>
<h2 className="mt-2 text-zinc-800 text-center text-md lg:text-lg">Strong community we are building for coders.</h2>
<div className="mt-6 flex flex-row justify-center space-x-8"><a target="_blank" href="https://www.youtube.com/learncodewithdurgesh">
<h1 className="bg-secondary-medium hover:bg-secondary-dark text-white transition-all ease-in-out px-4 py-2 rounded-xl text-lg lg:text-xl">Show Profile</h1>
</a>
<a target="_blank" href="https://t.me/learncodewithdurgesh">
<h1 className="bg-secondary-medium hover:bg-secondary-dark text-white transition-all ease-in-out px-4 py-2 rounded-xl text-lg lg:text-xl">
Join Community
</h1>
</a>
</div>
</div>
</div>
<div className="hidden lg:block rounded-full lg:mx-24 xl:mx-36 border-[1px] my-10 border-zinc-400">
</div>
<div>
<img alt="Durgesh_Sir_Photo"  src="/Imgs/durgesh_sir.jpg" width="800" height="800" className="rounded-full w-64 lg:w-80 lg:mx-0 mx-auto"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3 py-10 px-4 bg-yellow-light lg:flex lg:flex-row lg:justify-center">
<div className="flex flex-row justify-center py-5">
<div className="flex flex-col justify-center">
<img alt="SocialMediaHandleImage" src="/Imgs/youtube.png" width="512" height="512" className="w-12 lg:w-20 mr-3"/>
</div>
<div className="flex flex-col justify-center">
<h1 className="!text-black text-center font-semibold text-[1.7rem] lg:text-[3.2rem] px-6">
    <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
    {counterOn && <CountUp start={0} end={175}  duration={2} delay={0}/>}K+
    </ScrollTrigger>

</h1>
<p className="text-center text-md lg:text-xl">Subscribers</p>
</div>
</div>
<div className="hidden lg:block rounded-full border-[1px] border-zinc-500 mx-7"></div>
<div className="flex flex-row justify-center py-5"><div className="flex flex-col justify-center">
<img alt="SocialMediaHandleImage"  src="/Imgs/facebook.png" width="512" height="512"  className="w-12 lg:w-20 mr-3" />
</div>
<div className="flex flex-col justify-center">
<h1 className="!text-black text-center font-semibold text-[1.7rem] lg:text-[3.2rem] px-6">
  1.3K+
  </h1>
<p className="text-center text-md lg:text-xl">Followers</p>
</div>
</div>
<div className="hidden lg:block rounded-full border-[1px] border-zinc-500 mx-7">
</div>
<div className="flex flex-row justify-center py-5">
<div className="flex flex-col justify-center">
<img alt="SocialMediaHandleImage"  src="/Imgs/instagram.png" width="512" height="512" className="w-12 lg:w-20 mr-3" />
</div>
<div className="flex flex-col justify-center">
<h1 className="!text-black text-center font-semibold text-[1.7rem] lg:text-[3.2rem] px-6">
  <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
    {counterOn && <CountUp start={0} end={5926}  duration={2} delay={0}/>}+
    </ScrollTrigger>
  
  </h1>
<p className="text-center text-md lg:text-xl">Followers</p>
</div>
</div>
<div className="hidden lg:block rounded-full border-[1px] border-zinc-500 mx-7">
</div>
<div className="flex flex-row justify-center py-5">
<div className="flex flex-col justify-center">
<img alt="SocialMediaHandleImage"  src="/Imgs/linkedin.png" width="512" height="512"  className="w-12 lg:w-20 mr-3" />
</div>
<div className="flex flex-col justify-center">
<h1 className="!text-black text-center font-semibold text-[1.7rem] lg:text-[3.2rem] px-6">
   <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
    {counterOn && <CountUp start={0} end={4096}  duration={2} delay={0}/>}+
    </ScrollTrigger>
  
  </h1>
<p className="text-center text-md lg:text-xl">Followers</p>
</div>
</div>
</div>
</div>
    
  )
}

export default Community
