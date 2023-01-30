import { motion } from 'framer-motion'
import React from 'react'

interface Props {
    
}

export const ExperienceCard = (props: Props) => {
    return (
        <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
            initial={{
                y:-100,
                opacity:0

            }}
            transition={{
                duration:1.2
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            viewport={{
                once:true
            }}
            src="https://cdn.pixabay.com/photo/2016/06/19/12/46/woman-1466628__480.jpg"
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
            />

            <div className='text-white px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Software Development Intern</h4>
                <p className='font-bold text-2xl mt-1'>Local Entrepreneurs</p>
                <div className='flex space-x-2 my-2'>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png" className='h-10 w-10 rounded-full'/>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png" className='h-10 w-10 rounded-full'/>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png" className='h-10 w-10 rounded-full'/>

                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... -Ended...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </li>
                </ul>
            </div>
        </article>
    )
}
