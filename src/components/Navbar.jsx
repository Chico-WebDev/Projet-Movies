import React, { useState } from 'react';
import  { Link } from 'react-router-dom';
import '../App.css'
import Filter from './Filter';

function Navbar ({searchValue, onTitleChange, onRatingChange}) {

    const [open, setOpen] = useState(false)
    
    const handlClick = () => {
        setOpen(!open)
    }

  return (
    <nav className='flex sticky top-0 z-10 bg-zinc-900'>
                    
                    {/**Mobile Menu when open is true*/}
                    <div className={`lg:hidden space-y-6 w-[300px] h-screen absolute right-0
                        transform transition-transform duration-500 ease-in-out z-50 shadown-lg
                        ${open ? "translate-x-0" : "translate-x-full"}
                        bg-zinc-900 text-gray-100 px-4 pt-4 pb-4`}>
                            <div className='text-xl text-red-600 font-bold'>FlexMovies</div>
                        <ul className='flex flex-col gap-3 font-semibold'>
                            <li>
                              <Link
                                 to="/"
                                onClick={() => setOpen(false)}
                                 className="block py-2 border-b border-gray-100"
                                  >
                                     Home
                              </Link>
                            </li>
                            <li>
                                 <Link
                                 to="/"
                                onClick={() => setOpen(false)}
                                 className="block py-2 border-b border-gray-100"
                                  >
                                     Nouveautés
                              </Link>
                            </li>
                            <li>
                                 <Link
                                 to="/"
                                onClick={() => setOpen(false)}
                                 className="block py-2 border-b border-gray-100"
                                  >
                                     Populaire
                              </Link>
                            </li>
                            
                        </ul>
                        {/* Bottom bar */}
                        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                            <p>© {new Date().getFullYear()} FlexMovies. Tous droits réservés. By CHICO JD</p>
                        </div>
                    </div>

                    {/**Destokp Menu */}
                    <div className="container mx-auto flex justify-between items-center py-4 px-8  font-bold">
                     <div className='text-xl lg:text-3xl font-bold text-red-500'>
                        FlexMovies
                    </div>
                   

                    <ul className="hidden lg:flex gap-12 items-center">
                    <li>
                        <Link to="/" className="block py-2 font-bold hover:transform hover:duration-500 text-lg hover:py-0 hover:text-red-600 hover:border-b-3 hover:border-rounded hover:border-red-900">Home</Link>
                    </li>
                    <li>
                        <a href="#nouveauté" className="block py-2 font-bold hover:transform hover:duration-500 text-lg hover:py-0 hover:text-red-600 hover:border-b-3 border-rounded hover:border-red-900">Nouveauté</a>
                    </li>
                    <li>
                        <a to="/populaire" className="block py-2 font-bold hover:transform hover:duration-500 text-lg hover:py-0 hover:text-red-600 hover:border-b-3 border-rounded hover:border-red-900">Populaire</a>
                    </li>
                    </ul>
                        <div className='hidden md:block'>
                         <Filter value={searchValue} onTitleChange={onTitleChange} onRatingChange={onRatingChange}/>
                        </div>

                    {/**Mobile Menu Toggle Button */}
                    <button className='lg:hidden text-xl rounded p-1 shadow-sm shadow-gray-500 border-none'
                    onClick={handlClick}
                    aria-label='Toggle Menu'
                    >
                        ☰
                    </button>
             </div>
    </nav>
  )
}

export default Navbar