import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="section-py bg-white">
      <div className="container-site max-w-3xl">
        <h1 className="text-display-md font-bold text-text-dark mb-6">Privacy Policy</h1>
        <p className="text-base text-text-muted leading-relaxed">
          This Privacy Policy will be updated. Please check back soon.
        </p>
      </div>
    </section>
  );
}
