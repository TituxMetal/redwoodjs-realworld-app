import { fireEvent, render, screen } from '@redwoodjs/testing/web'

import { type Tab } from 'src/types/Tab.type'

import FeedTabs from './FeedTabs'

describe('FeedTabs', () => {
  const mockTabs = [
    { id: 'your', type: 'your', name: 'Your Feed' },
    { id: 'global', type: 'global', name: 'Global Feed' },
    { id: 'tag-typescript', type: 'tag', name: 'TypeScript' }
  ] as Tab[]

  const setup = (props = {}) => {
    const defaultProps = {
      tabs: mockTabs,
      activeTabId: 'global',
      onTabChange: jest.fn(),
      onCloseTab: jest.fn()
    }

    return render(<FeedTabs {...defaultProps} {...props} />)
  }

  it('renders successfully', () => {
    setup()

    expect(screen.getByText('Your Feed')).toBeInTheDocument()
    expect(screen.getByText('Global Feed')).toBeInTheDocument()
    expect(screen.getByText('#TypeScript')).toBeInTheDocument()
  })

  it('highlights the active tab', () => {
    setup({ activeTabId: 'your' })

    const activeTab = screen.getByText('Your Feed')

    expect(activeTab).toHaveClass('border-b-2 border-emerald-400 text-zinc-100')
  })

  it('calls onTabChange when a tab is clicked', () => {
    const onTabChange = jest.fn()

    setup({ onTabChange })

    const tab = screen.getByText('Your Feed')
    fireEvent.click(tab)

    expect(onTabChange).toHaveBeenCalledWith('your')
  })

  it('renders close button for tag tabs when onCloseTab is provided', () => {
    setup()
    const closeButton = screen.getByLabelText('Close TypeScript tab')

    expect(closeButton).toBeInTheDocument()
  })

  it('does not render close button for non-tag tabs', () => {
    setup()

    const nonTagCloseButton = screen.queryByLabelText('Close Your Feed tab')

    expect(nonTagCloseButton).not.toBeInTheDocument()
  })

  it('calls onCloseTab when close button is clicked', () => {
    const onCloseTab = jest.fn()

    setup({ onCloseTab })

    const closeButton = screen.getByLabelText('Close TypeScript tab')
    fireEvent.click(closeButton)

    expect(onCloseTab).toHaveBeenCalledWith('tag-typescript')
  })
})
