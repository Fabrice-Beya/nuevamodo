import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <div className="text-7xl font-extrabold text-brand-blue/15 mb-4">404</div>
        <h1 className="text-2xl font-bold text-text-dark mb-3">Page not found</h1>
        <p className="text-base text-text-muted leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Button
          href="/"
          variant="primary"
          size="md"
          icon={<ArrowLeft className="w-4 h-4" />}
          iconPosition="left"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
