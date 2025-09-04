interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function YouTubeEmbed({
  videoId,
  title,
  className = '',
}: YouTubeEmbedProps) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ aspectRatio: '2 / 1.5' }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || 'YouTube video'}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        className='absolute inset-0 w-full h-full rounded-lg shadow-lg'
      />
    </div>
  );
}
