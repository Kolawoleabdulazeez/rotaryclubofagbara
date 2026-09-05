"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

type ImagePlaceholderProps = {
  src: string | StaticImageData;
  alt: string;
  label?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  objectPosition?: string;
  zoom?: number; 
};

function getInitials(name: string) {
  const cleaned = name.replace(/^Rtn\.?\s*/i, "").trim();
  const parts = cleaned.split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  fill = true,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 400px",
  objectPosition = "center",
  zoom = 1,
}: ImagePlaceholderProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-mid via-navy-light to-navy-deep ${className}`}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(205,160,94,0.35),transparent_60%)]" />
        <span className="relative font-display text-white/70 text-lg tracking-wide">
          {getInitials(alt)}
        </span>
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
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition, transform: zoom !== 1 ? `scale(${zoom})` : undefined }}
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
      sizes={sizes}
      className={className}
      style={{ objectPosition, transform: zoom !== 1 ? `scale(${zoom})` : undefined }}
      onError={() => setErrored(true)}
    />
  );
}