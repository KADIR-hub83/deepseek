'use client';
import { assets } from '../../assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import PromontBox from '../../components/PromontBox';
import Message from '../../components/Message';


export default function Home() {

     const [expand , setExpand] = useState(true);
     const [messages , setMessages] = useState([]);
     const [isloading , setIsLoading] = useState(false);

  return (
      <div>
        <div className='flex h-screen'>
          <SideBar expand={expand} setExpand={setExpand} />
           <div className='flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative'>
            <div className='md:hidden absolute px-4 top-6 flex items-center justify-between w-full'>
              <Image 
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              className='rotate-180 ' src={assets.menu_icon} alt='menu-icon' 
              />

              <Image className='opacity-70' src={assets.chat_icon} alt='chat-icon'/>

            </div>

       {messages.length === 0 ? (
        <>
         <div className='flex items-center gap-3'>
          <Image src={assets.logo_icon} alt='logo' className='h-16'/>
          <p className='font-medium text-2xl'>HI, I`m HYI.AI AGENT.</p>
         </div>
         <p className='text-sm mt-2'>How Can I Help You Today?</p>
        </>
       ):
       (
       <div>
          <Message role='user' content='What is next js'/>
       </div>
       )
       }

       

    <PromontBox isloading={isloading} setIsLoading={setIsLoading}  />
       <p className='text-sm absolute bottom-1 text-gray-500'>AI-Genrated,For Refrance Only</p>

           </div>
        </div>
      </div>
  );
}
