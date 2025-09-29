import HeroSection from "../hero-section"

import dynamic from 'next/dynamic';


export default function Page() {

  const PulsingBorder = dynamic(
  () => import('@paper-design/shaders-react').then(mod => mod.PulsingBorder),
  { ssr: false }
);

  return (
    <div>
      <PulsingBorder />
      <HeroSection />
    </div>
  )
}
