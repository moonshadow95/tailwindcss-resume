import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Tolv = (props) => (
    <div className='cursor-[url(./cursor.cur),_pointer]'>
        <header className='fixed left-0 right-0 bg-transparent'>
            <nav className='flex w-full align-center justify-between px-40 relative py-5'>
                <ul className='flex gap-4 text-2xl'>
                    <li className='px-4 cursor-[url(./hover.cur),_pointer] hover:cursor-'>Products</li>
                    <li className='px-4'>Stockists</li>
                    <li className='px-4'>About us</li>
                </ul>
                <h1 className='mx-auto text-5xl absolute top-3 left-0 right-0 text-center font-bold'>Tolv</h1>
                <div>
                    <button><FontAwesomeIcon icon={faSearch} size={'2x'}/></button>
                </div>
            </nav>
        </header>
        <div className='grid grid-cols-2'>
            <div className='h-screen'>
                <div>
                    <div className='h-screen overflow-hidden'><img
                        src="https://tolv.dk/wp-content/uploads/2020/11/home_kitsune-2-1040x1300.jpg"
                        className='h-full w-full' alt=""/></div>
                    <div className='h-screen overflow-hidden'><img
                        src="https://tolv.dk/wp-content/uploads/2020/11/home_portobelloW_arm-1040x1300.jpg"
                        className='h-full w-full' alt=""/></div>
                    <div className='h-screen overflow-hidden'><img
                        src="https://tolv.dk/wp-content/uploads/2020/11/home_kitsune-2-1040x1300.jpg"
                        className='h-full w-full' alt=""/></div>
                </div>
            </div>
            <div className='bg-white h-screen'>
                <div className='flex flex-col align-center justify-center w-full h-full px-40'>
                    <p className='text-6xl font-bold font-serif mt-auto text-center leading-normal'>
                        Eyes rest from an afternoon in the sun. Smooth textures feel cool on bare feet and skin.
                    </p>
                    <div className='mb-auto text-center mt-12'>
                        <span>
                            Featuring
                        </span>
                        <span className='text-orange-500 underline font-bold pl-1'>
                            Kitsune sofa
                        </span>
                        <span>
                            ,
                        </span>
                        <span className='text-orange-500 underline pl-1'>
                            armchair
                        </span>
                        <span>
                            and
                        </span>
                        <span className='text-orange-500 underline font-bold pl-1'>
                            I-O coffee table (steel base)
                        </span>
                    </div>
                </div>
                <div className='flex flex-col align-center justify-center w-full h-full px-40'>
                    <p className='text-6xl font-bold font-serif mt-auto text-center leading-normal'>
                        Eyes rest from an afternoon in the sun. Smooth textures feel cool on bare feet and skin.
                    </p>
                    <div className='mb-auto text-center mt-12'>
                        <span>
                            Featuring
                        </span>
                        <span className='text-orange-500 underline font-bold pl-1'>
                            Kitsune sofa
                        </span>
                        <span>
                            ,
                        </span>
                        <span className='text-orange-500 underline pl-1'>
                            armchair
                        </span>
                        <span>
                            and
                        </span>
                        <span className='text-orange-500 underline font-bold pl-1'>
                            I-O coffee table (steel base)
                        </span>
                    </div>
                </div>
                <div className='flex flex-col align-center justify-center w-full h-full px-40'>
                    <p className='text-6xl font-bold font-serif mt-auto text-center leading-normal'>
                        Eyes rest from an afternoon in the sun. Smooth textures feel cool on bare feet and skin.
                    </p>
                    <div className='mb-auto text-center mt-12'>
                        <span>
                            Featuring
                        </span>
                        <span className='text-orange-500 underline font-bold pl-1'>
                            Kitsune sofa
                        </span>
                        <span>
                            ,
                        </span>
                        <span className='text-orange-500 underline pl-1'>
                            armchair
                        </span>
                        <span>
                            and
                        </span>
                        <span className='text-orange-500 underline font-bold pl-1'>
                            I-O coffee table (steel base)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Tolv;