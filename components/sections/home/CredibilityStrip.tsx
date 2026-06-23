import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AFFILIATION_LOGOS } from "@/lib/constants";

const marqueeLogos = [...AFFILIATION_LOGOS, ...AFFILIATION_LOGOS];

function LogoTile({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-32 w-72 shrink-0 items-center justify-center px-6 sm:h-36 sm:w-80 sm:px-7">
      <Image
        src={src}
        alt={name}
        width={320}
        height={128}
        className="max-h-28 w-auto max-w-full object-contain sm:max-h-32"
      />
    </div>
  );
}

export function CredibilityStrip() {
  return (
    <section
      aria-label="Affiliations and certifications"
      className="relative overflow-hidden bg-white border-b border-surface-border"
    >
      <div className="container-site pt-10 lg:pt-11">
        <SectionHeader
          title="Affiliations & Certifications"
          labelColor="teal"
          className="mb-10"
        />

        <div className="hidden motion-reduce:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center pb-10 lg:pb-11">
          {AFFILIATION_LOGOS.map((logo) => (
            <LogoTile key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden pb-10 lg:pb-11 motion-reduce:hidden">
        <div className="flex w-max animate-marquee items-center gap-12 sm:gap-14">
          {marqueeLogos.map((logo, index) => (
            <LogoTile key={`${logo.name}-${index}`} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
