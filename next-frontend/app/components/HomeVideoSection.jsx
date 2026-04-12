// Replace these with real video IDs when ready.
// Thumbnails are auto-fetched from YouTube's CDN — no manual uploads needed.
const VIDEOS = [
  {
    id: "f7CkDWnw6Xc",
    title: "Shabbir Alam Khan — Video 1",
  },
  {
    id: "UDc1951-IJM",
    title: "Shabbir Alam Khan — Video 2",
  },
  {
    id: "lsjFtluJQAg",
    title: "Shabbir Alam Khan — Video 3",
  },
  {
    id: "F7la1G8pAyk",
    title: "Shabbir Alam Khan — Video 4",
  },
];

const HomeVideoSection = () => {
  if (VIDEOS.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-10">
          From YouTube
        </h2>
        <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
          {VIDEOS.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-72 group"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100 mb-3 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      className="w-4 h-4 ml-0.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-700 leading-snug group-hover:text-black transition-colors duration-200 line-clamp-2">
                {video.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
