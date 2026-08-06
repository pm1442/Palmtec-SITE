import Hero from "@/components/sections/Hero";
import TrustGap from "@/components/sections/TrustGap";
import PlatformGrid from "@/components/sections/PlatformGrid";
import WhyPalmTec from "@/components/sections/WhyPalmTec";
import Qualifiers from "@/components/sections/Qualifiers";
import Services from "@/components/sections/Services";
import AuditForm from "@/components/sections/AuditForm";
import HowItWorks from "@/components/sections/HowItWorks";
import Ownership from "@/components/sections/Ownership";

export default function Home() {
  return (
    <>
      <Hero />
      <Ownership />
      <TrustGap />
      <PlatformGrid />
      <HowItWorks />
      <WhyPalmTec />
      <Qualifiers />
      <Services />
      <AuditForm />
    </>
  );
}
