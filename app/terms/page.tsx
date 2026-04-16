import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <section className="section-py bg-white">
      <div className="container-site max-w-3xl">
        <h1 className="text-display-md font-bold text-text-dark mb-6">Terms & Conditions</h1>
        <p className="text-base text-text-muted leading-relaxed">
          Terms & Conditions will be updated. Please check back soon.
        </p>
      </div>
    </section>
  );
}
