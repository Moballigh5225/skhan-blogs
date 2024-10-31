const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0 rounded-xl shadow-lg p-4 border border-gray-200 bg-gray-300 mb-4 w-full">
      <div className="w-full md:w-1/3 bg-gray-300 h-48 rounded-xl" />
      <div className="flex flex-col w-full md:w-2/3 bg-gray-300 p-2">
        <div className="bg-gray-300 h-6 w-full rounded mb-2" />
        <div className="bg-gray-300 h-4 w-3/4 rounded mb-2" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
