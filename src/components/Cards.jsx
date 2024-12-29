import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"


function Cards({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} className=' relative w-60 h-72 rounded-[40px] bg-zinc-800 text-white p-5 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold '>{data.desc}</p>

            <div className='footer absolute  w-full  left-0 bottom-0'>

                <div className='flex  items-center justify-between px-9 py-4 mb-5  '>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-green-300 rounded-full flex items-center justify-center'>

                        {data.close ? <IoMdClose /> : <FaDownload />}

                    </span>
                </div>
                {data.tagdetails.isopen && (
                    <div className={`'tag w-full  py-4 bg-green-600 flex items-center justify-center '`}>
                        <h3 className='text-md'>{data.tagdetails.tagTitle}</h3>
                    </div>
                )}

            </div>
        </motion.div>

    );
}

export default Cards