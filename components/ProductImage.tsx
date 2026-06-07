'use client'; // এটি অবশ্যই দিতে হবে, কারণ এটি Client Component

export default function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-56 object-cover mb-4 rounded-xl group-hover:opacity-90 transition"
      onError={(e) => {
        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200';
      }}
    />
  );
}