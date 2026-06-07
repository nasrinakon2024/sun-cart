'use client';
import { useState } from 'react';
import { useAuth } from '../../../components/AuthContext';
import { useRouter } from 'next/navigation';

export default function UpdateProfile() {
  const { user, updateUser } = useAuth();
  
  // কন্টাক্ট নম্বরসহ স্টেট আপডেট করলাম
  const [name, setName] = useState(user?.name || '');
  const [photo, setPhoto] = useState(user?.photo || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const router = useRouter();

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // এখানে ফোন নম্বরটিও পাঠানো হচ্ছে
    updateUser({ name, photo, phone });
    alert("Profile Updated Successfully!");
    router.push('/profile');
  };

  return (
    <div className="max-w-lg mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Information</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="New Name" 
          className="w-full p-3 border rounded-xl" 
          required
        />
        
        <input 
          type="text" 
          value={photo} 
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo URL" 
          className="w-full p-3 border rounded-xl" 
        />

        {/* নতুন কন্টাক্ট নাম্বার ফিল্ড */}
        <input 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Contact Number" 
          className="w-full p-3 border rounded-xl" 
        />

        <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition">
          Update Information
        </button>
      </form>
    </div>
  );
}