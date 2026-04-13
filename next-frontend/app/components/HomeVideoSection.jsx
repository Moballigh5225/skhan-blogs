const VIDEOS = [
  {
    id: "f7CkDWnw6Xc",
    title: "Book Talk | Khuda Insan aur Akhlak | Salahuddin Shabbir",
  },
  {
    id: "UDc1951-IJM",
    title: "Quran, God and Human | قرآن، خدا اور انسان | Mr. Shabbir Alam",
  },
  {
    id: "lsjFtluJQAg",
    title: "Radde Ilhaad-e-Jadeed — Tazkeer Bil Qur'an | Shabbir Alam Khan",
  },
  {
    id: "F7la1G8pAyk",
    title: "Weekly Ijtema | Linguistic Miracle of Quran | Shabbir Alam",
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
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
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
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
                    <path d="M20 16L36 24L20 32V16Z" fill="white" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-700 leading-snug group-hover:text-black transition-colors duration-200 line-clamp-2">
                {video.title}
              </h3>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://www.youtube.com/results?search_query=Shabbir+Alam+Khan+Salahuddin+Shabbir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200"
          >
            View on YouTube →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
