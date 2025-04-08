import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-75 [&_svg]:pointer-events-none [&_svg]:shrink-0 relative hover:z-10",
  {
    variants: {
      variant: {
        default:
          " bg-amber-500 hover:bg-amber-400 text-stone-50 hover:animate-scale-up-down",
        outline:
          "border border-amber-300 bg-amber-100 hover:bg-amber-200 hover:animate-scale-up-down",
        logo: "text-stone-950 text-lg",
        link: "text-stone-950 underline-offset-4 disabled:underline disabled:text-red-500 hover:animate-scale-up-down",
      },
      size: {
        default: "h-8 px-4 py-2",
        logo: "h-10 p-4 ps-2",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
