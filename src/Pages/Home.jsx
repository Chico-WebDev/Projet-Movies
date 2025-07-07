import { useNavigate } from "react-router-dom";
import AddMovie from "../components/AddMovie";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import { useState } from "react";
import AddMovieCard from "../components/AddMovieCard";
import Contact from "./Contact";
import About from "./About"

function Home({movies, searchValue, setSearchValue, setMinRating}) {
    const navigate = useNavigate();

  const handleTitleChange = (value) => {
    setSearchValue(value);
    navigate(`/Recherche/${encodeURIComponent(value)}`);
  };

  const handleRatingChange = (value) => {
    setMinRating(value);
  };
    const [addedMovie, setAddedMovie] = useState(() => {
  const saved = localStorage.getItem("addedMovies");
  return saved ? JSON.parse(saved) : [];
});

const handleDelete = (indexToDelete) => {
  const updatedMovies = addedMovie.filter((_, index) => index !== indexToDelete);
  setAddedMovie(updatedMovies);
  localStorage.setItem("addedMovies", JSON.stringify(updatedMovies));
};

  const isMovieValid = (movie) => {
    if (!movie) return false;
    return movie.title && movie.description && movie.rating && movie.posterUrl;
  }

  return (
    <section className="px-8 flex flex-col gap-8 mb-5">
      <Hero
        searchValue={searchValue}
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />

      <MovieList movies={movies}/>

      {addedMovie.length > 0 && (
      <section className="mb-4 px-8">
        <h2 id="nouveauté" className="text-md md:text-2xl font-bold my-8">Nouveautés</h2>
        <div className="grid grid grid-cols-3 lg:grid-cols-4 gap-4">
          {addedMovie.map((movie, index) => (
            <div key={index}>
            <AddMovieCard key={index} movie={movie} />
              <button
      onClick={() => handleDelete(index)}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded mt-2"
    >
      Supprimer
    </button>
     </div>
          ))}
       </div>
      </section>

      )}
    <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
      <AddMovie onAdd={(newMovie) => {
  const updatedMovies = [...addedMovie, newMovie];
  setAddedMovie(updatedMovies);
  localStorage.setItem("addedMovies", JSON.stringify(updatedMovies));
}}

      />

      <Contact/>
</div>
    <About/>
    </section>
  );
}

export default Home;


// rafce