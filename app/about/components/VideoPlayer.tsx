"use client";

import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  thumbnailSrc?: string;
  videoSrc?: string;
  thumbnailAlt?: string;
}

export default function VideoPlayer({
  thumbnailSrc = "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773405344/TOJE%20AUTOS/image_2427_g0q2lt.png",
  videoSrc = "https://res.cloudinary.com/dmvwjmy23/video/upload/v1773405303/TOJE%20AUTOS/grok-video-8050f6d6-6e54-425a-8856-f50a6d500ada_nxxslf.mp4",
  thumbnailAlt = "Car at sunset",
}: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsOpen(true);
    // Trigger animation after mount
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsAnimatingIn(true));
    });
  };

  const closeModal = () => {
    setIsAnimatingIn(false);
    setIsAnimatingOut(true);
    if (videoRef.current) videoRef.current.pause();
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimatingOut(false);
    }, 350);
  };

  // Auto-play when modal opens
  useEffect(() => {
    if (isOpen && isAnimatingIn && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, isAnimatingIn]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Thumbnail Card */}
      <div className="relative w-full max-w-2x mx-auto md:h-[90vh] overflow-hidden shadow-2xl group cursor-pointer bg-black my-30"
        onClick={openModal}
      >
        {/* Thumbnail Image */}
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full object-cover aspect-video opacity-90 group-hover:opacity-75 transition-opacity duration-300"
        />

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl
            group-hover:scale-110 group-active:scale-95 transition-transform duration-200">
            {/* Triangle play icon */}
            <svg
              className="w-7 h-7 text-gray-900"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{
            backgroundColor: isAnimatingIn
              ? "rgba(0,0,0,0.85)"
              : "rgba(0,0,0,0)",
            transition: "background-color 350ms ease",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* Modal Video Box */}
          <div
            ref={modalRef}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] bg-black"
            style={{
              opacity: isAnimatingIn ? 1 : 0,
              transform: isAnimatingIn ? "scale(1) translateY(0)" : "scale(0.88) translateY(32px)",
              transition: "opacity 350ms cubic-bezier(0.16,1,0.3,1), transform 350ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/60 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors duration-150 backdrop-blur-sm"
              aria-label="Close video"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Element */}
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              className="w-full aspect-vide bg-black"
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}