import { useEffect } from 'react';

/**
 * Custom hook to lock body scroll (for mobile menus, modals, etc.)
 * Industry best practice - used by Shadcn, Radix UI, Tailwind UI
 * 
 * @param {boolean} lock - Whether to lock the scroll
 */
export function useScrollLock(lock) {
    useEffect(() => {
        if (!lock) return;

        // Save original values
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        const originalPaddingRight = window.getComputedStyle(document.body).paddingRight;

        // Calculate scrollbar width to prevent layout shift
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Lock scroll
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        // Cleanup function - restore on unmount or when lock changes to false
        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPaddingRight;
        };
    }, [lock]);
}
