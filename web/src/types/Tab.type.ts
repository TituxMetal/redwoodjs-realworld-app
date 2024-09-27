export type TabType = 'global' | 'your' | 'tag'
export interface Tab {
  id: string
  type: TabType
  name: string
}
