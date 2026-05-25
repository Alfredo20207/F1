import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">F1 Championship</h3>
            <p className="text-gray-400">The pinnacle of motorsport competition.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">Races</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">Standings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">Teams</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="text-gray-400 hover:text-red-600 transition"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Formula 1 Championship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
