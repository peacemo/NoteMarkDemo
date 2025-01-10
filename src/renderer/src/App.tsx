import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const refScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-4 bg-zinc-700">
          <ActionButtonsRow className="flex justify-between mt-8" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={refScroll} />
        </Sidebar>
        <Content className="border-l bg-zinc-900/90 border-l-white/20" ref={contentContainerRef}>
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
