
function Shimmer() {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
         {Array.from({ length: 12 }).map((_, i) => (
            <div
               key={i}
               className="h-44 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"
            />
         ))}
      </div>   
   );
}

export default Shimmer;