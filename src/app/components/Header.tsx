import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow-sm z-50">
          <nav className="container mx-auto px-4 py-3">
              <Link href="/" className="font-bold text-xl">Sparkly Store</Link>
              <div className="space-x-4">
                <a href="/productos">Productos</a>
                <a href="/carrito">Carrito</a>
              </div>
          </nav>
        </header>
      );
}

export default Header