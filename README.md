Instructions
Créez les composants suivants :
Carte de cinéma
Liste de films
Filtre (titre, taux)
Chaque film doit avoir les attributs suivants : titre, description, URL de l'affiche, note
L'utilisateur doit être :
Possibilité d'ajouter un nouveau film.
Filtrer les films par titre/note.

le composant principal App qui se présente avec les composants et l'option de routage avec react-dom-router : 
Navbar contient : le logo la liste de navigation et d'une barre de recherche,
Home contient : le composant Hero, Filter, AddMovieCard, MovieList,
WatchPage pour ouvrir la page pour regarder le film avec le titre la video complète et la descrption, 
SearchPage est pour la recherche de film,
Footer qui est le pied de page
et d'autre composant comme Movicard pour chaqu card qui est map par notre JSON Movies dans MovieList et About Contact ReadMovies AddMovieWatchPage