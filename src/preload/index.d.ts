declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
    } // define the context in the index.ts (same type).
  }
}
