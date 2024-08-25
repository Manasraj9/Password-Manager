import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
            <div className="mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own password manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input placeholder='Enter URL' className='rounded-full border border-green-500 w-full px-4 py-1' type="text" name='' id='' />
                    <div className="flex w-full justify-between gap-8">
                        <input placeholder='Enter Username' className='rounded-full border border-green-500 w-full px-4 py-1' type="text" />
                        <div className='relative'>
                            <input placeholder='Enter password' className='rounded-full border border-green-500 w-full px-4 py-1' type="text" />
                            <span className='cursor-pointer absolute right-[3px] top-[4px]'>
                                <img className='p-1' width={26} src="icons/eye.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <button className='w-fit flex justify-center items-center bg-green-400 rounded-full border border-green-900 px-8 py-2 hover:bg-green-500 gap-2'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add password </button>
                </div>
            </div>
        </>
    )
}

export default Manager
