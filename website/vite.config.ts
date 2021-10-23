/// <reference types="node" />
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import md from 'vite-plugin-md'
import css from 'vite-plugin-windicss'
import Path from 'path'

type BuildTarget = 'production' | 'development'
const isBuild = process.argv.includes('build')
let target: BuildTarget = isBuild ? 'production' : 'development'
let { COMMIT_REF } = process.env

if (COMMIT_REF == null || COMMIT_REF === '') {
  COMMIT_REF = 'local-build'
}

function getVersion() {
  const today = new Date()

  return `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}-${COMMIT_REF}`
}

const production = {
  __DEV__: false,
  __PROD__: true,
  __USE_SENTRY__: true,
  __VERSION__: JSON.stringify(getVersion()),
  // Vue Build Config
  __VUE_PROD_DEVTOOLS__: true,
}

const development = {
  ...production,
  __DEV__: true,
  __PROD__: false,
  __USE_SENTRY__: false,
}

const envs = { production, development }

console.log('- BUILD_TARGET: ' + target)
export default defineConfig({
  define: envs[target],
  resolve: {
    alias: {
      vue: Path.resolve(
        __dirname,
        './node_modules/vue/dist/vue.runtime.esm-bundler.js',
      ),
    },
  },
  plugins: [
    css(),
    vue({ include: [/\.vue$/, /\.md$/] }),
    md({
      wrapperClasses: 'mt-20 mb-40 md:mt-32 mb-8 prose mx-auto',
      wrapperComponent: 'DefaultLayout',
    }),
  ],
})
