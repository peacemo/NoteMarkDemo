import { ComponentProps } from 'react'
import { SlArrowDown, SlArrowUp, SlClose } from 'react-icons/sl'
import { twMerge } from 'tailwind-merge'

export const DraggableTopBar = () => {
  return (
    <header className="absolute inset-0 h-8 bg-transparent flex justify-end pr-3">
      <WindowButtonsRow className="justify-between mt-1" />
    </header>
  )
}

const WindowButton = ({ children, className, ...props }: ComponentProps<'button'>) => {
  return (
    <button
      className={twMerge(
        'px-1 py-1 rounded-full border border-zinc-400 hover:bg-zinc-600 transition-colors duration-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

const MinimizeButton = ({ ...props }: ComponentProps<'button'>) => {
  return (
    <WindowButton {...props}>
      <SlArrowDown className="w-2 h-2" />
    </WindowButton>
  )
}

const MaximizeButton = ({ ...props }: ComponentProps<'button'>) => {
  return (
    <WindowButton {...props}>
      <SlArrowUp className="w-2 h-2" />
    </WindowButton>
  )
}

const CloseButton = ({ ...props }: ComponentProps<'button'>) => {
  return (
    <WindowButton {...props}>
      <SlClose className="w-2 h-2" />
    </WindowButton>
  )
}

const WindowButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  // TODO add call back to minimize window
  return (
    <div {...props}>
      <MinimizeButton className="m-1" />
      <MaximizeButton className="m-1" />
      <CloseButton className="m-1" />
    </div>
  )
}
