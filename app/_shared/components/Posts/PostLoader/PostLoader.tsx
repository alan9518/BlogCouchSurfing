export const PostLoader = () => {
  return (
    <article className="w-full max-w-[95%] p-4 rounded-sm shadow-md flex flex-col gap-4">
      <div className="flex items-center justify-start py-1 gap-2">
        <div
          className="animate-pulse bg-gray-200 rounded"
          style={{ width: 50, height: 50, borderRadius: '50%' }}
        />
        <div
          className="animate-pulse bg-gray-200 rounded"
          style={{ width: 100, height: 40, borderRadius: '4px' }}
        />
      </div>

      <div
        className="animate-pulse bg-gray-200 rounded"
        style={{ width: '100%', height: 200, borderRadius: '4px' }}
      />
    </article>
  );
};
