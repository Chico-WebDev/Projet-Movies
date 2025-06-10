// src/Pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat backdrop-blur-md bg-[url('https://images.unsplash.com/photo-1581905764498-bf9a9dbd3d6b?auto=format&fit=crop&w=1400&q=80')] p-6 flex items-center justify-center">
      <div className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Contactez-nous</h2>
        
        <form className="space-y-4">
          <input type="text" placeholder="Votre nom" className="w-full p-3 rounded bg-white dark:bg-gray-700 dark:text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Votre email" className="w-full p-3 rounded bg-white dark:bg-gray-700 dark:text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <textarea placeholder="Votre message" className="w-full p-3 rounded bg-white dark:bg-gray-700 dark:text-white border border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Envoyer</button>
        </form>

        <div className="mt-6 text-center">
          <a href="https://wa.me/221771234567" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            📱 Contacter sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
