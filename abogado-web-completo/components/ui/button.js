export function Button({ children, asChild = false }) {
  return (
    <button className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition">
      {children}
    </button>
  );
}