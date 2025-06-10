import React from 'react';
import Filter from './Filter';

function Hero({searchValue, onTitleChange, onRatingChange}) {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://img.freepik.com/photos-gratuite/assortiment-elements-cinema-fond-rouge-espace-copie_23-2148457848.jpg?semt=ais_hybrid&w=740')" }}>
      {/* Overlay flou et sombre */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

  {/* Contenu par-dessus */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col gap-16 justify-center items-center text-center text-white px-4">
        <div className='md:hidden w-full'>
          <Filter value={searchValue} onTitleChange={onTitleChange} onRatingChange={onRatingChange}/>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-2 justify-center items-center text-center">Bienvenue sur votre guide de streaming <br></br> pour les films, les series et de sport</h2>
        <p className="text-lg text-gray-100">Découvrer ou regarder en streaming les divertissements les plus populaires, les Nouveautés et les prochaines sorties avec FlexMovie !</p>
        <div className='flex gap-4 items-center'>
            <button id='Nouveauté' className='text-sm md:text-lg ring py-2 px-4 md:py-4 md:px-8 rounded-md bg-purple-500 text-gray-900 hover:bg-transparent hover:text-gray-300 font-semibold'>
                Découvrer de nouveaux films et séries
            </button>
            <button id='footer' className='text-sm md:text-lg ring py-2 px-4 md:py-4 md:px-8 rounded-md bg-transparent text-gray-300 hover:bg-purple-500 hover:text-gray-900 font-semibold'>
                Fonctionnalités
            </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
