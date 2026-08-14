'use client';

import { CldImage, type CldImageProps } from 'next-cloudinary';

type CloudinaryImageProps = Omit<CldImageProps, 'src'> & {
  publicId: string;
};

export function CloudinaryImage({ publicId, alt, ...props }: CloudinaryImageProps) {
  return (
    <CldImage
      src={publicId}
      alt={alt}
      format="auto"
      quality="auto"
      {...props}
    />
  );
}
