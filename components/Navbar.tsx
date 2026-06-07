'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const { user, logout } = useAuth(); 

  return (
    <nav className="p-4 md:px-10 border-b flex justify-between items-center bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg relative">
      
      <div className="font-bold italic text-2xl tracking-widest">
        SunCart
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center font-semibold italic">
        <Link href="/" className="hover:border-b-2 hover:border-white transition-all">Home</Link>
        <Link href="/products" className="hover:border-b-2 hover:border-white transition-all">Products</Link>
        <Link href="/cart" className="flex items-center gap-1 hover:border-b-2 hover:border-white transition-all">
          🛒 Cart ({cart.length})
        </Link>
        <Link href="/profile" className="hover:border-b-2 hover:border-white transition-all">My Profile</Link>
        
        {/* Auth Logic (Desktop) */}
        {user ? (
          <div className="flex items-center gap-4">
            <img 
              src={user.photo || '/avatar.png'} 
              alt="User" 
              className="w-8 h-8 rounded-full border border-white object-cover" 
              onError={(e) => { (e.target as HTMLImageElement).src = '/avatar.png'; }}
            />
            <button onClick={logout} className="bg-red-700 px-4 py-2 rounded-full font-bold hover:bg-red-800 transition">Logout</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="px-4 py-2 hover:underline">Login</Link>
            <Link href="/register" className="bg-white text-orange-600 px-5 py-2 rounded-full font-bold hover:bg-orange-100 transition-all">Register</Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Icon & Cart */}
      <div className="md:hidden flex items-center gap-4">
        <Link href="/cart" className="text-xl">🛒 ({cart.length})</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-red-600 p-4 flex flex-col gap-4 font-semibold md:hidden z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/profile" onClick={() => setIsOpen(false)}>My Profile</Link>
          
          {/* Auth Logic (Mobile) */}
          {user ? (
            <button onClick={() => { logout(); setIsOpen(false); }} className="text-left">Logout</button>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}