import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-4 bg-zinc-700">
          <ActionButtonsRow className="flex justify-between mt-8" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/90 border-l-white/20 pt-8 pl-5">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
