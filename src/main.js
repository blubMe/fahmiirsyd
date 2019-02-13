// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Global styles & components
import DefaultLayout from '~/layouts/Default.vue'
import '~/libs/typeface-libre-baskerville/index.css'
import '~/assets/sass/app.scss'

// Dependencies
import Typography from 'typography'
import 'typeface-roboto'

const typography = new Typography({
  baseFontSize: '16px',
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerColor: 'hsla(0,0%,0%,0.8)',
  headerFontFamily: ['Libre Baskerville', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'Helvetica','Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push(
    { name: 'author', content: 'Fahmi Irsyad khairi' },
    { name: 'Description', content: 'My little journey' },
    { name: 'title', content: 'Fahmiirsydk' },
    { name: 'og:title', content: 'Fahmiirsydk' },
    { name: 'copyright', content: 'Fahmi Irsyad khairi' },
  )

  head.style.push({
    type: 'text/css',
    cssText: typography.toString()
  })
}