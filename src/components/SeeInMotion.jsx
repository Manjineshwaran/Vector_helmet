import VideoBlock from "./VideoBlock";
import { useReveal } from "../hooks/useReveal";

export default function SeeInMotion() {
  const ref = useReveal();

  return (
    <section className="motion section" ref={ref}>
      <div className="reveal">
        <VideoBlock
          title="See It In Motion"
          frameClassName="motion__frame"
          aspect="full"
          poster="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?auto=format&fit=crop&w=2000&q=85"
          src="https://cdn.coverr.co/videos/coverr-riding-motorcycle-at-sunset-5666/1080p.mp4"
        />
      </div>
    </section>
  );
}
