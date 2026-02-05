import { cn } from "../lib/utils";

export default function Container({ children, className }: Readonly<{ children: React.ReactNode, className?: string }>) {
    return (
        <div>
            <div className={cn("max-w-4xl mx-auto px-4 ", className)}>
                {children}
            </div>
        </div>
    )
}