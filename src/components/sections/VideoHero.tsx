'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const VIDEO_SRC = '/assets/video/hero.webm';
const VIDEO_SRC_MOBILE = '/assets/video/hero-mobile.webm';

export function VideoHeroSection() {
  const t = useTranslations('pages.home.video');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !VIDEO_SRC) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full aspect-[4/5] md:aspect-video">
        {VIDEO_SRC ? (
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[#f1e066]/5 blur-3xl" />
            </div>
          </div>
        )}

        {/* Play button */}
        <div className="absolute bottom-8 left-6 lg:left-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white/70 ml-0.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
            </svg>
          </div>
          <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">
            {t('play_label')}
          </span>
        </div>
      </div>
    </section>
  );
}
