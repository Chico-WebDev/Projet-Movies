import MovieCard from './MovieCard';
function MovieList ({movies}) {
  return (
    <>
    <h2 id='populaire' className='px-4 font-bold text-md md:text-2xl'>Tendance Actuelle</h2>
    <div className="py-4 px-1 md:p-8 grid grid-cols-3 lg:grid-cols-4 gap-1 md:gap-4">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
    </>
  );
};


export default MovieList;