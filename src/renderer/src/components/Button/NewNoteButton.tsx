import { ActionButton, ActionButtonProps } from '@/components'
import { creatEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuFilePenLine } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(creatEmptyNoteAtom)

  const handlCreation = () => {
    createEmptyNote()
  }

  return (
    <ActionButton onClick={handlCreation} {...props}>
      <LuFilePenLine className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
