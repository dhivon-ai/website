import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "radix-ui";

const buttonVariants = cva(
  "min-h-[52px] px-[26px] py-3 text-[17px] inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[7px] border border-solid border-primary font-[650] no-underline focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#234464]",
      },
      size: {
        default: "",
        navigation: "max-[701px]:min-h-10 max-[701px]:px-[15px] max-[701px]:py-2 max-[701px]:text-[13px]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
