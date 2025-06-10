
 const Movies = [
  {
    title: "Avengement",
    description: "Un criminel endurci s'échappe de prison pour se venger de ceux qui l'ont transformé en tueur impitoyable.",
    posterURL: "https://i.ytimg.com/vi/318udnyw6qc/maxresdefault.jpg",
    rating: 7.0,
    youtubeURL: "https://www.youtube.com/embed/318udnyw6qc"
  },
  {
    title: "Death Fighter",
    description: "Un détective américain et un agent thaïlandais s'associent pour démanteler un réseau de trafic de drogue.",
    posterURL: "https://i.ytimg.com/vi/nBN8IwViyag/maxresdefault.jpg",
    rating: 6.5,
    youtubeURL: "https://www.youtube.com/embed/nBN8IwViyag"
  },
  {
    title: "Mr. Manhattan",
    description: "Un avocat ambitieux lutte pour équilibrer sa carrière et les responsabilités familiales après être devenu le tuteur de ses neveux.",
    posterURL: "https://i.ytimg.com/vi/rho-YUBVe3E/maxresdefault.jpg",
    rating: 6.8,
    youtubeURL: "https://www.youtube.com/embed/rho-YUBVe3E"
  },
  {
    title: "Squid Game",
    description: "Hundreds of indebted people accept a deadly invitation to play children’s games.",
    posterURL: "https://img.youtube.com/vi/oqxAJKy0ii4/maxresdefault.jpg",
    rating: 8.0,
    youtubeURL: "https://www.youtube.com/embed/oqxAJKy0ii4",
    seasons: [1, 2]
  },
  {
    title: "Money Heist",
    description: "A group executes the biggest heist in history under the Professor’s lead.",
    posterURL: "https://img.youtube.com/vi/_InqQJRqGW4/maxresdefault.jpg",
    rating: 8.3,
    youtubeURL: "https://www.youtube.com/embed/_InqQJRqGW4",
    seasons: [1, 2, 3, 4, 5]
  },
  // {
  //   title: "The Last of Us",
  //   description: "A man and a young girl travel through a post-apocalyptic America.",
  //   posterURL: "https://img.youtube.com/vi/BpmfH8zJf1o/maxresdefault.jpg",
  //   rating: 9.0,
  //   youtubeURL: "https://www.youtube.com/embed/BpmfH8zJf1o",
  //   seasons: [1]
  // },
  // {
  //   title: "Stranger Things",
  //   description: "Kids discover supernatural phenomena in their small town.",
  //   posterURL: "https://img.youtube.com/vi/b9EkMc79ZSU/maxresdefault.jpg",
  //   rating: 8.7,
  //   youtubeURL: "https://www.youtube.com/embed/b9EkMc79ZSU",
  //   seasons: [1, 2, 3, 4]
  // },
  // {
  //   title: "The Mandalorian",
  //   description: "A lone bounty hunter in Star Wars protects a mysterious child.",
  //   posterURL: "https://img.youtube.com/vi/aoC8E8z_ifw/maxresdefault.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/aOC8E8z_ifw",
  //   seasons: [1, 2, 3]
  // },
  // {
  //   title: "The Witcher",
  //   description: "Geralt of Rivia, monster hunter, navigates a dangerous world.",
  //   posterURL: "https://img.youtube.com/vi/ndl1W4ltcmg/maxresdefault.jpg",
  //   rating: 8.2,
  //   youtubeURL: "https://www.youtube.com/embed/ndl1W4ltcmg",
  //   seasons: [1, 2]
  // },
  {
    title: "Breaking Bad",
    description: "A chemistry teacher turns to making drugs after a fatal diagnosis.",
    posterURL: "https://img.youtube.com/vi/HhesaQXLuRY/maxresdefault.jpg",
    rating: 9.5,
    youtubeURL: "https://www.youtube.com/embed/HhesaQXLuRY",
    seasons: [1, 2, 3, 4, 5]
  },
  // {
  //   title: "Game of Thrones",
  //   description: "Power struggles in the Seven Kingdoms amidst betrayal and war.",
  //   posterURL: "https://img.youtube.com/vi/BpJYNVhGf1s/maxresdefault.jpg",
  //   rating: 9.3,
  //   youtubeURL: "https://www.youtube.com/embed/BpJYNVhGf1s",
  //   seasons: [1, 2, 3, 4, 5, 6, 7, 8]
  // },
  // {
  //   title: "Peaky Blinders",
  //   description: "A gangster family runs Birmingham after WWI with a tight grip.",
  //   posterURL: "https://img.youtube.com/vi/svB1NJM27jI/maxresdefault.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/svB1NJM27jI",
  //   seasons: [1, 2, 3, 4, 5, 6]
  // },
  // {
  //   title: "The Boys",
  //   description: "Corrupt superheroes face a group of vigilantes determined to stop them.",
  //   posterURL: "https://img.youtube.com/vi/06wR3w2yV_U/maxresdefault.jpg",
  //   rating: 8.7,
  //   youtubeURL: "https://www.youtube.com/embed/06wR3w2yV_U",
  //   seasons: [1, 2, 3]
  // },
  // {
  //   title: "Lupin",
  //   description: "A gentleman thief seeks to avenge his father’s injustice.",
  //   posterURL: "https://img.youtube.com/vi/cx2mj6kCDno/maxresdefault.jpg",
  //   rating: 7.5,
  //   youtubeURL: "https://www.youtube.com/embed/cx2mj6kCDno",
  //   seasons: [1, 2]
  // },
  // {
  //   title: "Black Mirror",
  //   description: "Standalone stories exploring society and technology in the near future.",
  //   posterURL: "https://img.youtube.com/vi/jDiYGjp5iLg/maxresdefault.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/jDiYGjp5iLg",
  //   seasons: [1, 2, 3, 4, 5]
  // },
  // {
  //   title: "Narcos",
  //   description: "The true story of Pablo Escobar’s rise and fall.",
  //   posterURL: "https://img.youtube.com/vi/U7elNhHwgBU/maxresdefault.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/U7elNhHwgBU",
  //   seasons: [1, 2, 3]
  // },
  {
    title: "WandaVision",
    description: "Superhero couple experiences bizarre TV-style events.",
    posterURL: "https://img.youtube.com/vi/sj9J2ecsSpo/maxresdefault.jpg",
    rating: 7.9,
    youtubeURL: "https://www.youtube.com/embed/sj9J2ecsSpo",
    seasons: [1]
  },
  // {
  //   title: "The Queen's Gambit",
  //   description: "A young chess prodigy battles personal demons and climbs to fame.",
  //   posterURL: "https://img.youtube.com/vi/CDrieqwSdgI/maxresdefault.jpg",
  //   rating: 8.6,
  //   youtubeURL: "https://www.youtube.com/embed/CDrieqwSdgI",
  //   seasons: [1]
  // },
  // {
  //   title: "Avatar: The Last Airbender",
  //   description: "A young hero must master elements to save the world.",
  //   posterURL: "https://img.youtube.com/vi/lsSFTK1dItM/maxresdefault.jpg",
  //   rating: 9.3,
  //   youtubeURL: "https://www.youtube.com/embed/lsSFTK1dItM",
  //   seasons: [1, 2, 3]
  // },
  // {
  //   title: "House of the Dragon",
  //   description: "Game of Thrones prequel about the Targaryen dynasty.",
  //   posterURL: "https://img.youtube.com/vi/O7-I1tK1uE4/maxresdefault.jpg",
  //   rating: 8.5,
  //   youtubeURL: "https://www.youtube.com/embed/O7-I1tK1uE4",
  //   seasons: [1]
  // },
  // {
  //   title: "The Sandman",
  //   description: "The King of Dreams returns after centuries of absence.",
  //   posterURL: "https://img.youtube.com/vi/_wCcF4G9rQo/maxresdefault.jpg",
  //   rating: 7.8,
  //   youtubeURL: "https://www.youtube.com/embed/_wCcF4G9rQo",
  //   seasons: [1]
  // },
  {
    title: "Squid Game Season 2",
    description: "The continuation of the hit series with new games and stakes.",
    posterURL: "https://img.youtube.com/vi/oqxAJKy0ii4/maxresdefault.jpg",
    rating: 8.0,
    youtubeURL: "https://www.youtube.com/embed/oqxAJKy0ii4",
    seasons: [2]
  },
  {
    title: "Stranger Things Season 4",
    description: "The latest season of supernatural adventures in Hawkins.",
    posterURL: "https://img.youtube.com/vi/b9EkMc79ZSU/maxresdefault.jpg",
    rating: 8.7,
    youtubeURL: "https://www.youtube.com/embed/b9EkMc79ZSU",
    seasons: [4]
  },
  { title: "Squid Game",
    description: "Hundreds of indebted people accept a deadly invitation to play children’s games.",
    posterURL: "https://image.tmdb.org/t/p/w500/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
    rating: 8.0,
    youtubeURL: "https://www.youtube.com/embed/oqxAJKy0ii4",
    seasons: [1, 2]
  },
  {
    title: "Money Heist",
    description: "A group executes the biggest heist in history under the Professor’s lead.",
    posterURL: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    rating: 8.3,
    youtubeURL: "https://www.youtube.com/embed/_InqQJRqGW4",
    seasons: [1, 2, 3, 4, 5]
  },
  // {
  //   title: "The Last of Us",
  //   description: "A man and a young girl travel through a post-apocalyptic America.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/uo3bSPO7EjC9YXfQyDaDJZ9RxQj.jpg",
  //   rating: 9.0,
  //   youtubeURL: "https://www.youtube.com/embed/BpmfH8zJf1o",
  //   seasons: [1]
  // },
  {
    title: "Stranger Things",
    description: "Kids discover supernatural phenomena in their small town.",
    posterURL: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    rating: 8.7,
    youtubeURL: "https://www.youtube.com/embed/b9EkMc79ZSU",
    seasons: [1, 2, 3, 4]
  },
  {
    title: "The Mandalorian",
    description: "A lone bounty hunter in Star Wars protects a mysterious child.",
    posterURL: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    rating: 8.8,
    youtubeURL: "https://www.youtube.com/embed/aOC8E8z_ifw",
    seasons: [1, 2, 3]
  },
  {
    title: "The Witcher",
    description: "Geralt of Rivia, monster hunter, navigates a dangerous world.",
    posterURL: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
    rating: 8.2,
    youtubeURL: "https://www.youtube.com/embed/ndl1W4ltcmg",
    seasons: [1, 2]
  },
  {
    title: "Breaking Bad",
    description: "A chemistry teacher turns to making drugs after a fatal diagnosis.",
    posterURL: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    rating: 9.5,
    youtubeURL: "https://www.youtube.com/embed/HhesaQXLuRY",
    seasons: [1, 2, 3, 4, 5]
  },
  {
    title: "Game of Thrones",
    description: "Power struggles in the Seven Kingdoms amidst betrayal and war.",
    posterURL: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    rating: 9.3,
    youtubeURL: "https://www.youtube.com/embed/BpJYNVhGf1s",
    seasons: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  // {
  //   title: "Peaky Blinders",
  //   description: "A gangster family runs Birmingham after WWI with a tight grip.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/xvLZZjxC8sZqh6J6cIMWILSKP8B.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/svB1NJM27jI",
  //   seasons: [1, 2, 3, 4, 5, 6]
  // },
  {
    title: "The Boys",
    description: "Corrupt superheroes face a group of vigilantes determined to stop them.",
    posterURL: "https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
    rating: 8.7,
    youtubeURL: "https://www.youtube.com/embed/06wR3w2yV_U",
    seasons: [1, 2, 3]
  },
  // {
  //   title: "Lupin",
  //   description: "A gentleman thief seeks to avenge his father’s injustice.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/9NHSxX6n7kEzK4bIphpphiz1sbI.jpg",
  //   rating: 7.5,
  //   youtubeURL: "https://www.youtube.com/embed/cx2mj6kCDno",
  //   seasons: [1, 2]
  // },
  // {
  //   title: "Black Mirror",
  //   description: "Standalone stories exploring society and technology in the near future.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/qR1O8QntLJt0HSK9zZ1CjCmRlZ6.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/jDiYGjp5iLg",
  //   seasons: [1, 2, 3, 4, 5]
  // },
  // {
  //   title: "Narcos",
  //   description: "The true story of Pablo Escobar’s rise and fall.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/1iiRkCvJbMr5n9xXK4KH2qA3lpX.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/U7elNhHwgBU",
  //   seasons: [1, 2, 3]
  // },
  // {
  //   title: "WandaVision",
  //   description: "Superhero couple experiences bizarre TV-style events.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/7srP7qXQQ0dZJ1V1lmqW3dRrQUk.jpg",
  //   rating: 7.9,
  //   youtubeURL: "https://www.youtube.com/embed/sj9J2ecsSpo",
  //   seasons: [1]
  // },
  // {
  //   title: "The Queen's Gambit",
  //   description: "A young chess prodigy battles personal demons and climbs to fame.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/6K5jPmltY0O2BvD8GtvwQXqRbqS.jpg",
  //   rating: 8.6,
  //   youtubeURL: "https://www.youtube.com/embed/CDrieqwSdgI",
  //   seasons: [1]
  // },
  // {
  //   title: "Avatar: The Last Airbender",
  //   description: "A young hero must master elements to save the world.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/lYgvd0lRZjYpkcOqhvxQz3HnGGY.jpg",
  //   rating: 9.3,
  //   youtubeURL: "https://www.youtube.com/embed/lsSFTK1dItM",
  //   seasons: [1, 2, 3]
  // },
  // {
  //   title: "House of the Dragon",
  //   description: "Game of Thrones prequel about the Targaryen dynasty.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/0yH0GJZ6gF6Zb5ZRcxpOunBWG5P.jpg",
  //   rating: 8.5,
  //   youtubeURL: "https://www.youtube.com/embed/O7-I1tK1uE4",
  //   seasons: [1]
  // },
  // {
  //   title: "The Sandman",
  //   description: "The King of Dreams returns after centuries of absence.",
  //   posterURL: "https://image.tmdb.org/t/p/w500/kUSMuGmkcuL2e9vJFgYzR6uQvN3.jpg",
  //   rating: 7.8,
  //   youtubeURL: "https://www.youtube.com/embed/_wCcF4G9rQo",
  //   seasons: [1]
  // },
  {
    title: "Squid Game Season 2",
    description: "The continuation of the hit series with new games and stakes.",
    posterURL: "https://image.tmdb.org/t/p/w500/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
    rating: 8.0,
    youtubeURL: "https://www.youtube.com/embed/oqxAJKy0ii4",
    seasons: [2]
  },
  {
    title: "Stranger Things Season 4",
    description: "The latest season of supernatural adventures in Hawkins.",
    posterURL: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    rating: 8.7,
    youtubeURL: "https://www.youtube.com/embed/b9EkMc79ZSU",
    seasons: [4]
  },

  //   {
  //   title: "Squid Game",
  //   description: "Des centaines de personnes endettées acceptent une invitation à participer à des jeux d'enfants mortels.",
  //   posterURL: "https://m.media-amazon.com/images/I/81Lzhbv0A6L._AC_SY679_.jpg",
  //   rating: 8.0,
  //   youtubeURL: "https://www.youtube.com/embed/oqxAJKy0ii4",
  //   seasons: [1, 2]
  // },
  // {
  //   title: "Money Heist",
  //   description: "Une équipe exécute le plus grand braquage de l'histoire sous la direction du Professeur.",
  //   posterURL: "https://m.media-amazon.com/images/I/51TyX3A4t5L._AC_SY679_.jpg",
  //   rating: 8.3,
  //   youtubeURL: "https://www.youtube.com/embed/_InqQJRqGW4",
  //   seasons: [1, 2, 3, 4, 5]
  // },
  // {
  //   title: "The Last of Us",
  //   description: "Un homme et une jeune fille traversent une Amérique post-apocalyptique en quête de survie.",
  //   posterURL: "https://m.media-amazon.com/images/I/81K2qZr5J2L._AC_SY679_.jpg",
  //   rating: 9.0,
  //   youtubeURL: "https://www.youtube.com/embed/BpmfH8zJf1o",
  //   seasons: [1]
  // },
  // {
  //   title: "Stranger Things",
  //   description: "Des enfants découvrent des phénomènes surnaturels dans leur petite ville.",
  //   posterURL: "https://m.media-amazon.com/images/I/81FBOPhvHaL._AC_SY679_.jpg",
  //   rating: 8.7,
  //   youtubeURL: "https://www.youtube.com/embed/b9EkMc79ZSU",
  //   seasons: [1, 2, 3, 4]
  // },
  // {
  //   title: "The Mandalorian",
  //   description: "Un chasseur de primes solitaire dans l'univers Star Wars protège un enfant mystérieux.",
  //   posterURL: "https://m.media-amazon.com/images/I/91ErQ45SLWL._AC_SY679_.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/aOC8E8z_ifw",
  //   seasons: [1, 2, 3]
  // },
  // {
  //   title: "The Witcher",
  //   description: "Geralt de Riv, chasseur de monstres, navigue dans un monde dangereux et complexe.",
  //   posterURL: "https://m.media-amazon.com/images/I/71mH2ejRmDL._AC_SY679_.jpg",
  //   rating: 8.2,
  //   youtubeURL: "https://www.youtube.com/embed/ndl1W4ltcmg",
  //   seasons: [1, 2]
  // },
  // {
  //   title: "Breaking Bad",
  //   description: "Un professeur de chimie se lance dans la fabrication de drogue après un diagnostic médical fatal.",
  //   posterURL: "https://m.media-amazon.com/images/I/81y2b3EqF3L._AC_SY679_.jpg",
  //   rating: 9.5,
  //   youtubeURL: "https://www.youtube.com/embed/HhesaQXLuRY",
  //   seasons: [1, 2, 3, 4, 5]
  // },
  {
    title: "Game of Thrones",
    description: "Lutte pour le pouvoir dans les Sept Couronnes, où la trahison et la guerre font rage.",
    posterURL: "https://m.media-amazon.com/images/I/81WcnNQ-TBL._AC_SY679_.jpg",
    rating: 9.3,
    youtubeURL: "https://www.youtube.com/embed/BpJYNVhGf1s",
    seasons: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  // {
  //   title: "Peaky Blinders",
  //   description: "Une famille de gangsters dans l'Angleterre d'après-guerre dirige Birmingham avec poigne.",
  //   posterURL: "https://m.media-amazon.com/images/I/81kkWgiHkaL._AC_SY679_.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/svB1NJM27jI",
  //   seasons: [1, 2, 3, 4, 5, 6]
  // },
  // {
  //   title: "The Boys",
  //   description: "Des super-héros corrompus confrontés à un groupe de justiciers déterminés à les arrêter.",
  //   posterURL: "https://m.media-amazon.com/images/I/81QJO64gyrL._AC_SY679_.jpg",
  //   rating: 8.7,
  //   youtubeURL: "https://www.youtube.com/embed/06wR3w2yV_U",
  //   seasons: [1, 2, 3]
  // },
  // {
  //   title: "Lupin",
  //   description: "Un gentleman cambrioleur moderne cherche à venger son père victime d'une injustice.",
  //   posterURL: "https://m.media-amazon.com/images/I/71qL6H93cBL._AC_SY679_.jpg",
  //   rating: 7.5,
  //   youtubeURL: "https://www.youtube.com/embed/cx2mj6kCDno",
  //   seasons: [1, 2]
  // },
  // {
  //   title: "Black Mirror",
  //   description: "Des histoires indépendantes explorant la société et la technologie dans un futur proche.",
  //   posterURL: "https://m.media-amazon.com/images/I/81XhzPVoNAL._AC_SY679_.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/jDiYGjp5iLg",
  //   seasons: [1, 2, 3, 4, 5]
  // },
  // {
  //   title: "Narcos",
  //   description: "L'histoire vraie de la montée et de la chute du cartel de drogue de Pablo Escobar.",
  //   posterURL: "https://m.media-amazon.com/images/I/71E8Id5GgaL._AC_SY679_.jpg",
  //   rating: 8.8,
  //   youtubeURL: "https://www.youtube.com/embed/U7elNhHwgBU",
  //   seasons: [1, 2, 3]
  // },
  // {
  //   title: "WandaVision",
  //   description: "Un couple super-héroïque vit des expériences bizarres dans un univers télévisuel étrange.",
  //   posterURL: "https://m.media-amazon.com/images/I/81kUXvL8IAL._AC_SY679_.jpg",
  //   rating: 7.9,
  //   youtubeURL: "https://www.youtube.com/embed/sj9J2ecsSpo",
  //   seasons: [1]
  // },
  {
    title: "The Queen's Gambit",
    description: "Une jeune prodige des échecs lutte contre ses démons personnels tout en progressant dans sa carrière.",
    posterURL: "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_SY679_.jpg",
    rating: 8.6,
    youtubeURL: "https://www.youtube.com/embed/CDrieqwSdgI",
    seasons: [1]
  },
//   {
//     title: "Stranger Things Season 4",
//     description: "La dernière saison des aventures mystérieuses à Hawkins.",
//     posterURL: "https://m.media-amazon.com/images/I/71FTHs3CgOL._AC_SY679_.jpg",
//     rating: 8.7,
//     youtubeURL: "https://www.youtube.com/embed/b9EkMc79ZSU",
//     seasons: [4]
//   },
//   {
//     title: "Avatar: The Last Airbender",
//     description: "Un jeune héros doit maîtriser les éléments pour sauver son monde.",
//     posterURL: "https://m.media-amazon.com/images/I/81L5zgnV7aL._AC_SY679_.jpg",
//     rating: 9.3,
//     youtubeURL: "https://www.youtube.com/embed/lsSFTK1dItM",
//     seasons: [1, 2, 3]
//   },
//   {
//     title: "House of the Dragon",
//     description: "Préquelle de Game of Thrones, racontant l'histoire de la maison Targaryen.",
//     posterURL: "https://m.media-amazon.com/images/I/81RkZwd3B9L._AC_SY679_.jpg",
//     rating: 8.5,
//     youtubeURL: "https://www.youtube.com/embed/O7-I1tK1uE4",
//     seasons: [1]
//   },
// {
//     title: "Squid Game - Saison 1",
//     description: "456 personnes endettées participent à des jeux mortels pour remporter une somme colossale.",
//     posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f6/Squid_Game.jpg",
//     rating: 8.5,
//     youtubeURL: "https://www.youtube.com/embed/oqxAJKy0ii4"
//   },
//     {
//     title: "Squid Game Season 2",
//     description: "La suite de la série à succès avec de nouveaux jeux et enjeux.",
//     posterURL: "https://m.media-amazon.com/images/I/81Lzhbv0A6L._AC_SY679_.jpg",
//     rating: 8.0,
//     youtubeURL: "https://www.youtube.com/embed/oqxAJKy0ii4",
//     seasons: [2]
//   },
//   {
//     title: "Squid Game - Saison 2",
//     description: "Gi-hun revient dans le jeu pour découvrir les secrets derrière l'organisation.",
//     posterURL: "https://upload.wikimedia.org/wikipedia/en/5/53/Squid_Game_season_2.jpg",
//     rating: 8.7,
//     youtubeURL: "https://www.youtube.com/embed/Ed1sGgHUo88"
//   },
//     {
//     title: "The Sandman",
//     description: "Une adaptation du célèbre comics où le Roi des Rêves revient après des siècles d'absence.",
//     posterURL: "https://m.media-amazon.com/images/I/71s6WswPauL._AC_SY679_.jpg",
//     rating: 7.8,
//     youtubeURL: "https://www.youtube.com/embed/_wCcF4G9rQo",
//     seasons: [1]
//   },
//   {
//     title: "Dune: Part Two",
//     description: "Paul Atreides s'allie aux Fremen pour venger sa famille et libérer Arrakis.",
//     posterURL: "https://upload.wikimedia.org/wikipedia/en/5/5e/Dune_Part_Two_poster.jpg",
//     rating: 8.3,
//     youtubeURL: "https://www.youtube.com/embed/Way9Dexny3w"
//   },
//   {
//     title: "Oppenheimer",
//     description: "Biopic sur J. Robert Oppenheimer et la création de la bombe atomique.",
//     posterURL: "https://upload.wikimedia.org/wikipedia/en/3/3d/Oppenheimer_%28film%29.jpg",
//     rating: 8.6,
//     youtubeURL: "https://www.youtube.com/embed/uYPbbksJxIg"
//   },
  {
    title: "Barbie",
    description: "Barbie quitte Barbieland pour découvrir le monde réel.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
    rating: 7.2,
    youtubeURL: "https://www.youtube.com/embed/pBk4NYhWNMM"
  },
  // {
  //   title: "The Marvels",
  //   description: "Carol Danvers, Kamala Khan et Monica Rambeau unissent leurs forces.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/3/3b/The_Marvels_poster.jpg",
  //   rating: 6.5,
  //   youtubeURL: "https://www.youtube.com/embed/iuk77TjvfmE"
  // },
  // {
  //   title: "John Wick: Chapter 4",
  //   description: "John Wick affronte de nouveaux ennemis dans sa quête de liberté.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_Chapter_4.jpg",
  //   rating: 8.2,
  //   youtubeURL: "https://www.youtube.com/embed/qEVUtrk8_B4"
  // },
  // {
  //   title: "Mission: Impossible – Dead Reckoning Part One",
  //   description: "Ethan Hunt et son équipe affrontent une nouvelle menace mondiale.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/3/3b/Mission_Impossible_Dead_Reckoning_Part_One.jpg",
  //   rating: 7.8,
  //   youtubeURL: "https://www.youtube.com/embed/avz06PDqDbM"
  // },
  // {
  //   title: "The Flash",
  //   description: "Barry Allen voyage dans le temps pour sauver sa mère, altérant le futur.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/e/e1/The_Flash_%282023_film%29_poster.jpg",
  //   rating: 6.9,
  //   youtubeURL: "https://www.youtube.com/embed/hebWYacbdvc"
  // },
  // {
  //   title: "Guardians of the Galaxy Vol. 3",
  //   description: "Les Gardiens affrontent de nouveaux défis pour protéger l'univers.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_Vol_3_poster.jpg",
  //   rating: 8.1,
  //   youtubeURL: "https://www.youtube.com/embed/u3V5KDHRQvk"
  // },
  // {
  //   title: "Avatar: The Way of Water",
  //   description: "Jake Sully et Neytiri explorent les océans de Pandora.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8e/Avatar_The_Way_of_Water_poster.jpg",
  //   rating: 7.7,
  //   youtubeURL: "https://www.youtube.com/embed/d9MyW72ELq0"
  // },
  // {
  //   title: "The Batman",
  //   description: "Bruce Wayne enquête sur une série de meurtres à Gotham.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Batman_%282022_film%29_poster.jpg",
  //   rating: 8.0,
  //   youtubeURL: "https://www.youtube.com/embed/mqqft2x_Aa4"
  // },
  // {
  //   title: "Black Panther: Wakanda Forever",
  //   description: "Les habitants de Wakanda luttent pour protéger leur nation après la mort de T'Challa.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0c/Black_Panther_Wakanda_Forever_poster.jpg",
  //   rating: 7.3,
  //   youtubeURL: "https://www.youtube.com/embed/_Z3QKkl1WyM"
  // },
  {
    title: "Doctor Strange in the Multiverse of Madness",
    description: "Doctor Strange explore les mystères du multivers avec de nouveaux alliés.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
    rating: 7.1,
    youtubeURL: "https://www.youtube.com/embed/aWzlQ2N6qqg"
  },
  // {
  //   title: "Thor: Love and Thunder",
  //   description: "Thor cherche la paix intérieure, mais doit affronter Gorr le Boucher des Dieux.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/8/88/Thor_Love_and_Thunder_poster.jpg",
  //   rating: 6.8,
  //   youtubeURL: "https://www.youtube.com/embed/Go8nTmfrQd8"
  // },
  // {
  //   title: "Ant-Man and the Wasp: Quantumania",
  //   description: "Scott Lang et Hope Van Dyne explorent le royaume quantique.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2f/Ant-Man_and_the_Wasp_Quantumania_poster.jpg",
  //   rating: 6.4,
  //   youtubeURL: "https://www.youtube.com/embed/ZlNFpri-Y40"
  // },
  // {
  //   title: "The Matrix Resurrections",
  //   description: "Neo reprend conscience de la Matrice et cherche des réponses.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/9/9a/The_Matrix_Resurrections.jpg",
  //   rating: 5.7,
  //   youtubeURL: "https://www.youtube.com/embed/9ix7TUGVYIo"
  // },
  {
    title: "Top Gun: Maverick",
    description: "Pete 'Maverick' Mitchell forme une nouvelle génération de pilotes.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg",
    rating: 8.4,
    youtubeURL: "https://www.youtube.com/embed/giXco2jaZ_4"
  },
  // {
  //   title: "No Time to Die",
  //   description: "James Bond sort de sa retraite pour affronter un nouvel ennemi.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/7/70/No_Time_to_Die_poster.jpg",
  //   rating: 7.3,
  //   youtubeURL: "https://www.youtube.com/embed/BIhNsAtPbPI"
  // },
  // {
  //   title: "Fast X",
  //   description: "Dom Toretto et sa famille affrontent une nouvelle menace mondiale.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/5/5e/Fast_X_poster.jpg",
  //   rating: 6.1,
  //   youtubeURL: "https://www.youtube.com/embed/eoOaKN4qCKw"
  // },
  // {
  //   title: "The Hunger Games: The Ballad of Songbirds & Snakes",
  //   description: "Préquelle explorant la jeunesse de Coriolanus Snow.",
  //   posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2e/The_Hunger_Games_The_Ballad_of_Songbirds_%26_Snakes_poster.jpg",
  //   rating: 7.5,
  //   youtubeURL: "https://www.youtube.com/embed/NxW_X4kzeus"
  // }

]


 export default Movies;