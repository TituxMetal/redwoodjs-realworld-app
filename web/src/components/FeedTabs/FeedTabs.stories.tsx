import type { Meta, StoryObj } from '@storybook/react'

import FeedTabs from './FeedTabs'

const meta: Meta<typeof FeedTabs> = {
  component: FeedTabs,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FeedTabs>

export const GlobalFeed: Story = {
  args: {
    tabs: [
      { id: 'your', type: 'your', name: 'Your Feed' },
      { id: 'global', type: 'global', name: 'Global Feed' }
    ],
    activeTabId: 'global'
  }
}

export const YourFeed: Story = {
  args: {
    tabs: [
      { id: 'your', type: 'your', name: 'Your Feed' },
      { id: 'global', type: 'global', name: 'Global Feed' }
    ],
    activeTabId: 'your'
  }
}

export const TagFeed: Story = {
  args: {
    tabs: [
      { id: 'your', type: 'your', name: 'Your Feed' },
      { id: 'global', type: 'global', name: 'Global Feed' },
      { id: 'tag-typescript', type: 'tag', name: 'TypeScript' }
    ],
    activeTabId: 'tag-typescript',
    onCloseTab: () => {}
  }
}
