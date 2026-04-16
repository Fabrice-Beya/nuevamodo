"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  solution: string;
  message: string;
}

const industries = [
  "Industrial & Manufacturing",
  "Commercial Property",
  "Real Estate Portfolio",
  "Utilities & Energy Infrastructure",
  "Municipal & Public Sector",
  "Cold Chain & Refrigeration",
  "Logistics & Mobile Assets",
  "Other",
];

const solutions = [
  "Process Control & Instrumentation",
  "IoT Solutions",
  "Smart Monitoring Solutions",
  "Software Based Solutions",
  "General Enquiry",
];

const inputClasses =
  "w-full px-4 py-3 text-sm text-text-dark bg-white border border-surface-border rounded-xl outline-none transition-all duration-150 placeholder:text-text-muted/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10";

const labelClasses = "block text-sm font-semibold text-text-dark mb-1.5";
const emptyForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  solution: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Please describe your project";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitError) {
      setSubmitError("");
    }
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    setSubmitError("");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitError(data.message || "Something went wrong. Please try again.");
        return;
      }

      setSubmitMessage(
        data.message ||
          "Thanks for reaching out. Our team will review your message and get back to you shortly."
      );
      setSubmitted(true);
      setForm(emptyForm);
    } catch {
      setSubmitError("Unable to send your message right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-surface-soft border border-surface-border rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-green/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-brand-green" strokeWidth={1.75} />
        </div>
        <h2 className="text-xl font-bold text-text-dark mb-3">
          Message Received
        </h2>
        <p className="text-sm text-text-muted leading-relaxed max-w-sm mx-auto">
          {submitMessage ||
            "Thank you for reaching out. Our team will review your message and get back to you shortly."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-soft border border-surface-border rounded-2xl p-6 md:p-8">
      <h2 className="text-xl font-bold text-text-dark mb-1">
        Send Us a Message
      </h2>
      <p className="text-sm text-text-muted mb-7">
        Fields marked <span className="text-red-500">*</span> are required.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {submitError && (
          <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{submitError}</p>
          </div>
        )}

        {/* Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={cn(inputClasses, errors.name && "border-red-400 focus:border-red-400 focus:ring-red-100")}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="company" className={labelClasses}>
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={handleChange}
              placeholder="Your company name"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className={cn(inputClasses, errors.email && "border-red-400 focus:border-red-400 focus:ring-red-100")}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Industry + Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="industry" className={labelClasses}>
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={form.industry}
              onChange={handleChange}
              className={cn(inputClasses, "cursor-pointer")}
            >
              <option value="">Select industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="solution" className={labelClasses}>
              Solution of Interest
            </label>
            <select
              id="solution"
              name="solution"
              value={form.solution}
              onChange={handleChange}
              className={cn(inputClasses, "cursor-pointer")}
            >
              <option value="">Select solution</option>
              {solutions.map((sol) => (
                <option key={sol} value={sol}>{sol}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            Project Summary <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about what you need to monitor, automate, integrate, or digitise..."
            className={cn(
              inputClasses,
              "resize-none",
              errors.message && "border-red-400 focus:border-red-400 focus:ring-red-100"
            )}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center"
          disabled={loading}
          icon={
            loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )
          }
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
