"use client"

import { cn } from "@/app/lib/utils"


export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-lg",
    md: "px-4 py-2 text-base rounded-xl",
    lg: "px-6 py-3 text-lg rounded-2xl",
  }

  return (
    <button
      className={cn(
        "font-medium transition-all duration-300 shadow-sm",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
