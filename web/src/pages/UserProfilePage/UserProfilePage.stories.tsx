import type { Meta, StoryObj } from '@storybook/react'

import UserProfilePage from './UserProfilePage'

const meta: Meta<typeof UserProfilePage> = {
  component: UserProfilePage
}

export default meta

type Story = StoryObj<typeof UserProfilePage>

export const Primary: Story = {}
