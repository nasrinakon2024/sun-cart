import Navbar from "../components/Navbar";
import { AuthProvider } from "../components/AuthContext"; 
import { CartProvider } from "../components/CartContext";
import Footer from '../components/Footer'; // কম্পোনেন্টের সঠিক পাথে এটি ইম্পোর্ট করছি
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            {/* এখানে Footer কম্পোনেন্টটি ব্যবহার করা হয়েছে */}
            <Footer />
          </CartProvider>
        </AuthProvider>

      </body>
    </html>
  );
}