// src/Pages/About.jsx
import React from 'react';

function About() {
  return (
    <section id='apropos' className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">À propos de FlexMovies</h1>
        <p className="text-lg mb-4 leading-relaxed">
          <strong>FlexMovies</strong> est une plateforme de streaming conçue pour les passionnés de films et de séries.
          Elle vous permet de découvrir les dernières nouveautés, les séries tendance, et les films populaires avec une interface moderne, rapide et responsive.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Notre objectif est de rendre le cinéma accessible à tous, gratuitement et facilement. Vous pouvez filtrer les films par titre, note ou catégorie, et les regarder directement via les trailers intégrés.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Le projet a été construit avec <span className="font-semibold">React.js</span>, <span className="font-semibold">Tailwind CSS</span>, et <span className="font-semibold">React Router</span>, en mettant l'accent sur la performance, la simplicité et l'expérience utilisateur.
        </p>
        <p className="text-lg leading-relaxed">
          N'hésitez pas à nous contacter via <strong>WhatsApp ou Email</strong> pour tout partenariat ou suggestion !
        </p>
      </div>
    </section>
  );
}

export default About;
