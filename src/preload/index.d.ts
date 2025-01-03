declare global {
  interface Window {
    // electron: ElectronAPI
    context: {} // define the context in the index.ts (same type).
  }
}
