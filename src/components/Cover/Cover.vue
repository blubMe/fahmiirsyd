<template>
  <cover-style>
    <cover-title-style>
      <h1>Fahmiirsyd</h1>
      <q>This is my place to write some little journey.</q>
      <p>Hello, nama saya <strong>Fahmi irsyad khairi</strong>. Orang yang menuliskan pengalamannya  disini, saya seorang <strong>web developer</strong>, <strong>designer</strong> dan juga sering melakukan <strong>eksperimen</strong> dengan teknologi.</p>
      <!-- <div>
        <p>If you happy about what i doing, you can <link-yellow-style><g-link :to="{ name: 'support' }">support me</g-link></link-yellow-style>. I will show your profile picture or even your works.</p>
      </div> -->
    </cover-title-style>
    <cover-img-style>
      <div>
        <span>
          Memory is a software.
        </span>
      </div>
      <g-image alt="edge pool" src="~/assets/images/today.jpg" width="260"/>
    </cover-img-style>
  </cover-style>
</template>
<script>
import { CoverStyle, CoverTitleStyle, CoverImageStyle } from './Cover.styled.js'
import LinkYellowStyle from '../Linkyellow.styled.js'

export default {
  components: {
    'cover-style': CoverStyle,
    'cover-title-style': CoverTitleStyle,
    'cover-img-style': CoverImageStyle,
    'link-yellow-style': LinkYellowStyle
  }
}
</script>

