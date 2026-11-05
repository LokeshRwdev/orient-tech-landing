"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

type VideoJsPlayer = ReturnType<typeof videojs>;

const VIDEO_SOURCE =
  "https://bitiu6ibmezlvci7.public.blob.vercel-storage.com/gemini_generated_video_99ecc9b1.mp4";

export default function CinematicFilm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a video-js element for Video.js
    const videoElement = document.createElement("video-js");
    videoElement.classList.add("vjs-fill");
    videoElement.setAttribute("muted", "true");
    videoElement.setAttribute("playsinline", "true");
    videoElement.setAttribute("webkit-playsinline", "true");
    container.appendChild(videoElement);

    const player = (playerRef.current = videojs(videoElement, {
      autoplay: false,
      controls: false,
      muted: true,
      loop: true,
      playsinline: true,
      preload: "auto",
      fill: true,
      bigPlayButton: false,
      controlBar: false,
      loadingSpinner: false,
      errorDisplay: false,
      sources: [
        {
          src: VIDEO_SOURCE,
          type: "video/mp4",
        },
      ],
    }));

    // IntersectionObserver to auto-play when entering viewport and pause when leaving
    const observer = new IntersectionObserver(
      ([entry]) => {
        const activePlayer = playerRef.current;
        if (!activePlayer) return;
        if (entry.isIntersecting) {
          const promise = activePlayer.play();
          if (promise !== undefined && typeof promise.catch === "function") {
            promise.catch(() => {
              // Auto-play prevented by browser policy fallback
            });
          }
        } else {
          activePlayer.pause();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (player && typeof player.isDisposed === "function" && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <section
      aria-label="Cinematic Film"
      className="film-section relative min-h-screen min-h-[100dvh] w-full overflow-hidden border-b border-white/[0.08] bg-black"
    >
      <div
        ref={containerRef}
        className="absolute inset-0 h-full w-full [&_.vjs-tech]:h-full [&_.vjs-tech]:w-full [&_.vjs-tech]:object-cover [&_.video-js]:h-full [&_.video-js]:w-full [&_.video-js]:bg-black"
      />
    </section>
  );
}
