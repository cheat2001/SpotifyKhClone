import React from 'react'
import Logo from "../Images/Spotify_White.png";
import { HomeIcon,SearchIcon ,LibraryIcon,PlusIcon,HeartIcon,XIcon} from '@heroicons/react/solid'
import {useState} from "react";
function SideBar() {
    const [action,setAction]=useState(false);
  return (
    <div className={`fixed w-64 h-screen bg-slate-900 p-8 left-0 top-0 opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto`}>
        <XIcon onClick={()=>alert("Hello World!")} HomeIcon className='sm:opacity-0 sm:pointer-events-none w-8 text-gray-50 absolute right-1 top-1 cursor-pointer'/>
        <div className=''>
    
            <img className='w-36' src={Logo} alt="" />
        </div>
        <div className='flex flex-col gap-5 mt-10'>
            <div  className='flex items-center gap-5 text-gray-400 cursor-pointer hover:text-gray-50'><HomeIcon className='w-8 '/><p>Home</p></div>
            <div  className='flex items-center gap-5 text-gray-400 cursor-pointer hover:text-gray-50'><SearchIcon className='w-8 '/><p>Search</p></div>
            <div  className='flex items-center gap-5 text-gray-400 cursor-pointer hover:text-gray-50'><LibraryIcon className='w-8 '/><p>Your Library</p></div>
        </div>
        <div className='flex flex-col gap-5 mt-10'>
            <div  className='flex items-center gap-5 text-gray-400 cursor-pointer hover:text-gray-50'><PlusIcon className='w-8 '/><p>Create Playlist</p></div>
            <div  className='flex items-center gap-5 text-gray-400 cursor-pointer hover:text-gray-50'><HeartIcon className='w-8 '/><p>Liked Songs</p></div>        </div>
    </div>
  )
}

export default SideBar