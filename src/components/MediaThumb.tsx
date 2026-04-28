import { useEffect, useRef, useState } from 'react';
import type { MediaItem } from '../types';
import { Icon } from './Icon';

interface MediaThumbProps {
  media: MediaItem;
  /** Eager-load first card; lazy-load the rest. */
  eager?: boolean;
}

/**
 * Lightweight thumbnail for project cards.
 * - image: <img loading="lazy">
 * - gif:   plays on hover (paused frame shown otherwise via the same source)
 * - video: shows poster + play overlay; previews on hover (muted)
 */
export function MediaThumb({ media, eager = false }: MediaThumbProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || media.kind !== 'video') return;
    if (hovering) {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [hovering, media.kind]);

  return (
    <div
      className="media-thumb"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {media.kind === 'video' ? (
        <>
          {media.poster && (
            <img
              src={media.poster}
              alt={media.alt ?? ''}
              loading={eager ? 'eager' : 'lazy'}
              className="media-thumb__poster"
            />
          )}
          <video
            ref={videoRef}
            src={media.src}
            muted
            loop
            playsInline
            preload="metadata"
            className="media-thumb__video"
            aria-hidden="true"
          />
          <span className="media-thumb__badge">
            <Icon name="play" size={12} />
            Video
          </span>
        </>
      ) : media.kind === 'gif' ? (
        <>
          <img
            src={media.src}
            alt={media.alt ?? ''}
            loading={eager ? 'eager' : 'lazy'}
            className="media-thumb__img"
          />
          <span className="media-thumb__badge">
            <Icon name="film" size={12} />
            GIF
          </span>
        </>
      ) : (
        <img
          src={media.src}
          alt={media.alt ?? ''}
          loading={eager ? 'eager' : 'lazy'}
          className="media-thumb__img"
        />
      )}
    </div>
  );
}
