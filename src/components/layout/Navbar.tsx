'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Grid de 3 colunas */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Coluna 1: Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              CupomNext
            </Link>
          </div>

          {/* Coluna 2: Campo de busca */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Buscar cupons..."
              className="w-full max-w-md px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Coluna 3: Links */}
          <div className="flex justify-end space-x-6">
            <Link href="/lojas" className="text-gray-700 hover:text-blue-600">
              Lojas
            </Link>
            <Link href="/categorias" className="text-gray-700 hover:text-blue-600">
              Categorias
            </Link>
            <Link href="/ofertas" className="text-gray-700 hover:text-blue-600">
              Ofertas
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex justify-between items-center md:hidden">
          <Link href="/" className="text-xl font-bold text-blue-600">
            CupomNext
          </Link>
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          <Link href="/lojas" className="block text-gray-700 hover:text-blue-600">
            Lojas
          </Link>
          <Link href="/categorias" className="block text-gray-700 hover:text-blue-600">
            Categorias
          </Link>
          <Link href="/ofertas" className="block text-gray-700 hover:text-blue-600">
            Ofertas
          </Link>
          <input
            type="text"
            placeholder="Buscar cupons..."
            className="mt-2 w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
