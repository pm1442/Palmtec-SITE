import Hero from "@/components/sections/Hero";
import TrustGap from "@/components/sections/TrustGap";
import PlatformGrid from "@/components/sections/PlatformGrid";
import WhyPalmTec from "@/components/sections/WhyPalmTec";
import Qualifiers from "@/components/sections/Qualifiers";
import Services from "@/components/sections/Services";
import AuditForm from "@/components/sections/AuditForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustGap />
      <PlatformGrid />
      <WhyPalmTec />
      <Qualifiers />
      <Services />
      <AuditForm />
    </>
  );
}
