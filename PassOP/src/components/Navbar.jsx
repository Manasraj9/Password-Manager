import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-800 text-white'>
            <div className="mycontainer px-4 py-5 flex h-14 item-center justify-between">
                <div className="logo font-bold text-2xl">
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-700'>OP/&gt;</span>
                    </div>
                <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
