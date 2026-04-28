import type { MediaItem } from '../types';

interface MediaViewerProps {
  media: MediaItem;
}

/** Full-size renderer used inside the lightbox. */
export function MediaViewer({ media }: MediaViewerProps) {
  if (media.kind === 'video') {
    return (
      <video
        key={media.src}
        src={media.src}
        poster={media.poster}
        controls
        autoPlay
        playsInline
        className="media-viewer__el"
      />
    );
  }
  return (
    <img
      key={media.src}
      src={media.src}
      alt={media.alt ?? ''}
      className="media-viewer__el"
    />
  );
}
