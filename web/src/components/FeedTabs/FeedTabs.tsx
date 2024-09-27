import React from 'react'

import { Tab } from 'src/types/Tab.type'

interface FeedTabsProps {
  tabs: Tab[]
  activeTabId: string
  onTabChange: (tabId: string) => void
  onCloseTab?: (tabId: string) => void
}

const FeedTabs: React.FC<FeedTabsProps> = ({ tabs, activeTabId, onTabChange, onCloseTab }) => {
  return (
    <div className='flex overflow-x-auto border-b border-zinc-700'>
      {tabs.map(tab => (
        <div key={tab.id} className='flex items-center'>
          <button
            className={`px-4 py-2 text-zinc-300 hover:text-zinc-100 ${
              activeTabId === tab.id ? 'border-b-2 border-emerald-400 text-zinc-100' : ''
            }`}
            onClick={() => onTabChange(tab.id)}
            aria-current={activeTabId === tab.id ? 'page' : undefined}
          >
            {tab.type === 'tag' ? `#${tab.name}` : tab.name}
          </button>
          {/* Render close button only for tag tabs */}
          {tab.type === 'tag' && onCloseTab && (
            <button
              className='px-1 text-zinc-400 hover:text-zinc-100'
              onClick={() => onCloseTab(tab.id)}
              aria-label={`Close ${tab.name} tab`}
            >
              &times;
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default FeedTabs
