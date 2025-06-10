// src/components/Footer.jsx
import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {


  return (
    <footer id='footer' className="bg-gradient-to-br from-gray-900 to-black text-white dark:bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">FlexMovies</h2>
          <p className="text-sm text-gray-400">
            Votre plateforme ultime pour regarder, découvrir et aimer les films & séries.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-yellow-400">Accueil</a></li>
            <li><a href="#apropos" className="hover:text-yellow-400">À propos</a></li>
            
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
          <div className="flex gap-4 text-2xl text-gray-400">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-2">Recevez les dernières nouveautés par mail.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Votre email"
              className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} FlexMovies. Tous droits réservés. By CHICO JD</p>
      </div>
    </footer>
  );
}

export default Footer;
