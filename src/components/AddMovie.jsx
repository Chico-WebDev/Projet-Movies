import { useState } from "react";

function AddMovie({ onAdd }) {

    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && rating && posterUrl) {
      onAdd({
        title,
        description,
        rating: parseFloat(rating),
        posterUrl,
      });

      // Réinitialiser les champs
      setTitle("");
      setDescription("");
      setRating("");
      setPosterUrl("");
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="max-w-7xl mx-auto mt-10 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg space-y-4 text-white"
  style={{
     // change l'image si besoin
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <h2 className="text-2xl font-bold text-center">Ajouter un Film ou une Série</h2>

  <input
    type="text"
    placeholder="Titre"
    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
    value={title}
    onChange={(e) => setTitle(e.target.value )}
  />
  
  <input
    type="text"
    placeholder="Description"
    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
  
  <input
    type="text"
    placeholder="URL de l'affiche"
    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
    value={posterUrl}
    onChange={(e) => setPosterUrl(e.target.value)}
  />
    <input
    type="text"
    placeholder="URL de l'affiche"
    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
    value={youtubeUrl}
    onChange={(e) => setYoutubeUrl(e.target.value)}
  />
  <input
    type="number"
    placeholder="Note"
    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
    value={rating}
    onChange={(e) => setRating(parseFloat(e.target.value))}
  />
  
  <button
    type="submit"
    className="w-full py-3 mt-2 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold text-gray-900 transition-all duration-300"
  >
    🎬 Ajouter
  </button>
</form>

  );
}

export default AddMovie;