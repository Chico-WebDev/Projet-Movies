import { useNavigate, useParams } from "react-router-dom";
import MovieList from "../components/MovieList"; // adapte selon ton chemin
import { useEffect, useState } from "react";
import Filter from "./Filter";

function SearchPage({ movies, searchValue, setSearchValue, minRating, setMinRating  }) {
    const navigate = useNavigate();
  const { value } = useParams();

  useEffect(() => {
    setSearchValue(value || '');
  }, [value]);

  const handleTitleChange = (newValue) => {
    setSearchValue(newValue);
    navigate(`/Recherche/${encodeURIComponent(newValue)}`);
    if(value === "") {
      navigate('/')
    }
  };

  const handleRatingChange = (value) => {
    setMinRating(value);
  };

  // Filtrage des films
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase()) &&
    movie.rating >= minRating
  );

  return (
    <div className="py-3 space-y-4">
      <div className="lg:hidden">
      <Filter value={searchValue} onTitleChange={handleTitleChange} onRatingChange={handleRatingChange}/>
</div>     
      <h1 className="text-2xl font-bold px-3">Résultats pour : {value}</h1>
      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <p>Aucun film trouvé pour “{value}”.</p>
      )}
    </div>
  );
}

export default SearchPage;
