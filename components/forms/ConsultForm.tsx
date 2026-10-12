"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { services } from "@/content/services";
import { whatsappLink } from "@/lib/site";

const matterTypes = [...services.map((s) => s.title), "Something else"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .or(z.literal("")),
  matterType: z
    .string()
    .refine((v) => (matterTypes as readonly string[]).includes(v), {
      message: "Choose the closest matter type",
    }),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few words about what has happened")
    .max(1500, "Please keep this under 1500 characters"),
  acknowledge: z.literal(true, {
    errorMap: () => ({ message: "Please confirm to continue" }),
  }),
});

type Values = z.infer<typeof schema>;

function buildMessage(v: Values) {
  return [
    "Hello, I would like to book a consultation.",
    "",
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    v.email ? `Email: ${v.email}` : null,
    `Matter: ${v.matterType}`,
    "",
    v.message,
  ]
    .filter((l) => l !== null)
    .join("\n");
}

/**
 * Validates, then hands the enquiry to WhatsApp as a pre-filled message.
 * Nothing is stored on a server.
 */
export function ConsultForm() {
  const [link, setLink] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", message: "" },
  });

  const onSubmit = (values: Values) => {
    const url = whatsappLink(buildMessage(values));
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (link) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-magenta/40 bg-wine-deep p-8 md:p-10"
      >
        <h2 className="text-heading">Your message is ready.</h2>
        <p className="mt-4 text-parchment/70">
          WhatsApp should have opened with your details filled in. Press send
          there to reach me. If nothing opened, use the button below.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={link} external size="md">
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden /> Open WhatsApp
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              reset();
              setLink(null);
            }}
          >
            Start over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6 rounded-2xl border border-parchment/10 bg-wine-deep/40 p-6 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Name"
          autoComplete="name"
          placeholder="Your full name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Phone"
          type="tel"
          autoComplete="tel"
          placeholder="98xxxxxxxx"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <Input
        label="Email (optional)"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <Select
        label="Type of matter"
        defaultValue=""
        error={errors.matterType?.message}
        {...register("matterType")}
      >
        <option value="" disabled>
          Select…
        </option>
        {matterTypes.map((m) => (
          <option key={m} value={m} className="bg-ink">
            {m}
          </option>
        ))}
      </Select>

      <Textarea
        label="What happened?"
        placeholder="A short summary and any key dates. Do not send confidential documents here."
        error={errors.message?.message}
        {...register("message")}
      />

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-parchment/70">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-magenta"
            aria-invalid={errors.acknowledge ? true : undefined}
            {...register("acknowledge")}
          />
          <span>
            I understand this is an enquiry only. It does not create an
            advocate–client relationship, and I am contacting Shivam Singh on
            my own initiative.
          </span>
        </label>
        {errors.acknowledge && (
          <p role="alert" className="mt-2 text-sm text-magenta">
            {errors.acknowledge.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          Send via WhatsApp
        </Button>
      </div>
    </form>
  );
}
