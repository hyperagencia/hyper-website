'use client';

import { useEffect, useRef } from 'react';
import { getCldVideoUrl, getCldImageUrl } from 'next-cloudinary';

interface CloudinaryVideoProps {
  publicId: string;
  className?: string;
  width?: number;
  height?: number;
  /** Shorthand for width/height when the exact pixel size doesn't matter — '16:9', '4:5' or '1:1' (default). */
  aspect?: '1:1' | '16:9' | '4:5';
}

const ASPECT_SIZES: Record<'1:1' | '16:9' | '4:5', { width: number; height: number }> = {
  '1:1': { width: 1200, height: 1200 },
  '16:9': { width: 1600, height: 900 },
  '4:5': { width: 1080, height: 1350 },
};

/**
 * Muted autoplay loop video for project grids/covers — no player chrome,
 * plays only while in viewport (IntersectionObserver), same pattern as VideoHero.
 */
export function CloudinaryVideo({ publicId, className, width, height, aspect = '1:1' }: CloudinaryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const size = ASPECT_SIZES[aspect];
  const finalWidth = width ?? size.width;
  const finalHeight = height ?? size.height;

  const src = getCldVideoUrl({
    src: publicId,
    width: finalWidth,
    height: finalHeight,
    crop: 'fill',
    gravity: 'center',
    rawTransformations: ['q_auto', 'f_auto'],
  });
  // assetType: 'video' — the publicId is a video resource, not an image one. Without it,
  // Cloudinary looks for the still frame under /image/upload/... and 404s.
  const poster = getCldImageUrl({
    src: publicId,
    assetType: 'video',
    width: finalWidth,
    height: finalHeight,
    crop: 'fill',
    gravity: 'auto',
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
      src={src}
      poster={poster}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
    />
  );
}
