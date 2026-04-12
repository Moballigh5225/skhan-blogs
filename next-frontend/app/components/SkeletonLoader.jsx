const SkeletonLoader = () => {
  return (
    <div className="animate-pulse border border-gray-200 p-4 flex flex-col gap-3">
      <div className="w-full bg-gray-100 h-44" />
      <div className="h-4 bg-gray-100 rounded w-3/4" />
      <div className="h-3 bg-gray-100 rounded w-1/2" />
    </div>
  );
};

export default SkeletonLoader;
