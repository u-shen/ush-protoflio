export const Card = ({ children }) => {
  return (
    <div className="flex-1 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
      {children}
    </div>
  );
};
