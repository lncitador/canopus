import './css/app.css'

import { createRoot } from 'react-dom/client'

import { createInertiaApp } from '@inertiajs/react'

import { ThemeProvider } from '@/providers/theme-provider'
import Layout from '@/pages/_layout'

type Page = React.ReactNode
type Pages = { default: React.ComponentType & { layout: unknown } }
type PagePromise = () => Promise<Pages>

createInertiaApp({
  progress: {
    color: '#16a34a',
  },
  resolve: async (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx')

    const outlet =
      (pages[`./pages/${name}.tsx`] as PagePromise) ||
      (pages[`./pages/${name}/page.tsx`] as PagePromise)

    try {
      const [at] = name.split('/')
      const page = await outlet()
      const LayoutInPage = await import(`./pages/${at}/_layout.tsx`)

      const fn = (children: Page) => {
        return <LayoutInPage.default>{children}</LayoutInPage.default>
      }

      page.default.layout = page.default.layout || fn
      return page
    } catch (error) {
      const page = await outlet()
      const fn = (children: Page) => <Layout>{children}</Layout>
      page.default.layout = page.default.layout || fn
      return page
    }
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <App {...props} />
      </ThemeProvider>
    )
  },
})
