import { GetNotes } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('Context isolation is required')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args)
  })
} catch (error) {
  console.error(error)
}
