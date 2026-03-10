"use client";

import Image from "next/image";
import { useState } from "react";

import logo3J from "@/app/logo.png";
import { artistInfo } from "@/data/landing-data";
import { cn } from "@/lib/utils";

type ArtistSignatureProps = {
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
  priority?: boolean;
};

export function ArtistSignature({
  className,
  imageClassName,
  fallbackClassName,
  priority = false,
}: ArtistSignatureProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className={cn("font-display italic", fallbackClassName)}>
        {artistInfo.signature}
      </span>
    );
  }

  return (
    <span className={cn("relative block", className)}>
      <Image
        src={logo3J}
        alt={`Firma artistica ${artistInfo.signature}`}
        fill
        priority={priority}
        suppressHydrationWarning
        onError={() => setHasError(true)}
        className={cn("object-contain", imageClassName)}
        sizes="(max-width: 768px) 96px, 120px"
      />
    </span>
  );
}
