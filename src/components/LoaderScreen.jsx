import { useEffect, useState } from 'react';

const LoaderScreen = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsExiting(true);
                        setTimeout(() => {
                            onLoadComplete();
                        }, 800);
                    }, 300);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onLoadComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-800 ${isExiting ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[10px] opacity-50">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-300" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
                </div>
            </div>

            {/* Loader content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Logo/Name with animation */}
                <div className="relative">
                    <h1 className="text-5xl md:text-7xl font-bold text-gradient glow-text animate-pulse">
                        Akash
                    </h1>
                    <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full -z-10 animate-pulse" />
                </div>

                {/* Spinner */}
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" />
                    <div className="absolute inset-2 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
                </div>

                {/* Progress bar */}
                <div className="w-64 md:w-80">
                    <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
                        <div
                            className="h-full bg-gradient-to-r from-primary via-cyan-400 to-teal-500 rounded-full transition-all duration-300 ease-out relative"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        >
                            <div className="absolute inset-0 bg-white/30 animate-pulse" />
                        </div>
                    </div>
                    <p className="text-center mt-3 text-sm text-muted-foreground font-mono">
                        {Math.floor(Math.min(progress, 100))}%
                    </p>
                </div>

                {/* Loading text */}
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoaderScreen;
