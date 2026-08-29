"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Particle System ─────────────────────────────────────────────────────── */
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

function useParticles(count: number) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const COLORS = ["#c84a1e", "#e05a25", "#f07030", "#ff8c44", "#ff6020"];
    const init: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.04,
      vy: (Math.random() - 0.5) * 0.04,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    setParticles(init);

    let current = init.map((p) => ({ ...p }));

    const tick = () => {
      current = current.map((p) => {
        let nx = p.x + p.vx;
        let ny = p.y + p.vy;
        let nvx = p.vx;
        let nvy = p.vy;
        if (nx < 0 || nx > 100) { nvx = -nvx; nx = Math.max(0, Math.min(100, nx)); }
        if (ny < 0 || ny > 100) { nvy = -nvy; ny = Math.max(0, Math.min(100, ny)); }
        return { ...p, x: nx, y: ny, vx: nvx, vy: nvy };
      });
      setParticles(current.map((p) => ({ ...p })));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [count]);

  return particles;
}

/* ─── Glitch Text ─────────────────────────────────────────────────────────── */
function GlitchText({ text }: { text: string }) {
  return (
    <div className="maintenance-glitch-wrapper" aria-label={text}>
      <span className="maintenance-glitch maintenance-glitch--main">{text}</span>
      <span className="maintenance-glitch maintenance-glitch--layer1" aria-hidden="true">{text}</span>
      <span className="maintenance-glitch maintenance-glitch--layer2" aria-hidden="true">{text}</span>
    </div>
  );
}

/* ─── Countdown ──────────────────────────────────────────────────────────── */
function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="maintenance-countdown-unit">
      <div className="maintenance-countdown-number">{String(value).padStart(2, "0")}</div>
      <div className="maintenance-countdown-label">{label}</div>
    </div>
  );
}

function Countdown() {
  const TARGET_HOURS = 24;
  const [time, setTime] = useState({ h: TARGET_HOURS, m: 0, s: 0 });

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.sessionStorage.getItem("uss-maint-target") : null;
    const target = stored ? parseInt(stored) : Date.now() + TARGET_HOURS * 3600 * 1000;
    if (!stored) window.sessionStorage.setItem("uss-maint-target", String(target));

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="maintenance-countdown">
      <p className="maintenance-countdown-title">ESTIMATED RETURN IN</p>
      <div className="maintenance-countdown-row">
        <CountdownUnit value={time.h} label="HRS" />
        <span className="maintenance-countdown-sep">:</span>
        <CountdownUnit value={time.m} label="MIN" />
        <span className="maintenance-countdown-sep">:</span>
        <CountdownUnit value={time.s} label="SEC" />
      </div>
    </div>
  );
}

