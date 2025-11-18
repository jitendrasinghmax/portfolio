'use client'
import Link from 'next/link';
import React from 'react';

const Contact = () => {
    return (
        <>
        <div className='w-full flex flex-col justify-center items-center border-t-2 px-10 bg-container border-t-gray-200  dark:border-t-gray-400'>
            <div className='text-primary'>
                jitendra singh
            </div>
            
                <div className='flex gap-x-5'>
                    <Link className='text-primary' href="https://instagram.com/the.jitengine">the.jitengine</Link>
                    <Link className='text-primary' href="mailto:js8322870@gmail.com">js8322870@gmail.com</Link>
                </div>
         
        </div>
        </>
     
    );
};

export default Contact;