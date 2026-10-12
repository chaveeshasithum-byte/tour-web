'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { url: string; caption?: string; alt?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-100 flex items-center justify-center bg-stone-950/95 backdrop-blur-md transition-opacity duration-300"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-6 right-6 z-110 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-4 sm:left-8 z-110 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-4 sm:right-8 z-110 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main image container */}
      <div className="max-w-6xl max-h-[85vh] mx-auto p-4 flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-lg shadow-2xl max-h-[75vh]">
          <img
            src={currentImage.url}
            alt={currentImage.alt || currentImage.caption || 'Heritage destination'}
            className="max-h-[75vh] max-w-full object-contain mx-auto transition-transform duration-300"
          />
        </div>

        {/* Caption & indicator */}
        <div className="mt-4 text-center space-y-1">
          {currentImage.caption && (
            <p className="text-stone-200 text-sm font-light tracking-wide max-w-2xl">
              {currentImage.caption}
            </p>
          )}
          <p className="text-stone-400 text-xs font-mono">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
