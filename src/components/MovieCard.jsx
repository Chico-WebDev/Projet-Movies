
/*function MovieCard({ title, description, posterURL, rating, youtubeURL }) {
  return (
    <div className="border p-4 w-64 shadow">
      <img src={posterURL} alt={title} className="h-64 object-cover w-full" />
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{description}</p>
      <p>Note : {rating}/10</p>
      <button
      className="bg-amber-900 text-gray-100 py-2 px-4 rounded shadow-md hover:bg-transparent"
      onClick={<ReadMovies watch={youtubeURL}/>}
      >
        Regarder maintenant
      </button>
    </div>
  );
}*/

import { Link } from "react-router-dom";


function MovieCard ({ title, description, posterURL, rating, youtubeURL }) {
    return (
        <div className="mb-4"><Link to={`/watch/${encodeURIComponent(title)}`}>
  <div className="md:rounded-xl md:shadow-sm md:shadow-zinc-900 p-1 md:p-2 w-full max-w-md  aspect-[2/3] md:aspect-auto overflow-hidden  md:space-y-4 text-white">
    <img src={posterURL} alt={title} className="rounded-sm md:rounded-lg w-full h-[70%] sm:h-[80%] md:h-90" />
    <h2 className="text-sm md:text-xl font-bold mt-2 md:mt-4">{title}</h2>
    <p className="hidden md:block text-sm text-gray-300 mt-2">{description}</p>
    <p className="hidden md:block text-sm font-semibold text-yellow-600 mt-2">Note : {rating}/10</p>
   
        <Link to={`/watch/${encodeURIComponent(title)}`}>
          <button className="hidden md:block bg-red-600 hover:bg-red-400 text-white p-1 md:px-4 md:py-2 rounded">
            Regarder maintenant
          </button>
        </Link>

   
  </div>
  </Link>
  </div>
    )
};

export default MovieCard;