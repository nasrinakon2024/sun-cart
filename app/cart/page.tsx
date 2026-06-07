'use client';
import { useCart } from '../../components/CartContext';
import ProductImage from '../../components/ProductImage';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  // টোটাল প্রাইস ক্যালকুলেশন
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert("Proceeding to Checkout! (System under construction)");
  };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold italic text-center mb-12 text-gray-800">Your Cart</h1>
      
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item: any, index: number) => (
            <div key={index} className="flex items-center justify-between p-4 border-2 border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <div className="w-20"><ProductImage src={item.image} alt={item.name} /></div>
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-orange-600 font-bold">${item.price.toFixed(2)}</p>
                </div>
              </div>
              
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-bold underline transition"
              >
                Cancel
              </button>
            </div>
          ))}
          
          {/* টোটাল প্রাইস সেকশন */}
          <div className="text-right text-2xl font-bold mt-8 p-4 bg-gray-50 rounded-xl">
            Total: <span className="text-orange-600">${totalPrice.toFixed(2)}</span>
          </div>

          {/* চেকআউট বাটন */}
          <button 
            onClick={handleCheckout}
            className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition duration-300"
          >
            Checkout Now
          </button>
        </div>
      )}
    </div>
  );
}