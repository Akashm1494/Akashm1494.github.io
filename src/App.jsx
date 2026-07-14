import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import LoaderScreen from "./components/LoaderScreen.jsx";

// Configure QueryClient with proper defaults
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            staleTime: 5 * 60 * 1000, // 5 minutes
            refetchOnWindowFocus: false,
        },
    },
});

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <LoaderScreen onLoadComplete={handleLoadComplete} />}
            <QueryClientProvider client={queryClient}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                    <TooltipProvider>
                        <Toaster />
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Index />} />
                                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </BrowserRouter>
                    </TooltipProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
};

export default App;
