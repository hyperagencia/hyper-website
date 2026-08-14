'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { getCldVideoUrl, getCldImageUrl } from 'next-cloudinary';

const VIDEO_PUBLIC_ID = 'hero_sidotg';

export function VideoHeroSection() {
  const t = useTranslations('pages.home.video');
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = getCldVideoUrl({
    src: VIDEO_PUBLIC_ID,
    width: 1920,
    height: 1080,
    rawTransformations: ['q_auto', 'f_auto'],
  });
  const poster = getCldImageUrl({
    src: VIDEO_PUBLIC_ID,
    width: 1920,
    height: 1080,
    format: 'auto',
    quality: 'auto',
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
    <section data-header-theme="dark" className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full aspect-[4/5] md:aspect-video">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        />

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
