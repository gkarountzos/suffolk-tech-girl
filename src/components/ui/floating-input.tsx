"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, type, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value !== "");
    };

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full border-2 border-primary bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 peer",
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        <label
          className={cn(
            "absolute left-3 text-sm text-muted-foreground transition-all duration-200 pointer-events-none",
            isFocused || hasValue || props.value
              ? "-top-2 bg-background px-1 text-xs text-primary"
              : "top-3"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);
FloatingInput.displayName = "FloatingInput";

export interface FloatingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const FloatingTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FloatingTextareaProps
>(({ className, label, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  return (
    <div className="relative">
      <textarea
        className={cn(
          "flex min-h-[120px] w-full  border-2 border-primary bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none peer",
          className
        )}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <label
        className={cn(
          "absolute left-3 text-sm text-muted-foreground transition-all duration-200 pointer-events-none",
          isFocused || hasValue || props.value
            ? "-top-2 bg-background px-1 text-xs text-primary"
            : "top-3"
        )}
      >
        {label}
      </label>
    </div>
  );
});
FloatingTextarea.displayName = "FloatingTextarea";

export { FloatingInput, FloatingTextarea };
