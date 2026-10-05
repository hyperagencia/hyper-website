import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { CloudinaryVideo } from '@/components/ui/CloudinaryVideo';
import type { GalleryBlock } from '@/data/projects';

interface ProjectGalleryBlockProps {
  block: GalleryBlock;
  locale: string;
  /** alt de las imágenes, p. ej. "Probel — Una identidad renovada" */
  alt: string;
  gradientFrom: string;
  gradientTo: string;
}

export function ProjectGalleryBlock({ block, locale, alt, gradientFrom, gradientTo }: ProjectGalleryBlockProps) {
  const spanClass = block.span === 'full' ? 'md:col-span-2' : '';

  if (block.type === 'text') {
    const text = block.text?.[locale as 'es' | 'en'] ?? block.text?.es ?? '';
    return (
      <div className={`flex items-center rounded-xl md:rounded-2xl bg-[#e8e8e8] p-8 md:p-10 ${spanClass}`}>
        <p className="text-base md:text-lg text-black/70 leading-relaxed">{text}</p>
      </div>
    );
  }

  const aspectClass = block.aspect === '16:9' ? 'aspect-video' : 'aspect-square';

  return (
    <div className={`relative overflow-hidden rounded-xl md:rounded-2xl ${aspectClass} ${spanClass}`}>
      {block.type === 'video' && block.publicId ? (
        <CloudinaryVideo
          publicId={block.publicId}
          aspect={block.aspect}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : block.type === 'image' && block.publicId ? (
        <CloudinaryImage
          publicId={block.publicId}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}
        />
      )}
    </div>
  );
}
