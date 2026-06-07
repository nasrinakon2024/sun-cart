import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* প্রজেক্টের নাম SunCart আপডেট করা হয়েছে */}
        <h3 className="text-xl font-bold mb-4">SunCart Store</h3>
        <p className="mb-2">Contact: support@suncart.com | Chittagong, Bangladesh</p>
        
        <div className="flex justify-center gap-6 mb-4">
          <Link href="https://facebook.com" target="_blank" className="hover:text-orange-500">Facebook</Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-orange-500">Instagram</Link>
        </div>
        
        <p className="text-sm text-gray-400">© 2026 SunCart Store - Summer Essentials. All rights reserved.</p>
        
        <Link href="/privacy-policy" className="text-sm underline block mt-2 hover:text-orange-500">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}