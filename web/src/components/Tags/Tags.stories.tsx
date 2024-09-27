// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Tags from './Tags'

const meta: Meta<typeof Tags> = {
  component: Tags,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Tags>

export const Primary: Story = {
  args: {
    tags: ['JavaScript', 'TypeScript', 'React', 'RedwoodJs']
  }
}
