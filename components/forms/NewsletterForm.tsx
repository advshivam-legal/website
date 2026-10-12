"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
});
type Values = z.infer<typeof schema>;

/**
 * No newsletter backend yet, so submitting opens a pre-filled email to the
 * advocate asking to be added to updates. Honest about what it does.
 */
export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = ({ email }: Values) => {
    const subject = encodeURIComponent("Please add me to updates");
    const body = encodeURIComponent(`Please send new articles to: ${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center rounded-full border border-parchment/20 bg-wine-deep/50 pl-5 pr-1.5 transition-colors focus-within:border-magenta focus-within:ring-2 focus-within:ring-magenta/40">
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email"
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "newsletter-error" : undefined}
          className="min-w-0 flex-1 bg-transparent py-3 text-sm font-light text-parchment placeholder:text-parchment/40 focus:outline-none"
          {...register("email")}
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-magenta text-black transition-colors hover:bg-magenta-deep"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {errors.email && (
        <p id="newsletter-error" role="alert" className="mt-2 text-sm text-magenta">
          {errors.email.message}
        </p>
      )}
      {sent && !errors.email && (
        <p role="status" className="mt-2 text-sm text-parchment/70">
          Your email app should open with a pre-filled request.
        </p>
      )}
    </form>
  );
}
