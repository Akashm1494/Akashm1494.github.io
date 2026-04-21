import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const mouse = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const rafId = useRef();

    useEffect(() => {
        // Hide on touch devices
        if ("ontouchstart" in window) return;

        const onMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
            if (!isVisible) setIsVisible(true);
        };

        const onMouseEnter = () => setIsVisible(true);
        const onMouseLeave = () => setIsVisible(false);

        const interactiveSelector = "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

        const onPointerOver = (e) => {
            if (e.target.closest(interactiveSelector)) {
                setIsHovering(true);
            }
        };
        const onPointerOut = (e) => {
            if (e.target.closest(interactiveSelector)) {
                setIsHovering(false);
            }
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseover", onPointerOver);
        document.addEventListener("mouseout", onPointerOut);

        const animate = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
            ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
            }
            rafId.current = requestAnimationFrame(animate);
        };
        rafId.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseover", onPointerOver);
            document.removeEventListener("mouseout", onPointerOut);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [isVisible]);

    // Hide on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return null;

    return (
        <>
            {/* Dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                <div
                    className={`rounded-full transition-all duration-300 ${isHovering ? "w-2 h-2 opacity-60" : "w-1.5 h-1.5 opacity-100"
                        } bg-primary`}
                />
            </div>
            {/* Ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                <div
                    className={`rounded-full border transition-all duration-300 ${isHovering
                        ? "w-12 h-12 border-primary/60 shadow-[0_0_20px_hsl(175_80%_50%/0.2)]"
                        : "w-8 h-8 border-primary/40"
                        }`}
                />
            </div>
            <style>{`* { cursor: none !important; }`}</style>
        </>
    );
};

export default CustomCursor;
