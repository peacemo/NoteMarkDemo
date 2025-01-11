import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuTrash2 } from 'react-icons/lu'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = () => {
    deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <LuTrash2 className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
