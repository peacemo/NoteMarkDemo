import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Root layout component that provides the main container for the application.
 * Renders a full-height flex container with horizontal layout.
 */
export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen')} {...props}>
      {children}
    </main>
  )
}

/**
 * Sidebar component that renders a fixed-width vertical panel.
 * Provides scrollable container for sidebar content with 250px width.
 */
export const Sidebar = ({ children, className, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('w-[250px] h-[100vh + 10px] overflow-y-auto', className)} {...props}>
      {children}
    </aside>
  )
}

/**
 * Content component that renders the main content area.
 * Fills remaining horizontal space and provides scrolling for overflow content.
 */
export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
