export const PostDetailsLoader = () => {
  return (
    <section className="flex flex-col items-start justify-start gap-2">
      <div
        className="animate-pulse bg-gray-200 rounded w-full h-64"
        style={{ borderRadius: '4px' }}
      />
      <div
        className="animate-pulse bg-gray-200 rounded mt-4"
        style={{ width: 150, height: 20, borderRadius: '4px' }}
      />

      <div className="flex items-center justify-start gap-4">
        <div
          className="animate-pulse bg-gray-200 rounded mt-4"
          style={{ width: 50, height: 20, borderRadius: '4px' }}
        />

        <div
          className="animate-pulse bg-gray-200 rounded mt-4"
          style={{ width: 50, height: 20, borderRadius: '4px' }}
        />
      </div>

      <div
        className="animate-pulse bg-gray-200 rounded mt-4"
        style={{ width: '100%', height: 300, borderRadius: '4px' }}
      />
    </section>
  );
};
