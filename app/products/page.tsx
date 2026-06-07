'use client'; // এটি অবশ্যই যোগ করবে কারণ আমরা useCart এবং useAuth হুক ব্যবহার করছি
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // রাউটিংয়ের জন্য
import products from '../../lib/data.json';
import ProductImage from '../../components/ProductImage';
import { useCart } from '../../components/CartContext';
import { useAuth } from '../../components/AuthContext'; // AuthContext ইম্পোর্ট করলাম

export default function ProductsPage() {
  const { addToCart } = useCart();
  const { user } = useAuth(); // AuthContext থেকে user নিলাম
  const router = useRouter(); // রাউটার নিলাম

  // লগইন চেক করার ফাংশন
  const handleAddToCart = (product: any) => {
    if (!user) {
      alert("Please login first to add items to the cart!");
      router.push('/login'); // লগইন পেজে পাঠিয়ে দিবে
    } else {
      addToCart(product);
      alert("Added to cart!");
    }
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold italic text-center mb-12 text-gray-800">
        All Our Products
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="p-5 border-2 border-orange-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white group">
            
            <ProductImage src={product.image} alt={product.name} />

            <h3 className="font-bold text-xl mb-1">{product.name}</h3>
            <p className="text-gray-500 italic mb-2">Brand: {product.brand}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-orange-600">${product.price}</span>
              <span className="text-yellow-500 font-bold">⭐ {product.rating}</span>
            </div>
            
            {/* View Details লিঙ্ক */}
            <Link href={`/products/${product.id}`} className="block text-center bg-black text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 mb-2">
              View Details
            </Link>

            {/* আপডেট করা Add to Cart বাটন */}
            <button 
              onClick={() => handleAddToCart(product)}
              className="w-full text-center bg-orange-100 text-orange-600 py-3 rounded-xl font-bold border-2 border-orange-200 hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}