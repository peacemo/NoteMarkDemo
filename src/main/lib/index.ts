import { appDirName, fileEncoding } from '@shared/constant'
import { NoteInfo } from '@shared/models'
import { GetNotes } from '@shared/types'
import { ensureDir, readdir, stat } from 'fs-extra'
import { homedir } from 'os'
import path from 'path'

export const getRootDir = () => {
  return path.join(homedir(), 'Documents', appDirName)
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((filename) => filename.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(path.join(getRootDir(), filename))

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}
