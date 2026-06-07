'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // ইমপোর্ট করলাম
import products from '../lib/data.json';
import ProductImage from '../components/ProductImage';
import { useCart } from '../components/CartContext';
import { useAuth } from '../components/AuthContext'; // ইমপোর্ট করলাম

export default function Home() {
  const { addToCart } = useCart();
  const { user } = useAuth(); // AuthContext থেকে user নিলাম
  const router = useRouter(); // router নিলাম
  const popularProducts = products.slice(0, 6);

  // লগইন চেক করার ফাংশন
  const handleAddToCart = (product: any) => {
    if (!user) {
      alert("Please login first to add items to the cart!");
      router.push('/login');
    } else {
      addToCart(product);
      alert("Added to cart!");
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-[450px] bg-gradient-to-r from-orange-500 to-red-600 flex flex-col justify-center items-center text-white text-center p-6 shadow-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold italic mb-4 drop-shadow-lg">
          Summer Sale 50% OFF
        </h1>
        <p className="text-xl md:text-2xl mb-8 italic font-medium">
          Hot Deals 🔥 Get ready for the sun!
        </p>
        <Link href="/products" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-xl transform hover:scale-110">
          Shop Now
        </Link>
      </section>

      {/* Popular Products */}
      <section className="py-16 w-full max-w-6xl px-4">
        <h2 className="text-4xl font-bold italic text-center mb-12 text-gray-800 border-b-4 border-orange-500 inline-block mx-auto pb-2">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <div key={product.id} className="p-5 border-2 border-orange-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white group">
              
              <ProductImage src={product.image} alt={product.name} />

              <h3 className="font-bold text-xl mb-1">{product.name}</h3>
              <p className="text-gray-500 italic mb-2">Brand: {product.brand}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                <span className="text-yellow-500 font-bold">⭐ {product.rating}</span>
              </div>
              
              <Link href={`/products/${product.id}`} className="block text-center bg-black text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 border-2 border-transparent hover:border-orange-200 mb-2">
                View Details
              </Link>

              {/* Updated Add to Cart Button */}
              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full text-center bg-orange-100 text-orange-600 py-3 rounded-xl font-bold border-2 border-orange-200 hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Summer Care Tips Section */}
      <section className="py-16 w-full bg-orange-50">
        <h2 className="text-3xl font-bold text-center mb-8">Summer Care Tips</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          <div className="p-4 bg-white rounded-xl shadow">
            <h4 className="font-bold">Hydration</h4>
            <p className="text-sm text-gray-600">Drink at least 3 liters of water daily to stay fresh.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h4 className="font-bold">Skincare</h4>
            <p className="text-sm text-gray-600">Apply sunscreen every 3 hours while going out.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h4 className="font-bold">Clothing</h4>
            <p className="text-sm text-gray-600">Wear light cotton clothes to beat the heat.</p>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="py-16 w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Top Brands</h2>
        <div className="flex justify-center gap-8 px-4 flex-wrap">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center font-bold">Brand A</div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center font-bold">Brand B</div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center font-bold">Brand C</div>
        </div>
      </section>
    </div>
  );
}