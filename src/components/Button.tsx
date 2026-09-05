import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-premium hover:-translate-y-0.5 hover:bg-primary/90",
        light: "bg-hero-foreground text-hero shadow-premium hover:-translate-y-0.5 hover:bg-hero-foreground/90",
        outline: "border border-current bg-transparent hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground",
        ghost: "bg-transparent px-2 text-current hover:text-accent",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ asChild, className, variant, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return <Component className={cn(buttonVariants({ variant }), className)} {...props} />;
}