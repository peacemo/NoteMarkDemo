import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('Context isolation is required')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
    locale: navigator.language
  })
} catch (error) {
  console.error(error)
}
