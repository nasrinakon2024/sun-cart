'use client';
import { useAuth } from '../../components/AuthContext'; // ফাইল পাথ ঠিক আছে কি না নিশ্চিত করো
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  // এখানে register ফাংশনটি useAuth() থেকে নিয়ে আসতে হবে
  const { register } = useAuth(); 
  const router = useRouter();

  const handleRegister = (e: any) => {
    e.preventDefault();
    
    const userData = { 
      name: e.target[0].value, 
      email: e.target[1].value 
    };

    // এখন এখানে register ফাংশনটি কাজ করবে
    const success = register(userData); 
    
    if (success) {
      router.push('/profile');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-2 border-orange-100">
        <h2 className="text-3xl font-bold italic text-center text-orange-600 mb-6">Create Account</h2>
        
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="p-3 border rounded-xl focus:outline-none focus:border-orange-500" 
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="p-3 border rounded-xl focus:outline-none focus:border-orange-500" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="p-3 border rounded-xl focus:outline-none focus:border-orange-500" 
            required 
          />
          <button 
            type="submit" 
            className="bg-black text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 border-2 border-transparent hover:border-orange-200"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Already have an account? <a href="/login" className="text-orange-600 font-bold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}