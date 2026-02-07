"use client"

import { ArrowRight } from "lucide-react";
import { PublishButton } from "@/components/ui/publish-button"
import { useState } from "react";
import roastData from "@/lib/roast.json";

export function Landing() {
    const [status, setStatus] = useState<"idle" | "exiting" | "roasted">("idle");

    const handleSuccess = () => {
        setStatus("exiting");
        setTimeout(() => {
            setStatus("roasted");
        }, 500); // Wait for exit animation
    };

    if (status === "roasted") {
        return (
            <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center animate-in fade-in duration-700">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-destructive/10 bg-destructive/5 px-4 py-1.5 text-sm font-medium text-destructive backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                    </span>
                    Roast Complete
                </div>

                <div className="prose prose-xl dark:prose-invert">
                    <p className="text-md leading-relaxed font-serif text-foreground/90">
                        "{roastData.roast}"
                    </p>
                </div>

                <button
                    onClick={() => setStatus("idle")}
                    className="mt-12 text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                >
                    Roast again?
                </button>
            </div>
        )
    }

    return (
        <div className={`relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center ${status === "exiting"
                ? "animate-out fade-out slide-out-to-top-10 duration-500 fill-mode-forwards"
                : "animate-in fade-in slide-in-from-bottom-4 duration-500"
            }`}>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                AI-Powered Judgment
            </div>

            {/* Headline */}
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-8 leading-[1.05]">
                Your music taste, <br />
                <span className="text-foreground/80">absolutely roasted.</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                Discover how bad your Spotify really is. Our AI analyzes your listening history and delivers the brutal truth you've been avoiding.
            </p>

            {/* Button */}
            <div className="flex gap-4">
                <button className="bg-orange-400 hover:bg-orange-500 transition ease-in-out duration-400 px-7 py-2 text-sm shadow-md rounded-md font-semibold text-black font-sans text-center cursor-pointer flex gap-2 items-center">Sign Up <ArrowRight size={16} /></button>
                <PublishButton onSuccess={handleSuccess} />
            </div>
        </div>
    )
}