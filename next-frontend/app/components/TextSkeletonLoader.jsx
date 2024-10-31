// app/components/TextSkeletonLoader.jsx
const TextSkeletonLoader = () => {
  return (
    <div className="space-y-4">
      <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse" />
      <div className="h-6 bg-gray-300 rounded w-full animate-pulse" />
      <div className="h-6 bg-gray-300 rounded w-5/6 animate-pulse" />
      <div className="h-6 bg-gray-300 rounded w-4/5 animate-pulse" />
      <div className="h-6 bg-gray-300 rounded w-1/2 animate-pulse" />
    </div>
  );
};

export default TextSkeletonLoader;
