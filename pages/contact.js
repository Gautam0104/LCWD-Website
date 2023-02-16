import Form from '@/components/Form'
import { Container } from 'postcss'
import React from 'react'

const contact = () => {
  return (
    <div classNameName='mt-16'>
     <div className="z-40 h-[36rem] flex flex-col justify-center bg-cover custom-img   " >
<div className="rounded-3xl drop-shadow-2xl w-80 lg:w-fit mx-auto  bg-zinc-400/30 lg:bg-zinc-300/40 backdrop-blur-2xl py-4 ">
<img alt="LCWD Logo" src='/Imgs/lcwd_logo.png' width="500" height="500" decoding="async" data-nimg="1" className="w-36 lg:w-48 mx-auto" />
<h1 className="text-center text-primary-dark text-4xl lg:text-7xl font-semibold px-5 lg:px-24 mt-3">
Feel Free to Contact Us
</h1>
<h1 className="text-center text-white px-5 lg:px-0 font-semibold lg:text-2xl my-4">
Kindly Follow Us on Different Social Medias
</h1>
<div className="rounded-full border-[1px] border-white">
</div>
<div className="flex flex-row justify-center space-x-7 lg:space-x-16 px-5 lg:px-0 my-6">
<a rel="noreferrer" target="_blank" href="https://instagram.com/durgesh_k_t">
<img alt="Instagram Logo" src='/Imgs/instagram.png' width="512" height="512"  className="w-16 transition-all ease-linear hover:-translate-y-2" />
</a>
<a rel="noreferrer" target="_blank" href="https://www.youtube.com/learncodewithdurgesh">
<img alt="Youtube Logo" src='/Imgs/youtube.png' width="512" height="512"  className="w-16 transition-all ease-linear hover:-translate-y-2" />
</a>
<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/durgeshkumartiwari/">
<img alt="Linkedin Logo" src='/Imgs/linkedin.png' width="512" height="512"  className="w-16 transition-all ease-linear hover:-translate-y-2" />
</a>
<a rel="noreferrer" target="_blank" href="https://www.facebook.com/learncodewithdurgesh">
<img alt="Facebook Logo" src='/Imgs/facebook.png' width="512" height="512"  className="w-16 transition-all ease-linear hover:-translate-y-2" />
</a>
</div>
<div className="rounded-full border-[1px] border-white">
</div>
</div>
</div>



<div>
  <Form />
</div>




    </div>
  )
}

export default contact
