import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = new URL('./videos/WhatsApp Video 2026-05-27 at 10.08.52.mp4', import.meta.url).href;
  const poster   = new URL('./images/WhatsApp Image 2026-05-27 at 10.09.23.jpeg', import.meta.url).href;

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
              Community Video
            </span>
          </h2>
          <p className="text-base text-jaipur-dark/60 dark:text-gray-400 font-ui">
            Watch our coaching and transformation journey — from the heart of Jaipur
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Video frame with Hawa Mahal arch top */}
          <div className="relative">
            {/* Arch top decoration */}
            <div className="relative h-10 overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 flex justify-center">
                <div className="w-full max-w-4xl h-16 rounded-t-[50%] bg-gradient-to-b from-jaipur-pink/30 to-transparent border-t-2 border-x-2 border-jaipur-pink/40" />
              </div>
              {/* Crenellations */}
              <div className="absolute top-0 left-0 right-0 flex justify-center gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-jaipur-pink/30 rounded-t-sm flex-shrink-0" />
                ))}
              </div>
            </div>

            {/* Video container */}
            <div className="relative bg-jaipur-dark rounded-b-3xl overflow-hidden shadow-[0_0_60px_rgba(232,83,106,0.2)] aspect-video border-2 border-jaipur-pink/30 border-t-0">
              {!isPlaying ? (
                <>
                  <img
                    src={poster}
                    alt="Featured Video"
                    className="w-full h-full object-cover"
                  />
                  {/* Pink overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-jaipur-pink-deep/50 via-jaipur-dark/20 to-transparent hover:from-jaipur-pink-deep/30 transition-all flex items-center justify-center group cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="relative">
                      {/* Pulse rings */}
                      <div className="absolute inset-0 bg-jaipur-pink rounded-full scale-100 group-hover:scale-150 opacity-20 animate-pulse" />
                      <div className="absolute inset-0 bg-jaipur-gold rounded-full scale-100 group-hover:scale-125 opacity-15 animate-pulse" style={{ animationDelay: '0.5s' }} />
                      {/* Play button */}
                      <button className="relative w-20 h-20 bg-gradient-to-br from-jaipur-pink-deep to-jaipur-pink hover:from-jaipur-pink to-jaipur-gold rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(232,83,106,0.5)] border-2 border-jaipur-gold/50">
                        <Play size={36} className="text-white fill-white ml-1" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <video
                  className="w-full h-full object-cover"
                  src={videoUrl}
                  poster={poster}
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-jaipur-dark/60 dark:text-gray-400 font-ui text-sm">
              More inspiring videos coming soon — from the Pink City to your screen 🌸
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
