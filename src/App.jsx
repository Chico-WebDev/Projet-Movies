import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Movies from './data/Movies';
import WatchPage from './data/ReadMovies';
import SearchPage from './components/SearchPage';
import NotFound from './Pages/NotFound';

function App () {
const [movies, setMovies] = useState(Movies);

const [searchValue, setSearchValue] = useState('');
const [minRating, setMinRating] = useState(0);


  return (
    <div className='flex flex-col bg-[#141414] text-white min-h-screen'>
        <Navbar value={searchValue} onTitleChange={setSearchValue} onRatingChange={setMinRating} />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home 
          movies={movies} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          minRating={minRating}
          setMinRating={setMinRating}
          />}/>
        
          <Route path="/watch/:title" element={<WatchPage />}/>
        
          <Route path="/Recherche/:value" element={<SearchPage
           movies={movies}
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          minRating={minRating}
          setMinRating={setMinRating}  
           />} />
           <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App;