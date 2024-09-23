import type { Meta, StoryObj } from '@storybook/react'

import EditorPage from './EditorPage'

const meta: Meta<typeof EditorPage> = {
  component: EditorPage
}

export default meta

type Story = StoryObj<typeof EditorPage>

export const Primary: Story = {}
