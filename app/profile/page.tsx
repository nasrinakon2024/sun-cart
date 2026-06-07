'use client';
import { useAuth } from '../../components/AuthContext';
import Link from 'next/link';

export default function ProfilePage() {
  const { user } = useAuth();

  // ইউজার লগইন না থাকলে মেসেজ
  if (!user) return <p className="text-center py-20">Please login to view profile.</p>;

  return (
    <div className="max-w-md mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      {/* Profile Image with Error Handling */}
      <img 
        src={user.photo || '/avatar.png'} 
        alt="Profile" 
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-500 object-cover" 
        onError={(e) => { (e.target as HTMLImageElement).src = '/avatar.png'; }}
      />
      
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600 mb-6">Contact: {user.phone || 'Not provided'}</p>
      
      <div className="flex flex-col gap-4">
        <Link href="/profile/update" className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition">
          Update Information
        </Link>

        {/* Order List section preview */}
        <div className="mt-8 text-left border-t pt-4">
          <h3 className="font-bold text-xl mb-2">Order History</h3>
          <p className="text-sm text-gray-500 italic">No orders found yet.</p>
        </div>
      </div>
    </div>
  );
}