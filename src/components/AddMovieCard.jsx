import { Link } from "react-router-dom";


function AddMovieCard ({ movie }) {
    return (
        <div className="mb-4"><Link to={`/watch/${encodeURIComponent(movie.title)}`}>
  <div className="md:rounded-xl md:shadow-sm md:shadow-zinc-900 p-1 md:p-2 w-full max-w-md  aspect-[2/3] md:aspect-auto overflow-hidden  md:space-y-4 text-white">
    <img src={movie.posterURL} alt={movie.title} className="rounded-sm md:rounded-lg w-full h-[70%] sm:h-[80%] md:h-90" />
    <h2 className="text-sm md:text-xl font-bold mt-2 md:mt-4">{movie.title}</h2>
    <p className="hidden md:block text-sm text-gray-300 mt-2">{movie.description}</p>
    <p className="hidden md:block text-sm font-semibold text-yellow-600 mt-2">Note : {movie.rating}/10</p>
   
        <Link to={`/watch/${encodeURIComponent(movie.title)}`}>
          <button className="hidden md:block bg-red-600 hover:bg-red-400 text-white p-1 md:px-4 md:py-2 rounded">
            Regarder maintenant
          </button>
        </Link>

   
  </div>
  </Link>
  </div>
    )
};

export default AddMovieCard;