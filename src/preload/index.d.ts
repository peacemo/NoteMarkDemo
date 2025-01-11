import { GetNotes } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getNotes: GetNotes
    } // define the context in the index.ts (same type).
  }
}
