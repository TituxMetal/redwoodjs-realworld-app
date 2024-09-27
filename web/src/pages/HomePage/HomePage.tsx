import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import FeedTabs from 'src/components/FeedTabs/FeedTabs'
import Tags from 'src/components/Tags/Tags'
import { type Tab } from 'src/types/Tab.type'

interface Post {
  authorUsername: string
  createdAt: string
  description: string
  slug: string
  tags: string[]
  title: string
}

const HomePage = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 'your', type: 'your', name: 'Your Feed' },
    { id: 'global', type: 'global', name: 'Global Feed' }
  ])
  const [activeTabId, setActiveTabId] = useState<string>('global')

  const globalPosts = [
    {
      authorUsername: 'John Doe',
      createdAt: '2023-10-01',
      title: 'Understanding JavaScript Closures',
      description: 'A deep dive into closures, their use cases, and common pitfalls.',
      slug: 'understanding-javascript-closures',
      tags: ['JavaScript', 'Closures', 'Programming']
    },
    {
      authorUsername: 'Jane Smith',
      createdAt: '2023-09-28',
      title: 'Mastering React Hooks',
      description:
        'An in-depth guide to mastering React Hooks for cleaner and more efficient code.',
      slug: 'mastering-react-hooks',
      tags: ['React', 'Hooks', 'Frontend']
    },
    {
      authorUsername: 'Alice Wonder',
      createdAt: '2023-09-25',
      title: 'CSS Grid vs. Flexbox: When to Use Which',
      description:
        'Comparing CSS Grid and Flexbox to help you decide the best layout method for your projects.',
      slug: 'css-grid-vs-flexbox',
      tags: ['CSS', 'Grid', 'Flexbox', 'Design']
    },
    {
      authorUsername: 'Bob Builder',
      createdAt: '2023-09-20',
      title: 'Building RESTful APIs with Node.js',
      description:
        'A comprehensive guide to building scalable and robust RESTful APIs using Node.js.',
      slug: 'building-restful-apis-nodejs',
      tags: ['Node.js', 'API', 'Backend', 'REST']
    },
    {
      authorUsername: 'Charlie Brown',
      createdAt: '2023-09-15',
      title: 'Introduction to TypeScript',
      description:
        'Learn the basics of TypeScript and how it can enhance your JavaScript projects.',
      slug: 'introduction-to-typescript',
      tags: ['TypeScript', 'JavaScript', 'Programming']
    }
  ]

  // Placeholder for user-specific posts
  const yourPosts = globalPosts.filter(post => post.authorUsername === 'John Doe')

  const generateTagTabId = (tag: string) => `tag-${tag.toLowerCase().replace(/\s+/g, '-')}`

  const handleAddTagTab = (tag: string) => {
    const cleanedTag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
    const tabId = generateTagTabId(cleanedTag)

    setTabs(prevTabs => {
      const filteredTabs = prevTabs.filter(tab => tab.type !== 'tag')
      const newTab: Tab = { id: tabId, type: 'tag', name: cleanedTag }

      return [...filteredTabs, newTab]
    })

    // Set the active tab to the new tag tab
    setActiveTabId(tabId)
  }

  const handleCloseTab = (tabId: string) => {
    setTabs(prevTabs => prevTabs.filter(tab => tab.id !== tabId))

    // If the closed tab was active, revert to 'global' tab
    if (activeTabId === tabId) {
      setActiveTabId('global')
    }
  }

  const getPostsToDisplay = (): Post[] => {
    const activeTab = tabs.find(tab => tab.id === activeTabId)

    if (!activeTab) {
      return globalPosts
    }

    switch (activeTab.type) {
      case 'global':
        return globalPosts
      case 'your':
        return yourPosts
      case 'tag':
        return globalPosts.filter(post =>
          post.tags.some(tag => tag.toLowerCase() === activeTab.name.toLowerCase())
        )
      default:
        return globalPosts
    }
  }

  const postsToDisplay = getPostsToDisplay()
  const popularTags = Array.from(new Set(globalPosts.flatMap(post => post.tags))).slice(0, 10)

  return (
    <>
      <Metadata title='Home' description='Home page' />

      {/* Main Content */}

      <header className='flex h-32 w-full flex-col items-center justify-center space-y-4 bg-emerald-600 text-center text-emerald-100'>
        <h1 className=' text-4xl font-bold uppercase'>conduit</h1>
        <p className='text-2xl'>A place to share your knowledge.</p>
      </header>

      <main className='my-4 flex w-full max-w-screen-xl flex-col space-y-6'>
        <FeedTabs
          tabs={tabs}
          activeTabId={activeTabId}
          onTabChange={setActiveTabId}
          onCloseTab={handleCloseTab}
        />

        <div className='flex flex-col justify-between space-y-6 md:flex-row md:space-y-0'>
          {/* Posts List */}
          <section className='flex-1 space-y-6'>
            {postsToDisplay.length > 0 ? (
              postsToDisplay.map((post, index) => (
                <article key={index} className='rounded-lg bg-zinc-800 p-6 shadow-md'>
                  <div className='flex items-center justify-between'>
                    <span className='text-lg font-semibold text-zinc-100'>
                      {post.authorUsername}
                    </span>
                    <span className='text-zinc-400'>{post.createdAt}</span>
                  </div>
                  <h2 className='mt-2 text-2xl font-bold text-zinc-100'>{post.title}</h2>
                  <p className='mt-2 text-zinc-300'>{post.description}</p>
                  <Tags tags={post.tags} onAddTagTab={handleAddTagTab} />
                  <Link
                    to={routes.article({ slug: post.slug })}
                    className='mt-4 inline-block text-emerald-400 hover:text-emerald-300 hover:underline'
                  >
                    Read more
                  </Link>
                </article>
              ))
            ) : (
              <p className='text-zinc-300'>No posts available in this feed.</p>
            )}
          </section>

          {/* Popular Tags Section */}
          <aside className='h-full w-full rounded-lg bg-zinc-800 p-6 md:ml-4 md:w-1/4 '>
            <h3 className='text-lg font-bold text-zinc-100'>Popular Tags</h3>
            <Tags tags={popularTags} onAddTagTab={handleAddTagTab} />
          </aside>
        </div>
      </main>
    </>
  )
}

export default HomePage
