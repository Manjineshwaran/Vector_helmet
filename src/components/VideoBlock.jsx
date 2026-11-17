import { useEffect, useRef, useState } from "react";
import { IconPlay } from "./Icons";

export default function VideoBlock({
  title,
  poster,
  src,
  className = "",
  frameClassName = "vibe__frame",
  aspect = "wide",
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnded = () => setPlaying(false);
    const onPause = () => {
      if (!video.seeking) setPlaying(false);
    };
    const onPlay = () => setPlaying(true);

    video.addEventListener("ended", onEnded);
    video.addEventListener("pause", onPause);
    video.addEventListener("play", onPlay);
    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("play", onPlay);
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`${frameClassName} video-block video-block--${aspect} ${className}`.trim()}>
      <video
        ref={videoRef}
        className="video-block__media"
        poster={poster}
        src={src}
        playsInline
        preload="metadata"
        controls={playing}
      />

      {!playing && (
        <button
          type="button"
          className="vibe__overlay video-block__overlay"
          aria-label={`Play ${title || "video"}`}
          onClick={togglePlay}
        >
          {title ? <h2 className="section-label">{title}</h2> : null}
          <span className="vibe__play" aria-hidden="true">
            <IconPlay />
          </span>
        </button>
      )}
    </div>
  );
}
