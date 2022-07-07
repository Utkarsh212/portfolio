import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
function Layout() {
    return (
        <div className='lg:flex'>
            <aside className='w-screen h-fit min-w-fit lg:w-[4%] lg:fixed lg:left-0 lg:top-0 lg:h-screen bg-[#181818]'>
                <Sidebar />
            </aside>
            <div className='w-screen h-[140vh] lg:ml-[max(4%,71px)] lg:h-screen lg:w-full lg:p-2 bg-[#354F60] relative'>
                    <p className='ml-3 lg:mt-4 text-[#FFC501] text-2xl font-["La_Belle_Aurore"]'>&lt;html&gt;</p>
                    <p className='ml-16 mb-4 text-[#FFC501] text-2xl font-["La_Belle_Aurore"]'>&lt;body&gt;</p>
                    <div className='w-full h-3/4 pl-24 pr-10 lg:pl-36 lg:pr-16'>
                        <Outlet />
                    </div>
                    <p className='ml-16 text-[#FFC501] text-2xl font-["La_Belle_Aurore"] absolute bottom-12'>&lt;/body&gt;</p>
                    <p className='ml-3 mb-4 text-[#FFC501] text-2xl font-["La_Belle_Aurore"] absolute bottom-0'>&lt;/html&gt;</p>
            </div>
        </div>
    )
}

export default Layout
