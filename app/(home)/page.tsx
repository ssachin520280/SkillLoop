import Header from "@/components/Navbar"
import HeroSection from "./components/Hero-section"
import FeaturesSection from "./components/Features"
import HowItWorksSection from "./components/Howit-works"
import BenefitsSection from "./components/Benifits"
import CtaSection from "./components/CTA"
import Footer from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
