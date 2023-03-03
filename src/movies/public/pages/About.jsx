import React from 'react'
import { NavBarPrivate } from '../../private/components/NavBarPrivate';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export const About = () => {

    const user = localStorage.getItem("user");

    return (
        <>

            {
                user ? <NavBarPrivate onsearchMovie={event => searchMovie(event)} /> : <NavBar onsearchMovie={event => searchMovie(event)} />
            }

            <div className='About'>
                <div className='flex h-96 justify-around items-center'>

                    <h1 className='text-slate-100 text-7xl '>Movie App</h1>


                </div>

            </div>

            <div className='mx-32 my-10'>
                <div>
                    <h3 className='text-3xl'>This app provides information about  differents movies for all users </h3>
                </div>
                <h2 className='text-5xl mt-10  '>Backend</h2>

                <div className='text-3xl'>

                    <h3 className='mt-10 '>This app uses a backend made with NodeJs and ExpressJs.</h3>

                    <div className='flex justify-center mt-5'>
                        <img src="https://softprodigy.com/wp-content/uploads/2019/07/express-js.png" alt="" />
                    </div>

                    <h3 className='mt-10 '>You'll find de backend app en my repository of Github.</h3>

                    <div className='flex items-center mt-5 justify-between flex-wrap' >

                        <div>
                            <a href="https://github.com/pabloAMD/backendMoviesNodeJS" target="_blank" className="text-black hover:text-slate-700 dark:hover:text-black">
                                <svg className="w-52 h-52" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                <span className="sr-only">GitHub account</span>
                                View repository</a>
                        </div>
                        <div>
                            <h3 className='my-10  '>For use the proyect follow the next steps:</h3>
                            <ul>
                                <li className='mx-5 mb-3' type="disc" >Download the repository</li>
                                <li className='mx-5 mb-3' type="disc" >Open the repository in your editor code</li>
                                <li className='mx-5 mb-3' type="disc" >Open the terminal and run the command <span className='text-blue-900'>"npm install"</span></li>
                                <li className='mx-5 mb-3' type="disc" >After the installation of the dependencies run the command <span className='text-blue-900'>"nodemon index.js"</span></li>
                            </ul>
                        </div>

                    </div>

                </div>
                <h2 className='text-5xl mt-10  '>Front end</h2>
                <div className='text-3xl'>

                    <h3 className='mt-10 '>This app uses a Front-end made with React, Tailwind CSS and Redux Toolkit.</h3>

                    <div className='flex justify-around mt-5 flex-wrap'>
                        <img className=' object-fill max-h-48  ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="" />
                        <img className=' object-fill  max-h-48' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="" />
                        <img className=' object-fill  max-h-48' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/1200px-Redux.png" alt="" />

                    </div>

                    <h3 className='mt-10 '>You'll find de Front-End app en my repository of Github.</h3>

                    <div className='flex items-center mt-5 justify-between flex-wrap' >

                        <div>
                            <a href="https://github.com/pabloAMD/MovieAppReact" target="_blank" className="text-black hover:text-slate-700 dark:hover:text-black">
                                <svg className="w-52 h-52" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                <span className="sr-only">GitHub account</span>
                                View repository</a>
                        </div>
                        <div>
                            <h3 className='my-10  '>For use the proyect follow the next steps:</h3>
                            <ul>
                                <li className='mx-5 mb-3' type="disc" >Download the repository</li>
                                <li className='mx-5 mb-3' type="disc" >Open the repository in your editor code</li>
                                <li className='mx-5 mb-3' type="disc" >Create file .env.local in the root of project, then add: VITE_URL_API:"url to backend" </li>


                                <li className='mx-5 mb-3' type="disc" >Open the terminal and run the command <span className='text-blue-900'>"yarn install"</span></li>
                                <li className='mx-5 mb-3' type="disc" >After the installation of the dependencies run the command <span className='text-blue-900'>"yarn dev"</span></li>

                            </ul>
                        </div>

                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
}
