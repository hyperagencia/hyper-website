'use client';

import { useRef, useEffect } from 'react';
import { getCldVideoUrl, getCldImageUrl } from 'next-cloudinary';

const VIDEO_PUBLIC_ID = 'hero_sidotg';

interface LoopVideoProps {
  className?: string;
}

/** Home hero video (Cloudinary), looped and paused outside the viewport. Reused on /agencia. */
export function LoopVideo({ className }: LoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = getCldVideoUrl({
    src: VIDEO_PUBLIC_ID,
    width: 1920,
    height: 1080,
    rawTransformations: ['q_auto', 'f_auto'],
  });
  // assetType: 'video' — VIDEO_PUBLIC_ID is a video resource; without it Cloudinary looks
  // for the still frame under /image/upload/... and 404s.
  const poster = getCldImageUrl({
    src: VIDEO_PUBLIC_ID,
    assetType: 'video',
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
    <video
      ref={videoRef}
      src={videoSrc}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
}
