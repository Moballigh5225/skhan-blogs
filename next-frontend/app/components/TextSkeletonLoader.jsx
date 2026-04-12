const TextSkeletonLoader = () => {
  return (
    <div className="space-y-4">
      <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
      <div className="h-4 bg-gray-700 rounded w-full animate-pulse" />
      <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse" />
      <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse" />
      <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse" />
    </div>
  );
};

export default TextSkeletonLoader;
