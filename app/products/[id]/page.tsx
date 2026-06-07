'use client';
import { useAuth } from '../../../components/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import products from '../../../lib/data.json';
import ProductImage from '../../../components/ProductImage';
import { useCart } from '../../../components/CartContext';

export default function ProductDetails({ params }: { params: { id: string } }) {
  const { user } = useAuth();
  const router = useRouter();
  const { addToCart } = useCart();

  // প্রোটেক্টেড রাউট চেক
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  // প্রোডাক্ট খুঁজে বের করা
  const product = products.find((p: any) => p.id.toString() === params.id);

  if (!user) return null; // লগইন না থাকলে কিছু দেখাবে না

  if (!product) return <p className="text-center py-20">Product not found!</p>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <ProductImage src={product.image} alt={product.name} />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-2 italic">Brand: {product.brand}</p>
          <p className="text-gray-500 mb-6">{product.description}</p>
          
          <div className="flex items-center gap-6 mb-8">
            <span className="text-3xl font-bold text-orange-600">${product.price}</span>
            <span className="text-yellow-500 font-bold text-lg">⭐ {product.rating} Rating</span>
          </div>

          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}