import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

const Horror = ({films}) => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useState(prefersDarkScheme)
    const onToggleClick = (e) => {
        setIsDark(prev => !prev)
    }
    return (
        <div className={isDark ? 'dark' : ''}>
            <div className='absolute top-4 right-0 md:right-6'>
                <div className='text-sm relative flex w-max h-max text-white rounded-full border bg-black px-2 scale-50 md:scale-75 xl:scale-100'>
                    <div className='p-2'>
                        <FontAwesomeIcon icon={faSun} size={'2x'}/>
                    </div>
                    <div className='p-2'>
                        <FontAwesomeIcon icon={faMoon} size={'2x'}/>
                    </div>
                    <button
                        className={`theme-thumb w-12 h-12 bg-white border rounded-full absolute top-1/2 -left-1 -translate-y-1/2 transition ${isDark ? '' : 'translate-x-16'}`}
                        onClick={onToggleClick}></button>
                </div>
            </div>
            <div className='flex flex-col h-screen lg:flex-row'>
                <section className='p-12 md:p-20 basis-1/3 flex flex-col justify-between dark:bg-stone-900'>
                    <div className='text-red-600 font-bold text-5xl md:text-6xl xl:text-8xl mb-12'>
                        <h1>BEST<br/>HORROR<br/>SCENES</h1>
                    </div>
                    <div className='text-red-600'>
                        <span className='text-lg md:text-2xl mb-10 block md:pr-10'>
                            An ever growing collection featuring some of the best scenes in horror.
                        </span>
                        <p className='text-sm md:text-lg md:pr-10'>
                            “Best Horror Scenes” is a collection of scenes I feel are some of the most affecting in
                            horror.
                            Some may be simple black cat scares, others may be more subdued or nuanced. Many come from
                            films
                            that aren't necessarily “horror” but have elements or threads of horror.
                        </p>
                    </div>
                    <footer>
                        <ul className='flex flex-wrap text-gray-600 gap-x-4 gap-y-1 md:pr-10 align-center py-4 text-sm md:text-base dark:text-white'>
                            <li className=' border-b border-gray-600 border-gray-600 pb-1'>
                                Newsletter
                            </li>
                            <li className=' border-b border-gray-600 pb-1'>
                                Suggest a Scene
                            </li>
                            <li className=' border-b border-gray-600 pb-1'>
                                YouTube
                            </li>
                            <li className=' border-b border-gray-600 pb-1'>
                                Twitter
                            </li>
                            <li className=' border-b border-gray-600 pb-1'>
                                Contact
                            </li>
                            <li className=' border-b border-gray-600 pb-1'>
                                RSS
                            </li>
                            <li className=' border-b border-gray-600 pb-1'>
                                LetterBoxd
                            </li>
                        </ul>
                        <small className='text-sm md:pr-24 block text-gray-500'>
                            Best Horror Scenes is a love letter to the Horror film genre by Brandon Durham. Most film
                            clips
                            contain major spoilers, and it is recommended you don’t watch the clip if you plan on seeing
                            the
                            film.
                        </small>
                    </footer>
                </section>
                <section className='col-span-2 bg-red-600 basis-2/3 lg:overflow-auto'>
                    <ul>
                        {films.map((film, index) =>
                            <li key={index} className='p-12 md:p-20 shadow-2xl'>
                                <div className='md:flex items-end justify-between text-white'>
                                    <h2 className='text-5xl md:text-6xl font-bold mb-4 md:mb-0'>{film.title} ({film.year})</h2>
                                    <small className='md:text-lg'>Directed by {film.director}</small>
                                </div>
                                <div className='m-auto my-12 shadow-2xl shadow-black'>
                                    <img src={film.thumbnail} alt="thumbnail"/>
                                </div>
                                <div className='flex md:text-lg'>
                                    <span className='ml-auto'>My Rating: {film.rating}/10</span>
                                </div>
                                <div className='flex justify-between pt-12 text-sm md:text-base'>
                                    <span>No Comments</span>
                                    <span className='border-b-2 border-black'>Leave a Comment</span>
                                </div>
                            </li>
                        )}
                    </ul>
                </section>
            </div>
        </div>
    )
};

export default Horror;