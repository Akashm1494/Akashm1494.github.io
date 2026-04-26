import { useEffect, useRef } from "react";

const getPrimaryHue = () => {
    if (typeof window === "undefined") return 175;
    const raw = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    const first = parseFloat(raw.split(" ")[0]);
    return Number.isFinite(first) ? first : 175;
};

const getThemePalette = () => {
    const dark = document.documentElement.classList.contains("dark");
    return {
        dark,
        fadeAlpha: dark ? 0.20 : 0.35,
        hueWave: dark ? 24 : 18,
        satMin: dark ? 80 : 70,
        satRange: dark ? 20 : 15,
        litMin: dark ? 55 : 48,
        litRange: dark ? 25 : 18,
    };
};

class Particle {
    constructor(x, y, clicking, hue, palette) {
        this.x = x + (Math.random() - 0.5) * (clicking ? 18 : 4);
        this.y = y + (Math.random() - 0.5) * (clicking ? 18 : 4);

        const speed = clicking ? 1.5 + Math.random() * 3.5 : 0.4 + Math.random() * 1.2;
        const angle = Math.random() * Math.PI * 2;

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed - (clicking ? 0 : 0.5);
        this.life = 1;
        this.decay = clicking ? 0.018 + Math.random() * 0.025 : 0.012 + Math.random() * 0.018;

        this.size = clicking ? 3 + Math.random() * 7 : 1.5 + Math.random() * 3.5;

        this.hue = hue + (Math.random() - 0.5) * 28;
        this.sat = palette.satMin + Math.random() * palette.satRange;
        this.lit = palette.litMin + Math.random() * palette.litRange;

        this.shape = clicking ? Math.floor(Math.random() * 3) : 0;
        this.rot = Math.random() * Math.PI * 2;
        this.rotSpd = (Math.random() - 0.5) * 0.2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.04;
        this.vx *= 0.98;
        this.life -= this.decay;
        this.rot += this.rotSpd;
        this.size *= 0.992;
    }

    draw(ctx) {
        if (this.life <= 0) return;

        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life * this.life);
        ctx.fillStyle = `hsl(${this.hue}, ${this.sat}%, ${this.lit}%)`;
        ctx.shadowColor = `hsl(${this.hue}, ${this.sat}%, ${this.lit}%)`;
        ctx.shadowBlur = this.size * 3;

        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);

        if (this.shape === 1) {
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.shape === 2) {
            ctx.beginPath();
            const outer = this.size;
            const inner = this.size * 0.4;
            const points = 4;

            for (let i = 0; i < points * 2; i += 1) {
                const radius = i % 2 === 0 ? outer : inner;
                const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
                const px = Math.cos(angle) * radius;
                const py = Math.sin(angle) * radius;

                if (i === 0) {
                    ctx.moveTo(px, py);
                } else {
                    ctx.lineTo(px, py);
                }
            }

            ctx.closePath();
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }
}

const CustomCursor = () => {
    // Early return for mobile/touch devices before any hooks
    if (typeof window !== "undefined" && ("ontouchstart" in window || window.matchMedia("(pointer: coarse)").matches)) {
        return null;
    }

    const canvasRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const canvas = canvasRef.current;
        const dot = dotRef.current;
        if (!canvas || !dot) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let mx = width / 2;
        let my = height / 2;
        let clicking = false;
        let baseHue = getPrimaryHue();
        let hue = baseHue;
        let frame = 0;
        let rafId = 0;
        const particles = [];
        dot.style.opacity = "0";

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            baseHue = getPrimaryHue();
        };

        const onMouseMove = (event) => {
            mx = event.clientX;
            my = event.clientY;
            dot.style.left = `${mx}px`;
            dot.style.top = `${my}px`;
            dot.style.opacity = "1";

            // Check if hovering over interactive elements
            const target = event.target;
            const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');

            if (isInteractive) {
                dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            } else {
                dot.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        };

        const onMouseDown = () => {
            clicking = true;
        };

        const onMouseUp = () => {
            clicking = false;
        };

        const spawnTrail = () => {
            const palette = getThemePalette();
            const count = clicking ? 5 : 1;
            for (let i = 0; i < count; i += 1) {
                particles.push(new Particle(mx, my, clicking, hue, palette));
            }
        };

        const loop = () => {
            rafId = requestAnimationFrame(loop);
            const palette = getThemePalette();

            // Use destination-out to fade old particles without drawing a dark layer over the page.
            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = `rgba(0, 0, 0, ${palette.fadeAlpha})`;
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "source-over";

            frame += 1;
            hue = baseHue + Math.sin(frame * 0.03) * palette.hueWave;
            spawnTrail();

            for (let i = particles.length - 1; i >= 0; i -= 1) {
                particles[i].update();
                particles[i].draw(ctx);

                if (particles[i].life <= 0 || particles[i].size < 0.3) {
                    particles.splice(i, 1);
                }
            }
        };

        window.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        loop();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, []);

    return (
        <>
            <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9996]" />

            <div
                ref={dotRef}
                data-custom-cursor-dot="true"
                className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 border-2"
                style={{
                    background: "hsl(var(--primary))",
                    borderColor: "hsl(var(--primary) / 0.4)",
                    boxShadow: "0 0 16px hsl(var(--primary) / 0.8), 0 0 8px hsl(var(--primary) / 0.5)",
                    transition: "transform 0.08s ease, width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
                }}
            />

            <style>{`
                body, body * {
                    cursor: none !important;
                }
                body:active [data-custom-cursor-dot="true"] {
                    width: 18px !important;
                    height: 18px !important;
                    box-shadow: 0 0 24px hsl(var(--primary) / 0.9), 0 0 12px hsl(var(--primary) / 0.6) !important;
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
