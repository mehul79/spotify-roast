import { CTASection } from "@/components/ui/hero-dithering-card";
import { Landing } from "@/components/landing";

export default function Home() {

  return(
    <div className="dark bg-background h-screen flex items-center">
      <CTASection  >
            <Landing />
        </CTASection>
    </div>
  ) 
}
