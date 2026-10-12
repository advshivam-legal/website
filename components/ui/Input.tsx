import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, className, id, ...rest },
  ref,
) {
  const inputId = id ?? rest.name;
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-caption uppercase text-parchment/70"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(
          "w-full rounded-xl border bg-wine-deep/60 px-4 py-3 font-light text-parchment placeholder:text-parchment/40 transition-colors focus:border-magenta focus:outline-none focus:ring-2 focus:ring-magenta/40",
          error ? "border-magenta" : "border-parchment/15",
          className,
        )}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} role="alert" className="mt-2 text-sm text-magenta">
          {error}
        </p>
      )}
    </div>
  );
});
