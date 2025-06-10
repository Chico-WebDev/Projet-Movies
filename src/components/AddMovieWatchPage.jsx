
/*function ReadMovies ({youtubeURL, title}) {
return <div className="w-max h-max text-center justify-center items-center shadow-sm">
        <div className="mt-4 aspect-video">
            <iframe
                className="w-full h-full"
                src={youtubeURL}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
      </div>
</div>
}

export default ReadMovies;*/



function AddMovieWatchPage(movie) {

  if (!movie) return <div className="text-md lg:text-lg py-16 lg:py-0  text-center justify-center items-center text-blue-500">Film non trouvé</div>;

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>
      <div className="max-w-4xl mx-auto aspect-video">
        <iframe
          src={movie.youtubeURL}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={movie.title}
        ></iframe>
      </div>
      <p className="text-lg mt-6 text-gray-200">{movie.description}</p>
    </div>
  );
}

export default AddMovieWatchPage;
