/// <reference types="vite/client" />
import { defineAsyncComponent, defineComponent } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './routes/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/pricing',
    component: async () => await import('./routes/pricing.vue'),
  },
  {
    name: 'dashboard',
    path: '/dashboard/:domain',
    component: defineComponent((_, { attrs }) => {
      window.location.href = `https://app.thesemetrics.org/dashboard/${attrs.domain}`
      return () => null
    }),
    props: true,
  },
]

const pages = import.meta.glob('../../docs/**/*.md')

Object.entries(pages).forEach(([id, component]) => {
  const path = id.replace(/^\.\.\/\.\./, '').replace(/(index)?\.md$/, '')

  switch (path) {
    case '/docs/privacy':
    case '/docs/terms':
    case '/docs/what-we-collect':
      routes.push({ path: path.substr('/docs'.length), component })
      break
    default:
      routes.push({ path, component })
      break
  }
})

routes.push({
  path: '/:catchAll(.*)',
  redirect: '/',
})

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
