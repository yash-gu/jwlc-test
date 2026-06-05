import { useState } from 'react';
import { Play } from 'lucide-react';

const FEATURED_YOUTUBE_ID = '_irz18RhPDM';
const FEATURED_YOUTUBE_EMBED = `https://www.youtube.com/embed/${FEATURED_YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`;
const FEATURED_YOUTUBE_THUMB = `https://img.youtube.com/vi/${FEATURED_YOUTUBE_ID}/maxresdefault.jpg`;

const additionalVideos = [
  {
    id: 'zIiicxFjWPc',
    title: 'Weight Loss Tips & Transformation',
    description: 'Community insights and wellness coaching',
  },
  {
    id: 'xW_z2cL_Ogc',
    title: 'Quick Wellness Guide',
    description: 'Short form transformation tips',
  },
  {
    id: 'OFZc86BU97Q',
    title: 'Lifestyle Change Stories',
    description: 'Real success stories from our community',
  },
];

function VideoCard({ video }: { video: (typeof additionalVideos)[0] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const YOUTUBE_EMBED = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;
  const YOUTUBE_THUMB = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(232,83,106,0.15)] aspect-video border border-jaipur-pink/30 bg-black group animate-in fade-in slide-in-from-bottom-4 duration-700">
      {!isPlaying ? (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={YOUTUBE_THUMB}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jaipur-pink-deep/50 via-black/10 to-transparent group-hover:from-jaipur-pink-deep/30 transition-all duration-300 flex items-center justify-center">
            <button className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.6)] border-2 border-white/30">
              <Play size={28} className="text-white fill-white ml-0.5" />
            </button>
          </div>
          <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/70 rounded">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-red-600"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span className="text-white text-xs font-ui">YouTube</span>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={YOUTUBE_EMBED}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default function Video() {
  const [isFeaturedPlaying, setIsFeaturedPlaying] = useState(false);

  return (
    <section id="video" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jaipur-pink-pale/40 to-white dark:from-[#220e14] dark:to-[#1a0d10] relative overflow-hidden hawa-mahal-border">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-jaipur-pink/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section heading */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-10 bg-jaipur-pink" />
            <span className="text-jaipur-pink font-serifPremium font-semibold text-xs tracking-widest uppercase">
              Watch & Inspire
            </span>
            <span className="h-px w-10 bg-jaipur-pink" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
            Featured{' '}
            <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent">
              Community Videos
            </span>
          </h2>
          <p className="text-base text-jaipur-dark/60 dark:text-gray-400 font-ui">
            Watch our coaching and transformation journey — from the heart of Jaipur
          </p>
        </div>

        {/* Featured video */}
        <div className="max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hawa Mahal arch top decoration */}
          <div className="relative h-10 overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <div className="w-full max-w-4xl h-16 rounded-t-[50%] bg-gradient-to-b from-jaipur-pink/30 to-transparent border-t-2 border-x-2 border-jaipur-pink/40" />
            </div>
            <div className="absolute top-0 left-0 right-0 flex justify-center gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-5 h-5 bg-jaipur-pink/30 rounded-t-sm flex-shrink-0" />
              ))}
            </div>
          </div>

          {/* Featured video container */}
          <div className="relative rounded-b-3xl overflow-hidden shadow-[0_0_60px_rgba(232,83,106,0.2)] aspect-video border-2 border-jaipur-pink/30 border-t-0 bg-black group">
            {!isFeaturedPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setIsFeaturedPlaying(true)}
              >
                <img
                  src={FEATURED_YOUTUBE_THUMB}
                  alt="Jaipur Wellness Community — Featured Video"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://img.youtube.com/vi/${FEATURED_YOUTUBE_ID}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jaipur-pink-deep/50 via-black/10 to-transparent group-hover:from-jaipur-pink-deep/30 transition-all duration-300 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-jaipur-pink rounded-full opacity-20 group-hover:scale-150 scale-100 animate-pulse transition-transform duration-300" />
                    <div className="absolute inset-0 bg-jaipur-gold rounded-full opacity-10 group-hover:scale-125 scale-100 animate-pulse transition-transform duration-300" style={{ animationDelay: '0.5s' }} />
                    <button className="relative w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.6)] border-2 border-white/30">
                      <Play size={36} className="text-white fill-white ml-1" />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 rounded-lg">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-red-600"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span className="text-white text-xs font-ui font-medium">YouTube</span>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={FEATURED_YOUTUBE_EMBED}
                title="Jaipur Wellness Community — Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          <div className="text-center mt-6">
            <a
              href={`https://www.youtube.com/watch?v=${FEATURED_YOUTUBE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-jaipur-dark/60 dark:text-gray-400 hover:text-jaipur-pink dark:hover:text-jaipur-pink transition-colors font-ui text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-red-600 flex-shrink-0"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Watch on YouTube
            </a>
          </div>
        </div>

        {/* Additional videos grid */}
        <div>
          <h3 className="text-2xl font-bold text-jaipur-dark dark:text-white mb-8 text-center font-serifPremium">
            More Inspiring Videos 🌸
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalVideos.map((video, index) => (
              <div key={video.id} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <VideoCard video={video} />
                <div className="mt-3 text-center">
                  <p className="font-semibold text-jaipur-dark dark:text-white text-sm font-ui mb-0.5">
                    {video.title}
                  </p>
                  <p className="text-xs text-jaipur-dark/60 dark:text-gray-400 font-ui">
                    {video.description}
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-jaipur-pink hover:text-jaipur-pink-deep text-xs font-semibold mt-1.5 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-red-600"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
