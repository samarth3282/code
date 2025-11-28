import { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

import { cn } from "../../lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  // cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  // cta,
  ...props
}: BentoCardProps) => (
  <Link
    to={href}
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
  >
    <div>{background}</div>
    {/* Blur overlay on hover for better text readability */}
    <div className="pointer-events-none absolute inset-0 backdrop-blur-0 transition-all duration-300 group-hover:backdrop-blur-[5px] group-hover:bg-black/30 dark:group-hover:bg-black/40" />
    <div className="p-4 relative z-10">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300">
        <Icon className="h-8 w-8 origin-left transform-gpu text-white dark:text-neutral-300 transition-all duration-300 ease-in-out" />
        <h3 className="text-xl font-semibold text-white dark:text-neutral-300">
          {name}
        </h3>
        <p className="max-w-lg text-white dark:text-neutral-400">{description}</p>
      </div>

      <div
        className={cn(
          "flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden mt-2"
        )}
      >
        <span className="text-white text-sm flex items-center">
          {/* {cta} */}
          {/* <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" /> */}
        </span>
      </div>
    </div>

    <div
      className={cn(
        "absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
      )}
    >
      <span className="text-white text-sm flex items-center">
        {/* {cta} */}
        {/* <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" /> */}
      </span>
    </div>

  </Link>
)

export { BentoCard, BentoGrid }
