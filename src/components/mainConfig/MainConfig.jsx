'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";

function MainConfig() {
    const [brandName, setBrandName] = useState('example')
    const [brandSlogan, setBrandSlogan] = useState('lorem ipsum')
    const [textColor, setTextColor] = useState('#000')
    const [sloganColor, setSloganColor] = useState('#475569')
    const [bgColor, setBgColor] = useState('#fff')

    return (
        <div className='flex sm:flex-row flex-col justify-around gap-4 bg-purple-700 w-full h-full items-center rounded-xl p-4'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <label className='text-white font-bold text-lg' htmlFor="name">Brand name</label>
                    <input value={brandName} onChange={(e) => { setBrandName(e.target.value) }} className='p-2 rounded-lg outline-none w-full' id='name' placeholder='Type here...' type="search" />
                </div>
                <div className='flex flex-col gap-4'>
                    <label className='text-white font-bold text-lg' htmlFor="name">Brand slogan</label>
                    <input value={brandSlogan} onChange={(e) => { setBrandSlogan(e.target.value) }} className='p-2 rounded-lg outline-none w-full' id='name' placeholder='Type here...' type="search" />
                </div>
                <div className='flex flex-col gap-4'>
                    <label className='text-white font-bold text-lg' htmlFor="bg-color">Background color</label>
                    <input value={bgColor} onChange={(e) => { setBgColor(e.target.value) }} id='bg-color' type="color" />
                </div>
                <div className='flex flex-col gap-4'>
                    <label className='text-white font-bold text-lg' htmlFor="text-color">Text color</label>
                    <input value={textColor} onChange={(e) => { setTextColor(e.target.value) }} id='text-color' type="color" />
                </div>
                <div className='flex flex-col gap-4'>
                    <label className='text-white font-bold text-lg' htmlFor="text-color">Slogan text color</label>
                    <input value={sloganColor} onChange={(e) => { setSloganColor(e.target.value) }} id='text-color' type="color" />
                </div>


                <Link className='bg-white hover:bg-emerald-400 hover:text-white hover:font-bold duration-300 ease-in-out p-2 rounded-lg flex gap-3 items-center justify-center' href='https://github.com/JoaoVictorCalaca' target='_blank'> <FaGithub size={20}/> Creator's github</Link>
            </div>

            <div className='w-full md:w-1/3 select-none'>
                <h1 className='text-lg text-white font-bold mb-2'>Preview</h1>
                <div style={{ backgroundColor: `${bgColor}` }} className='w-full h-52 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-xl flex flex-col gap-5 p-1 justify-center items-center'>
                    <p style={{ color: `${textColor}` }} className='text-center w-3/4 text-5xl font-bold'>{brandName}</p>
                    <p style={{ color: `${sloganColor}` }} className='text-xl font-bold truncate'>{brandSlogan}</p>
                </div>
            </div>
        </div>
    )
}

export default MainConfig