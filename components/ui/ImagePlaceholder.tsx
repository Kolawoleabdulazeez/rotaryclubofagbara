import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  src: string | StaticImageData;
  alt: string;
  label?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export default function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  fill = true,
  width,
  height,
}: ImagePlaceholderProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-mid via-navy-light to-navy-deep ${className}`}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(205,160,94,0.35),transparent_60%)]" />
        <div className="relative flex flex-col items-center gap-2 text-center px-4">
          <ImageIcon className="w-5 h-5 text-gold-soft/70" />
          <span className="text-[0.7rem] text-white/50 leading-snug">
            {label || alt}
            <br />
            <span className="text-white/30">{typeof src === "string" ? src : "image"}</span>
          </span>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setErrored(true)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}