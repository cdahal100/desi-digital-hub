import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-himalayan-900 text-white hover:bg-himalayan-800 shadow-lg hover:shadow-xl focus-visible:ring-himalayan-900',
        destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl focus-visible:ring-red-500',
        outline: 'border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow-md focus-visible:ring-slate-400',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 shadow-sm hover:shadow-md focus-visible:ring-slate-400',
        ghost: 'hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400',
        link: 'text-himalayan-900 underline-offset-4 hover:underline focus-visible:ring-himalayan-900',
        cultural: 'bg-gradient-to-r from-crimson-600 to-himalayan-900 text-white hover:from-crimson-700 hover:to-himalayan-800 shadow-xl hover:shadow-2xl focus-visible:ring-crimson-600 transform hover:scale-105',
        saffron: 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white hover:from-saffron-600 hover:to-saffron-700 shadow-lg hover:shadow-xl focus-visible:ring-saffron-500',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
