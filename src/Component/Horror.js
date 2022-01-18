import React from 'react';

const Horror = ({films}) => (
    <div>
        <div className='flex flex-col h-screen lg:flex-row'>
            <section className='p-20 basis-1/3 flex flex-col justify-between'>
                <div className='text-red-600 font-bold text-8xl mb-12'>
                    <h1>BEST<br/>HORROR<br/>SCENES</h1>
                </div>
                <div className='text-red-600'>
                    <span className='text-2xl mb-10 block pr-24'>
                        An ever growing collection featuring some of the best scenes in horror.
                    </span>
                    <p className='pr-20'>
                        “Best Horror Scenes” is a collection of scenes I feel are some of the most affecting in horror.
                        Some may be simple black cat scares, others may be more subdued or nuanced. Many come from films
                        that aren't necessarily “horror” but have elements or threads of horror.
                    </p>
                </div>
                <footer>
                    <ul className='flex flex-wrap text-gray-600 gap-x-4 gap-y-1 pr-20 align-center py-4'>
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
                    <small className='text-xs pr-24 block text-gray-500'>
                        Best Horror Scenes is a love letter to the Horror film genre by Brandon Durham. Most film clips
                        contain major spoilers, and it is recommended you don’t watch the clip if you plan on seeing the
                        film.
                    </small>
                </footer>
            </section>
            <section className='col-span-2 bg-red-600 basis-2/3 overflow-y-scroll lg:overflow-y-unset'>
                <ul>
                    {films.map(film =>
                        <li className='p-20 shadow-2xl'>
                            <div className='flex items-end justify-between text-white'>
                                <h2 className='text-6xl font-bold'>{film.title} ({film.year})</h2>
                                <small className='text-lg'>Directed by {film.director}</small>
                            </div>
                            <div className='m-auto my-12 shadow-2xl shadow-black'>
                                <img src={film.thumbnail} alt="thumbnail"/>
                            </div>
                            <div className='flex text-lg'>
                                <span className='ml-auto'>My Rating: {film.rating}/10</span>
                            </div>
                            <div className='flex justify-between pt-12'>
                                <span>No Comments</span>
                                <span className='border-b-2 border-black'>Leave a Comment</span>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    </div>
);

export default Horror;