/* ─── Status Bar ─────────────────────────────────────────────────────────── */
function StatusBar() {
  const items = [
    { label: "Core Services", status: "offline" },
    { label: "CDN", status: "degraded" },
    { label: "Analytics", status: "online" },
    { label: "Security", status: "online" },
  ];
  return (
    <div className="maintenance-status-bar">
      {items.map((item) => (
        <div key={item.label} className="maintenance-status-item">
          <span className={`maintenance-status-dot maintenance-status-dot--${item.status}`} />
          <span className="maintenance-status-label">{item.label}</span>
          <span className={`maintenance-status-value maintenance-status-value--${item.status}`}>
            {item.status.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export function MaintenancePage() {
  const particles = useParticles(60);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .maintenance-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #050505;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Be Vietnam Pro', Arial, sans-serif;
        }
        .maintenance-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,74,30,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,74,30,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: maintenance-grid-drift 20s linear infinite;
        }
        @keyframes maintenance-grid-drift {
          0%   { transform: translate(0,0); }
          100% { transform: translate(60px, 60px); }
        }
        .maintenance-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        .maintenance-orb--1 {
          width: 600px; height: 600px;
          top: -150px; left: -150px;
          background: radial-gradient(circle, rgba(180,50,10,0.35) 0%, transparent 70%);
          animation: maintenance-orb-pulse1 8s ease-in-out infinite;
        }
        .maintenance-orb--2 {
          width: 500px; height: 500px;
          bottom: -120px; right: -120px;
          background: radial-gradient(circle, rgba(150,35,5,0.3) 0%, transparent 70%);
          animation: maintenance-orb-pulse2 10s ease-in-out infinite;
        }
        .maintenance-orb--3 {
          width: 300px; height: 300px;
          top: 40%; left: 55%;
          background: radial-gradient(circle, rgba(220,80,20,0.15) 0%, transparent 70%);
          animation: maintenance-orb-pulse1 6s ease-in-out infinite reverse;
        }
        @keyframes maintenance-orb-pulse1 {
          0%, 100% { transform: scale(1) translate(0,0); opacity: 0.8; }
          50%       { transform: scale(1.15) translate(20px, -20px); opacity: 1; }
        }
        @keyframes maintenance-orb-pulse2 {
          0%, 100% { transform: scale(1) translate(0,0); opacity: 0.7; }
          50%       { transform: scale(1.1) translate(-15px, 15px); opacity: 1; }
        }
        .maintenance-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .maintenance-particle {
          position: absolute;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        .maintenance-scanline {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.07) 2px,
            rgba(0,0,0,0.07) 4px
          );
          pointer-events: none;
        }
        .maintenance-scan-sweep {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(200,74,30,0.4), transparent);
          animation: maintenance-sweep 4s linear infinite;
        }
        @keyframes maintenance-sweep {
          0%   { top: -2px; }
          100% { top: 100%; }
        }
        .maintenance-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
          max-width: 820px;
          width: 100%;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .maintenance-content--visible {
          opacity: 1;
          transform: translateY(0);
        }
        .maintenance-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(200,74,30,0.4);
          background: rgba(200,74,30,0.08);
          border-radius: 100px;
          padding: 8px 20px;
          margin-bottom: 2.5rem;
          backdrop-filter: blur(8px);
          animation: maintenance-badge-glow 3s ease-in-out infinite;
        }
        @keyframes maintenance-badge-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,74,30,0); }
          50%       { box-shadow: 0 0 20px 2px rgba(200,74,30,0.3); }
        }
        .maintenance-badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #c84a1e;
          animation: maintenance-dot-blink 1.2s step-start infinite;
        }
        @keyframes maintenance-dot-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .maintenance-badge-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.25em;
          color: #c84a1e;
          text-transform: uppercase;
        }
        .maintenance-brand {
          font-size: clamp(13px, 2vw, 16px);
          font-weight: 700;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .maintenance-glitch-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        .maintenance-glitch {
          display: block;
          font-size: clamp(42px, 9vw, 96px);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
          text-transform: uppercase;
          color: #ffffff;
        }
        .maintenance-glitch--main {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #a0a0a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .maintenance-glitch--layer1,
        .maintenance-glitch--layer2 {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
        }
        .maintenance-glitch--layer1 {
          color: #c84a1e;
          -webkit-text-fill-color: #c84a1e;
          clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
          animation: maintenance-glitch1 4s infinite;
          opacity: 0;
        }
        .maintenance-glitch--layer2 {
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
          clip-path: polygon(0 55%, 100% 55%, 100% 75%, 0 75%);
          animation: maintenance-glitch2 4s infinite;
          opacity: 0;
        }
        @keyframes maintenance-glitch1 {
          0%, 88%, 100% { transform: translate(0); opacity: 0; }
          89%   { transform: translate(-4px, 1px); opacity: 0.8; }
          91%   { transform: translate(4px, -1px); opacity: 0.8; }
          93%   { transform: translate(-2px, 2px); opacity: 0.8; }
          95%   { transform: translate(0); opacity: 0; }
        }
        @keyframes maintenance-glitch2 {
          0%, 90%, 100% { transform: translate(0); opacity: 0; }
          91%   { transform: translate(4px, -2px); opacity: 0.7; }
          93%   { transform: translate(-3px, 1px); opacity: 0.7; }
          96%   { transform: translate(0); opacity: 0; }
        }
        .maintenance-sub {
          font-size: clamp(14px, 2.5vw, 18px);
          color: rgba(255,255,255,0.5);
          font-weight: 400;
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 3rem;
          letter-spacing: 0.02em;
        }
        .maintenance-sub strong {
          color: rgba(255,255,255,0.85);
          font-weight: 600;
        }
        .maintenance-divider {
          width: 100%;
          max-width: 480px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,74,30,0.5), transparent);
          margin: 2.5rem 0;
        }
        .maintenance-countdown {
          margin-bottom: 3rem;
        }
        .maintenance-countdown-title {
          font-size: 10px;
          letter-spacing: 0.35em;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .maintenance-countdown-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .maintenance-countdown-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .maintenance-countdown-number {
          font-size: clamp(28px, 6vw, 52px);
          font-weight: 800;
          font-variant-numeric: tabular-nums;
          color: #ffffff;
          line-height: 1;
          background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          min-width: 2ch;
          text-align: center;
        }
        .maintenance-countdown-label {
          font-size: 9px;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
        }
        .maintenance-countdown-sep {
          font-size: clamp(24px, 5vw, 44px);
          font-weight: 800;
          color: #c84a1e;
          line-height: 1;
          margin-top: -16px;
          animation: maintenance-dot-blink 1s step-start infinite;
        }
        .maintenance-status-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 2.5rem;
        }
        .maintenance-status-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 8px 14px;
          backdrop-filter: blur(6px);
        }
        .maintenance-status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .maintenance-status-dot--online   { background: #22c55e; box-shadow: 0 0 8px #22c55e; }
        .maintenance-status-dot--degraded { background: #f59e0b; box-shadow: 0 0 8px #f59e0b; animation: maintenance-dot-blink 1.5s ease-in-out infinite; }
        .maintenance-status-dot--offline  { background: #c84a1e; box-shadow: 0 0 8px #c84a1e; animation: maintenance-dot-blink 0.8s step-start infinite; }
        .maintenance-status-label {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.05em;
        }
        .maintenance-status-value {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }
        .maintenance-status-value--online   { color: #22c55e; }
        .maintenance-status-value--degraded { color: #f59e0b; }
        .maintenance-status-value--offline  { color: #c84a1e; }
        .maintenance-contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .maintenance-contact-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
        }
        .maintenance-contact-email {
          font-size: clamp(14px, 2vw, 16px);
          color: rgba(255,255,255,0.7);
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(200,74,30,0.4);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .maintenance-contact-email:hover {
          color: #c84a1e;
          border-color: #c84a1e;
        }
        .maintenance-footer {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 11px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.12);
          text-transform: uppercase;
          white-space: nowrap;
        }
        .maintenance-corner {
          position: absolute;
          width: 40px; height: 40px;
          pointer-events: none;
        }
        .maintenance-corner--tl { top: 20px; left: 20px; border-top: 2px solid rgba(200,74,30,0.4); border-left: 2px solid rgba(200,74,30,0.4); }
        .maintenance-corner--tr { top: 20px; right: 20px; border-top: 2px solid rgba(200,74,30,0.4); border-right: 2px solid rgba(200,74,30,0.4); }
        .maintenance-corner--bl { bottom: 20px; left: 20px; border-bottom: 2px solid rgba(200,74,30,0.4); border-left: 2px solid rgba(200,74,30,0.4); }
        .maintenance-corner--br { bottom: 20px; right: 20px; border-bottom: 2px solid rgba(200,74,30,0.4); border-right: 2px solid rgba(200,74,30,0.4); }
      `}</style>

      <div className="maintenance-root" role="main" aria-label="Site under maintenance">
        <div className="maintenance-grid" aria-hidden="true" />
        <div className="maintenance-orb maintenance-orb--1" aria-hidden="true" />
        <div className="maintenance-orb maintenance-orb--2" aria-hidden="true" />
        <div className="maintenance-orb maintenance-orb--3" aria-hidden="true" />

        <div className="maintenance-particles" aria-hidden="true">
          {particles.map((p) => (
            <div
              key={p.id}
              className="maintenance-particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>

        <div className="maintenance-scanline" aria-hidden="true">
          <div className="maintenance-scan-sweep" />
        </div>

        <div className="maintenance-corner maintenance-corner--tl" aria-hidden="true" />
        <div className="maintenance-corner maintenance-corner--tr" aria-hidden="true" />
        <div className="maintenance-corner maintenance-corner--bl" aria-hidden="true" />
        <div className="maintenance-corner maintenance-corner--br" aria-hidden="true" />

        <div className={`maintenance-content${mounted ? " maintenance-content--visible" : ""}`}>
          <div className="maintenance-badge" aria-live="polite">
            <span className="maintenance-badge-dot" />
            <span className="maintenance-badge-text">System Maintenance</span>
          </div>

          <p className="maintenance-brand">United Strategic Solutions</p>

          <GlitchText text="We'll Be Back" />

          <p className="maintenance-sub">
            We&apos;re currently performing <strong>scheduled maintenance</strong> to upgrade
            our systems and deliver an even better experience. Sorry for any inconvenience.
          </p>

          <Countdown />
          <StatusBar />

          <div className="maintenance-divider" aria-hidden="true" />

          <div className="maintenance-contact">
            <span className="maintenance-contact-label">In the meantime, reach us at</span>
            <a
              href="mailto:hello@unitedstrategicsolutions.com"
              className="maintenance-contact-email"
            >
              hello@unitedstrategicsolutions.com
            </a>
          </div>
        </div>

        <p className="maintenance-footer" aria-hidden="true">
          © {new Date().getFullYear()} United Strategic Solutions · UAE · UK · US
        </p>
      </div>
    </>
  );
}
