export function Logo({ className = "" }) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 2L32 10V26L18 34L4 26V10L18 2Z"
        stroke="url(#logoGrad)"
        strokeWidth="2"
        fill="rgba(59,130,246,0.12)"
      />
      <path
        d="M18 8L26 13V23L18 28L10 23V13L18 8Z"
        fill="url(#logoGrad)"
      />
      <defs>
        <linearGradient id="logoGrad" x1="4" y1="2" x2="32" y2="34">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6h15l-1.5 9h-12z" strokeLinejoin="round" />
      <path d="M6 6L5 3H2" strokeLinecap="round" />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTruck() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="url(#iconGrad)" strokeWidth="1.6">
      <path d="M4 22h20V12H4v10zM24 16h6l4 4v2H24v-6z" strokeLinejoin="round" />
      <circle cx="10" cy="28" r="3" />
      <circle cx="28" cy="28" r="3" />
      <defs>
        <linearGradient id="iconGrad" x1="4" y1="12" x2="34" y2="28">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconShield() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="url(#iconGrad2)" strokeWidth="1.6">
      <path d="M20 6l12 4v8c0 8-5.5 13-12 15-6.5-2-12-7-12-15V10l12-4z" strokeLinejoin="round" />
      <path d="M14 20l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="iconGrad2" x1="8" y1="6" x2="32" y2="33">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconReturn() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="url(#iconGrad3)" strokeWidth="1.6">
      <path d="M12 16H8a12 12 0 1010-10" strokeLinecap="round" />
      <path d="M12 10v6h6" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="iconGrad3" x1="8" y1="6" x2="32" y2="32">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconPlay() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.5v13l11-6.5L8 5.5z" />
    </svg>
  );
}

export function IconStar({ filled = true }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#3B82F6" : "none"} stroke="#3B82F6" strokeWidth="1.5">
      <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 21l1.1-6.5L2.6 9.8l6.5-.9L12 3z" />
    </svg>
  );
}

export function IconInfinity() {
  return (
    <svg width="56" height="28" viewBox="0 0 56 28" fill="none" stroke="url(#infGrad)" strokeWidth="2.4">
      <path
        d="M28 14c-3.5 5.5-7.5 9-12 9C9.5 23 5 18.5 5 14s4.5-9 11-9c4.5 0 8.5 3.5 12 9 3.5-5.5 7.5-9 12-9 6.5 0 11 4.5 11 9s-4.5 9-11 9c-4.5 0-8.5-3.5-12-9z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="infGrad" x1="5" y1="5" x2="51" y2="23">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrow({ dir = "right" }) {
  const rotate = dir === "left" ? "180" : "0";
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
