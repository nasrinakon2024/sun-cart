'use client'; // Client Component হিসেবে মার্ক করলাম
import { useAuth } from '../../components/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

const handleLogin = (e: any) => {
  e.preventDefault();
  const email = e.target[0].value;
  
  const success = login(email); // Context-er login call korlam
  if (success) {
    router.push('/profile');
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-2 border-orange-100">
        <h2 className="text-3xl font-bold italic text-center text-orange-600 mb-6">Welcome Back!</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Don't have an account? <a href="/register" className="text-orange-600 font-bold hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
}