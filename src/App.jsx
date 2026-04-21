import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import LoaderScreen from "./components/LoaderScreen.jsx";

const queryClient = new QueryClient();

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <LoaderScreen onLoadComplete={handleLoadComplete} />}
            <QueryClientProvider client={queryClient}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <TooltipProvider>
                        <Toaster />
                        <Sonner />
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
