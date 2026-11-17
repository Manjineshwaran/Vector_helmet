import { useRef, useState } from "react";
import { helmets } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function SpinHelmets() {
  const ref = useReveal();
  const dragRef = useRef({ active: false, startX: 0, startRot: 0 });
  const [rotation, setRotation] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeId, setActiveId] = useState(helmets[0].id);

  const active = helmets.find((h) => h.id === activeId) || helmets[0];

  const onPointerDown = (e) => {
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startRot: rotation,
    };
    setPaused(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.active) return;
    const delta = e.clientX - dragRef.current.startX;
    setRotation(dragRef.current.startRot + delta * 0.35);
  };

  const endDrag = () => {
    dragRef.current.active = false;
    setPaused(false);
  };

  return (
    <section className="spin section" id="spin" ref={ref}>
      <div className="container reveal">
        <div className="spin__header">
          <h2 className="section-label">10 Helmets · 360°</h2>
          <p>Drag to spin the full collection. Each lid floats and rotates in orbit.</p>
        </div>

        <div
          className={`spin__stage ${paused ? "spin__stage--paused" : ""}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          <div
            className="spin__orbit"
            style={{ "--manual-rot": `${rotation}deg` }}
          >
            {helmets.map((helmet, index) => (
              <button
                key={helmet.id}
                type="button"
                className={`spin__item ${activeId === helmet.id ? "is-active" : ""}`}
                style={{ "--i": index, "--n": helmets.length }}
                onClick={() => setActiveId(helmet.id)}
                aria-label={`View ${helmet.name}`}
              >
                <span className="spin__float">
                  <span className="spin__rotate">
                    <img src={helmet.image} alt={helmet.name} draggable={false} />
                  </span>
                </span>
                <span className="spin__name">{helmet.name}</span>
              </button>
            ))}
          </div>
          <div className="spin__floor" aria-hidden="true" />
        </div>

        <div className="spin__detail">
          <div>
            <p className="spin__tag">{active.tag}</p>
            <h3>{active.name}</h3>
            <p className="spin__price">{active.price}</p>
          </div>
          <a href="#bestsellers" className="btn-gradient">
            Shop This Helmet
          </a>
        </div>
      </div>
    </section>
  );
}
