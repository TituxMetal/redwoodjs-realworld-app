import type { Meta, StoryObj } from '@storybook/react'

import UserFavoritesPage from './UserFavoritesPage'

const meta: Meta<typeof UserFavoritesPage> = {
  component: UserFavoritesPage
}

export default meta

type Story = StoryObj<typeof UserFavoritesPage>

export const Primary: Story = {}
